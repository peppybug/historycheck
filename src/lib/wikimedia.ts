import "server-only";

/**
 * Live lookups used by the editorial workspace when adding records.
 * Mirrors the logic of scripts/enrich.ts for single items.
 */
const UA = "HistorycheckBot/1.0 (open-source historical database; https://github.com/peppybug/historycheck)";

async function get(url: string) {
  const res = await fetch(url, { headers: { "User-Agent": UA, Accept: "application/json" }, cache: "no-store" });
  if (!res.ok) throw new Error(`Wikimedia returned HTTP ${res.status}`);
  return res.json();
}

const strip = (s?: string | null) =>
  (s ?? "")
    .replace(/<[^>]+>/g, "")
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, '"')
    .replace(/&#0?39;/g, "'")
    .replace(/&nbsp;/g, " ")
    .replace(/\s+/g, " ")
    .trim();

export interface CommonsImage {
  file: string;
  url: string;
  thumbUrl: string;
  thumbWidth: number;
  thumbHeight: number;
  smallUrl: string;
  width: number;
  height: number;
  mime: string;
  caption: string;
  description: string | null;
  creator: string | null;
  dateText: string | null;
  sourceUrl: string;
  license: string;
  licenseUrl: string | null;
  attributionRequired: boolean;
}

export async function fetchCommonsImage(input: string): Promise<CommonsImage> {
  const name = decodeURIComponent(input.trim().replace(/^https?:\/\/[^/]+\/wiki\//, "").replace(/^(File|Image):/i, "").replace(/_/g, " "));
  if (!name) throw new Error("Enter a Wikimedia Commons file name.");
  const file = `File:${name}`;
  const params = new URLSearchParams({
    action: "query",
    format: "json",
    formatversion: "2",
    prop: "imageinfo",
    iiprop: "url|size|mime|extmetadata",
    iiurlwidth: "1280",
    titles: file,
  });
  const j = await get(`https://commons.wikimedia.org/w/api.php?${params}`);
  const page = j.query?.pages?.[0];
  const ii = page?.imageinfo?.[0];
  if (!page || page.missing || !ii) throw new Error(`“${name}” was not found on Wikimedia Commons.`);
  const md = ii.extmetadata ?? {};
  const v = (k: string) => (md[k]?.value as string | undefined) ?? null;
  const license = strip(v("LicenseShortName")) || strip(v("UsageTerms"));
  if (!license) throw new Error("This file has no licence information and cannot be used.");
  const thumbUrl: string = ii.thumburl ?? ii.url;
  const smallUrl = thumbUrl.includes("/1280px-") ? thumbUrl.replace("/1280px-", "/500px-") : thumbUrl;
  const check = await fetch(thumbUrl, { method: "HEAD", headers: { "User-Agent": UA } });
  if (!check.ok) throw new Error(`The image rendition could not be loaded (HTTP ${check.status}).`);
  return {
    file: page.title,
    url: ii.url,
    thumbUrl,
    thumbWidth: ii.thumbwidth ?? ii.width,
    thumbHeight: ii.thumbheight ?? ii.height,
    smallUrl,
    width: ii.width,
    height: ii.height,
    mime: ii.mime,
    caption: strip(v("ObjectName")) || strip(v("ImageDescription")).slice(0, 300) || name,
    description: strip(v("ImageDescription")).slice(0, 600) || null,
    creator: strip(v("Artist")).slice(0, 200) || null,
    dateText: strip(v("DateTimeOriginal")).slice(0, 120) || null,
    sourceUrl: ii.descriptionurl,
    license,
    licenseUrl: strip(v("LicenseUrl")) || null,
    attributionRequired: v("AttributionRequired") === "true",
  };
}

export interface WikiSubject {
  title: string;
  url: string;
  qid: string | null;
  shortDescription: string | null;
  extract: string | null;
  leadImage: string | null;
  p18: string | null;
  birth: WDate | null;
  death: WDate | null;
  lat: number | null;
  lng: number | null;
  isHuman: boolean;
}

export interface WDate {
  year: number;
  month: number | null;
  day: number | null;
  precision: "day" | "month" | "year" | "decade" | "century";
}

function wdTime(claim: any): WDate | null {
  const v = claim?.mainsnak?.datavalue?.value;
  const m = v?.time ? /^([+-])(\d+)-(\d{2})-(\d{2})/.exec(v.time) : null;
  if (!m) return null;
  const year = Number(m[2]) * (m[1] === "-" ? -1 : 1);
  const p = v.precision as number;
  return {
    year,
    month: p >= 10 ? Number(m[3]) || null : null,
    day: p >= 11 ? Number(m[4]) || null : null,
    precision: p >= 11 ? "day" : p === 10 ? "month" : p === 9 ? "year" : p === 8 ? "decade" : "century",
  };
}

export async function fetchWikiSubject(title: string): Promise<WikiSubject> {
  const params = new URLSearchParams({
    action: "query",
    format: "json",
    formatversion: "2",
    redirects: "1",
    prop: "pageprops|info|extracts",
    inprop: "url",
    exintro: "1",
    explaintext: "1",
    titles: title.trim(),
  });
  const j = await get(`https://en.wikipedia.org/w/api.php?${params}`);
  const p = j.query?.pages?.[0];
  if (!p || p.missing) throw new Error(`No Wikipedia article is titled “${title}”.`);
  if (p.pageprops?.disambiguation !== undefined) throw new Error(`“${p.title}” is a disambiguation page. Use the exact article title.`);
  const qid: string | null = p.pageprops?.wikibase_item ?? null;
  let entity: any = null;
  if (qid) {
    const w = await get(`https://www.wikidata.org/w/api.php?action=wbgetentities&format=json&props=claims|descriptions&languages=en&ids=${qid}`);
    entity = w.entities?.[qid];
  }
  const claim = (pr: string) => (entity?.claims?.[pr] ?? []).find((c: any) => c.rank === "preferred") ?? entity?.claims?.[pr]?.[0];
  const coord = claim("P625")?.mainsnak?.datavalue?.value;
  const sentences = (p.extract ?? "").match(/[^.!?]+[.!?]+(\s|$)/g) ?? [];
  return {
    title: p.title,
    url: p.fullurl,
    qid,
    shortDescription: p.pageprops?.["wikibase-shortdesc"] ?? entity?.descriptions?.en?.value ?? null,
    extract: sentences.slice(0, 4).join("").trim() || null,
    leadImage: p.pageprops?.page_image_free ?? null,
    p18: claim("P18")?.mainsnak?.datavalue?.value ?? null,
    birth: wdTime(claim("P569")),
    death: wdTime(claim("P570")),
    lat: coord?.latitude ?? null,
    lng: coord?.longitude ?? null,
    isHuman: (entity?.claims?.P31 ?? []).some((c: any) => c.mainsnak?.datavalue?.value?.id === "Q5"),
  };
}

export async function checkLink(url: string): Promise<number> {
  try {
    const ctrl = new AbortController();
    const t = setTimeout(() => ctrl.abort(), 15000);
    let res = await fetch(url, { method: "HEAD", redirect: "follow", signal: ctrl.signal, headers: { "User-Agent": UA } });
    if (res.status === 405 || res.status === 403) res = await fetch(url, { redirect: "follow", signal: ctrl.signal, headers: { "User-Agent": UA } });
    clearTimeout(t);
    return res.status;
  } catch {
    return 0;
  }
}
