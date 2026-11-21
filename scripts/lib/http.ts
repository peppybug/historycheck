/**
 * Polite HTTP client for Wikimedia and source verification.
 * - identifies itself with a descriptive User-Agent (Wikimedia policy)
 * - enforces a minimum interval per host
 * - retries 429/5xx with exponential backoff, honouring Retry-After
 * - caches GET responses on disk so enrichment is cheap to re-run
 */
import { createHash } from "node:crypto";
import { existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

export const USER_AGENT =
  "HistorycheckBot/1.0 (open-source historical database; https://github.com/peppybug/historycheck)";

const CACHE_DIR = join(process.cwd(), "data", "cache");
const lastHit = new Map<string, number>();
const MIN_INTERVAL: Record<string, number> = {
  "www.wikidata.org": 1100,
  "en.wikipedia.org": 400,
  "commons.wikimedia.org": 600,
  "upload.wikimedia.org": 250,
};

const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

async function throttle(host: string) {
  const min = MIN_INTERVAL[host] ?? 500;
  const last = lastHit.get(host) ?? 0;
  const wait = last + min - Date.now();
  if (wait > 0) await sleep(wait);
  lastHit.set(host, Date.now());
}

function cachePath(key: string) {
  return join(CACHE_DIR, createHash("sha1").update(key).digest("hex") + ".json");
}

export async function getJson<T = any>(url: string, { cache = true } = {}): Promise<T> {
  if (cache) {
    const p = cachePath(url);
    if (existsSync(p)) return JSON.parse(readFileSync(p, "utf8"));
  }
  const host = new URL(url).host;
  for (let attempt = 0; attempt < 7; attempt++) {
    await throttle(host);
    let res: Response;
    try {
      res = await fetch(url, { headers: { "User-Agent": USER_AGENT, Accept: "application/json" } });
    } catch (e) {
      await sleep(2000 * (attempt + 1));
      continue;
    }
    if (res.status === 429 || res.status >= 500) {
      const ra = Number(res.headers.get("retry-after"));
      const backoff = Number.isFinite(ra) && ra > 0 ? ra * 1000 : 3000 * 2 ** attempt;
      console.warn(`  ${res.status} from ${host}; backing off ${Math.round(backoff / 1000)}s`);
      await sleep(Math.min(backoff, 120_000));
      continue;
    }
    if (!res.ok) throw new Error(`HTTP ${res.status} for ${url}`);
    const json = await res.json();
    if (cache) {
      mkdirSync(CACHE_DIR, { recursive: true });
      writeFileSync(cachePath(url), JSON.stringify(json));
    }
    return json as T;
  }
  throw new Error(`Giving up on ${url}`);
}

export interface LinkCheck {
  status: number;
  finalUrl: string;
  title?: string;
}

/** Checks that a URL is reachable. Uses a cached result when available. */
export async function checkUrl(url: string, { wantTitle = false } = {}): Promise<LinkCheck> {
  const key = `check:${wantTitle}:${url}`;
  const p = cachePath(key);
  if (existsSync(p)) return JSON.parse(readFileSync(p, "utf8"));
  const host = new URL(url).host;
  let result: LinkCheck = { status: 0, finalUrl: url };
  for (let attempt = 0; attempt < 3; attempt++) {
    await throttle(host);
    try {
      const ctrl = new AbortController();
      const t = setTimeout(() => ctrl.abort(), 20_000);
      const method = wantTitle ? "GET" : "HEAD";
      let res = await fetch(url, { method, redirect: "follow", signal: ctrl.signal, headers: { "User-Agent": USER_AGENT } });
      if (method === "HEAD" && (res.status === 405 || res.status === 403)) {
        res = await fetch(url, { method: "GET", redirect: "follow", signal: ctrl.signal, headers: { "User-Agent": USER_AGENT } });
      }
      clearTimeout(t);
      result = { status: res.status, finalUrl: res.url || url };
      if (res.status === 429 && attempt < 2) {
        await sleep(5000 * (attempt + 1));
        continue;
      }
      if (wantTitle && res.ok && (res.headers.get("content-type") ?? "").includes("html")) {
        const html = (await res.text()).slice(0, 200_000);
        const m = /<title[^>]*>([\s\S]*?)<\/title>/i.exec(html);
        if (m) result.title = decodeEntities(m[1].replace(/\s+/g, " ").trim());
      } else {
        await res.body?.cancel();
      }
      break;
    } catch {
      result = { status: 0, finalUrl: url };
      await sleep(1500);
    }
  }
  mkdirSync(CACHE_DIR, { recursive: true });
  writeFileSync(p, JSON.stringify(result));
  return result;
}

export function decodeEntities(s: string): string {
  return s
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, '"')
    .replace(/&#0?39;|&apos;/g, "'")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&nbsp;/g, " ")
    .replace(/&#(\d+);/g, (_, n) => String.fromCharCode(Number(n)));
}

export function stripHtml(s: string | undefined | null): string {
  if (!s) return "";
  return decodeEntities(
    s
      .replace(/<br\s*\/?>/gi, " ")
      .replace(/<[^>]+>/g, "")
      .replace(/\s+/g, " ")
      .trim(),
  );
}
