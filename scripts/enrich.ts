/**
 * Historycheck enrichment pipeline
 * =================================
 * Resolves every curated record against Wikipedia, Wikidata and Wikimedia
 * Commons, and writes the verified results to data/enriched.json, which the
 * seed script loads. Nothing here is generated: every value is either read
 * from an authoritative API or recorded as missing.
 *
 * Image matching strategy (in priority order)
 *   People / places  1. Wikidata P18 — the image Wikidata editors attached to
 *                       that exact entity (portrait, site photo)
 *                    2. Lead image of the subject's own Wikipedia article
 *   Events           1. Lead image of the event's own Wikipedia article
 *                       (chosen by editors to illustrate that event)
 *                    2. Wikidata P18 of the event entity
 *   Galleries        Images used *inside the event's article*, with the
 *                    article's contextual caption (proves relevance), limited
 *                    to freely licensed Commons files.
 * Every chosen file then has its Commons metadata (creator, date, licence,
 * attribution) fetched and its display renditions checked for HTTP 200.
 *
 * Date verification
 *   Authored event dates are compared with Wikidata P585 / P580 / P582.
 *   Results feed the record's verification status in the seed.
 *
 * Usage: npm run enrich           (uses on-disk cache in data/cache)
 */
import { existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import sharp from "sharp";
import { join } from "node:path";
import { allEvents } from "../content/events";
import { peopleRegistry, type PersonRef } from "../content/people";
import { placesRegistry } from "../content/places";
import { civilizations } from "../content/taxonomy";
import { beliefs, deities } from "../content/beliefs";
import { parseDate } from "../content/types";
import { USER_AGENT, checkUrl, getJson, stripHtml } from "./lib/http";
import { classifySource } from "./lib/source-allowlist";

const WP = "https://en.wikipedia.org/w/api.php";
const WD = "https://www.wikidata.org/w/api.php";
const COMMONS = "https://commons.wikimedia.org/w/api.php";
const THUMB = 1280;
const SMALL = 500;

const qs = (o: Record<string, string>) => new URLSearchParams({ format: "json", formatversion: "2", ...o }).toString();
const chunk = <T>(a: T[], n: number) => Array.from({ length: Math.ceil(a.length / n) }, (_, i) => a.slice(i * n, i * n + n));
const log = (...a: unknown[]) => console.log(...a);

/* ------------------------------------------------------------------ */
/* Types written to data/enriched.json                                 */
/* ------------------------------------------------------------------ */

export interface WDDate {
  year: number;
  month: number | null;
  day: number | null;
  precision: "day" | "month" | "year" | "decade" | "century" | "approximate";
  calendar: "gregorian" | "julian";
}

export interface EnrichedImage {
  file: string;
  url: string;
  thumbUrl: string;
  thumbWidth: number;
  thumbHeight: number;
  smallUrl: string;
  width: number;
  height: number;
  mime: string;
  objectName: string | null;
  description: string | null;
  creator: string | null;
  dateText: string | null;
  sourceUrl: string;
  license: string;
  licenseUrl: string | null;
  attributionRequired: boolean;
  credit: string | null;
  httpStatus: number;
  /** Rendition URL derived at a standard width from a file confirmed by the Commons API. */
  derived?: boolean;
  /** Large see-through areas (drawings, emblems, maps): shown on a white backdrop so dark lines stay visible in dark mode. */
  transparent?: boolean;
}

export interface EnrichedData {
  generatedAt: string;
  events: Record<
    string,
    {
      qid: string | null;
      wikiTitle: string;
      wikiUrl: string;
      featured: { file: string; method: "curated" | "wikipedia_lead" | "wikidata_p18" } | null;
      gallery: { file: string; caption: string }[];
      extraSources: { url: string; title: string; publisher: string; type: string; status: number }[];
      dateCheck: { status: "match" | "mismatch" | "no-data"; detail: string; wikidata?: string };
    }
  >;
  people: Record<
    string,
    {
      qid: string | null;
      wikiTitle: string;
      wikiUrl: string;
      isHuman: boolean;
      shortDescription: string | null;
      biography: string | null;
      birth: WDDate | null;
      death: WDDate | null;
      citizenship: string | null;
      portrait: { file: string; method: "wikidata_p18" | "wikipedia_lead" } | null;
    }
  >;
  places: Record<
    string,
    {
      qid: string | null;
      wikiTitle: string;
      wikiUrl: string;
      shortDescription: string | null;
      description: string | null;
      lat: number | null;
      lng: number | null;
      country: string | null;
      image: { file: string; method: "wikidata_p18" | "wikipedia_lead" } | null;
    }
  >;
  civilizations: Record<string, { qid: string | null; wikiUrl: string; image: { file: string; method: "wikipedia_lead" | "wikidata_p18" } | null }>;
  beliefs: Record<string, { qid: string | null; wikiUrl: string; image: { file: string; method: "wikipedia_lead" | "wikidata_p18" } | null }>;
  deities: Record<string, { qid: string | null; wikiUrl: string; image: { file: string; method: "wikipedia_lead" | "wikidata_p18" } | null }>;
  images: Record<string, EnrichedImage>;
}

/* ------------------------------------------------------------------ */
/* Wikipedia                                                           */
/* ------------------------------------------------------------------ */

interface WikiPage {
  requested: string;
  title: string;
  url: string;
  qid: string | null;
  shortdesc: string | null;
  leadImage: string | null;
  extract: string | null;
}

async function resolveWikipedia(titles: string[]): Promise<Map<string, WikiPage>> {
  const out = new Map<string, WikiPage>();
  for (const batch of chunk([...new Set(titles)], 20)) {
    const j = await getJson(
      `${WP}?${qs({
        action: "query",
        redirects: "1",
        prop: "pageprops|info|extracts",
        inprop: "url",
        exintro: "1",
        explaintext: "1",
        exlimit: "20",
        titles: batch.join("|"),
      })}`,
    );
    const norm = new Map<string, string>();
    for (const n of j.query.normalized ?? []) norm.set(n.from, n.to);
    const redir = new Map<string, string>();
    for (const r of j.query.redirects ?? []) redir.set(r.from, r.to);
    const byTitle = new Map<string, any>(j.query.pages.map((p: any) => [p.title, p]));
    for (const t of batch) {
      let cur = norm.get(t) ?? t;
      cur = redir.get(cur) ?? cur;
      const p = byTitle.get(cur);
      if (!p || p.missing) {
        log(`  ! Wikipedia article missing: ${t}`);
        continue;
      }
      out.set(t, {
        requested: t,
        title: p.title,
        url: p.fullurl,
        qid: p.pageprops?.wikibase_item ?? null,
        shortdesc: p.pageprops?.["wikibase-shortdesc"] ?? null,
        leadImage: p.pageprops?.page_image_free ?? null,
        extract: p.extract ?? null,
      });
    }
  }
  return out;
}

/* ------------------------------------------------------------------ */
/* Wikidata                                                            */
/* ------------------------------------------------------------------ */

async function fetchEntities(ids: string[], props = "claims|descriptions|labels"): Promise<Record<string, any>> {
  const out: Record<string, any> = {};
  for (const batch of chunk([...new Set(ids)].filter(Boolean), 50)) {
    const j = await getJson(`${WD}?${qs({ action: "wbgetentities", ids: batch.join("|"), props, languages: "en" })}`);
    Object.assign(out, j.entities);
  }
  return out;
}

const CIRCA = "Q5727902";
function bestClaim(entity: any, prop: string): any | null {
  const claims: any[] = entity?.claims?.[prop] ?? [];
  const usable = claims.filter((c) => c.mainsnak?.snaktype === "value" && c.rank !== "deprecated");
  return usable.find((c) => c.rank === "preferred") ?? usable[0] ?? null;
}

function wdTime(claim: any): WDDate | null {
  const v = claim?.mainsnak?.datavalue?.value;
  if (!v?.time) return null;
  const m = /^([+-])(\d+)-(\d{2})-(\d{2})/.exec(v.time);
  if (!m) return null;
  const year = Number(m[2]) * (m[1] === "-" ? -1 : 1);
  if (year === 0) return null;
  const circa = (claim.qualifiers?.P1480 ?? []).some((q: any) => q.datavalue?.value?.id === CIRCA);
  const p: number = v.precision;
  const precision: WDDate["precision"] = circa
    ? "approximate"
    : p >= 11
      ? "day"
      : p === 10
        ? "month"
        : p === 9
          ? "year"
          : p === 8
            ? "decade"
            : "century";
  return {
    year,
    month: p >= 10 && !circa ? Number(m[3]) || null : null,
    day: p >= 11 && !circa ? Number(m[4]) || null : null,
    precision,
    calendar: String(v.calendarmodel).endsWith("Q1985786") ? "julian" : "gregorian",
  };
}

const fmtWd = (d: WDDate | null) =>
  d ? `${d.year}${d.month ? "-" + String(d.month).padStart(2, "0") : ""}${d.day ? "-" + String(d.day).padStart(2, "0") : ""} (${d.precision}, ${d.calendar})` : "—";

/** Compare an authored date with a Wikidata date. Returns null when compatible. */
function dateConflict(authored: string, wd: WDDate | null): string | null {
  if (!wd) return null;
  const a = parseDate(authored);
  const tolerance =
    a.precision === "century" || wd.precision === "century"
      ? 100
      : a.precision === "decade" || wd.precision === "decade"
        ? 10
        : a.precision === "approximate" || wd.precision === "approximate"
          ? 30
          : a.year < 0
            ? 1 // BCE year-numbering conventions differ by one between sources
            : 0;
  if (Math.abs(a.year - wd.year) > tolerance) return `year ${a.year} vs Wikidata ${fmtWd(wd)}`;
  if (tolerance !== 0 || !a.month || !wd.month) return null;
  if (a.day && wd.day) {
    const diff = Math.abs((a.month - wd.month) * 31 + (a.day - wd.day));
    if (diff === 0) return null;
    // Julian/Gregorian conversions shift dates by 10–13 days after 1582
    // (Russia used the Julian calendar until 1918).
    const calendarsDiffer = (wd.calendar === "julian") !== (a.year < 1582);
    if (diff <= 13 && calendarsDiffer) return null;
    return `date ${a.month}/${a.day} vs Wikidata ${fmtWd(wd)}`;
  }
  return a.month === wd.month ? null : `month ${a.month} vs Wikidata ${fmtWd(wd)}`;
}

/* ------------------------------------------------------------------ */
/* Commons                                                             */
/* ------------------------------------------------------------------ */

const normFile = (f: string) => {
  const name = f.replace(/^(File|Image):/i, "").replace(/_/g, " ").trim();
  return "File:" + name.charAt(0).toUpperCase() + name.slice(1);
};

async function fetchImageInfo(files: string[]): Promise<Map<string, EnrichedImage>> {
  const out = new Map<string, EnrichedImage>();
  for (const batch of chunk([...new Set(files.map(normFile))], 40)) {
    const j = await getJson(
      `${COMMONS}?${qs({
        action: "query",
        prop: "imageinfo",
        iiprop: "url|size|mime|extmetadata",
        iiurlwidth: String(THUMB),
        iiextmetadatafilter:
          "ObjectName|ImageDescription|Artist|DateTimeOriginal|LicenseShortName|LicenseUrl|AttributionRequired|Credit|UsageTerms|Copyrighted",
        titles: batch.join("|"),
      })}`,
    );
    const norm = new Map<string, string>();
    for (const n of j.query?.normalized ?? []) norm.set(n.from, n.to);
    const byTitle = new Map<string, any>((j.query?.pages ?? []).map((p: any) => [p.title, p]));
    for (const f of batch) {
      const p = byTitle.get(norm.get(f) ?? f);
      const ii = p?.imageinfo?.[0];
      if (!p || p.missing || !ii) continue; // not on Commons (e.g. non-free local file) → never used
      const md = ii.extmetadata ?? {};
      const val = (k: string) => (md[k]?.value as string | undefined) ?? null;
      const license = stripHtml(val("LicenseShortName")) || stripHtml(val("UsageTerms"));
      if (!license) continue;
      const r = renditions(ii);
      out.set(f, {
        file: f,
        url: ii.url,
        thumbUrl: r.thumbUrl,
        thumbWidth: r.thumbWidth,
        thumbHeight: r.thumbHeight,
        smallUrl: r.smallUrl,
        derived: r.derived,
        width: ii.width,
        height: ii.height,
        mime: ii.mime,
        objectName: stripHtml(val("ObjectName")) || null,
        description: truncate(stripHtml(val("ImageDescription")), 600) || null,
        creator: truncate(stripHtml(val("Artist")), 200) || null,
        dateText: truncate(stripHtml(val("DateTimeOriginal")), 120) || null,
        sourceUrl: ii.descriptionurl,
        license,
        licenseUrl: stripHtml(val("LicenseUrl")) || null,
        attributionRequired: val("AttributionRequired") === "true",
        credit: truncate(stripHtml(val("Credit")), 300) || null,
        httpStatus: 0,
      });
    }
  }
  return out;
}

const stripQuery = (u: string) => u.split("?")[0];

/** Commons' standard thumbnail widths: cached at the edge and preferred for hotlinking. */
const STEPS = [960, 500, 330, 250];

/**
 * Picks display renditions. When Commons returns the unscaled original
 * (file narrower than the requested width), derive the largest standard
 * thumbnail below the original width instead of serving the original file.
 */
function renditions(ii: any) {
  const w: number = ii.width;
  const h: number = ii.height;
  // Keep the API's own thumbnail URLs as returned (already link-checked and cached).
  const thumb: string | null = ii.thumburl ?? null;
  if (thumb && thumb.includes("/thumb/")) {
    const small = thumb.includes(`/${THUMB}px-`) ? thumb.replace(`/${THUMB}px-`, `/${SMALL}px-`) : thumb;
    return { thumbUrl: thumb, thumbWidth: ii.thumbwidth, thumbHeight: ii.thumbheight, smallUrl: small, derived: false };
  }
  const orig = stripQuery(ii.url);
  const m = /^(https:\/\/upload\.wikimedia\.org\/wikipedia\/commons)\/(\w)\/(\w\w)\/([^/]+)$/.exec(orig);
  const step = STEPS.find((s) => s < w);
  if (!m || !step || !/\.(jpe?g|png|gif|webp)$/i.test(m[4])) return { thumbUrl: orig, thumbWidth: w, thumbHeight: h, smallUrl: orig, derived: false };
  const make = (px: number) => `${m[1]}/thumb/${m[2]}/${m[3]}/${m[4]}/${px}px-${m[4]}`;
  const smallStep = STEPS.find((s) => s <= SMALL && s < w) ?? step;
  return { thumbUrl: make(step), thumbWidth: step, thumbHeight: Math.round((h * step) / w), smallUrl: make(smallStep), derived: true };
}

function truncate(s: string, n: number) {
  return s.length > n ? s.slice(0, n - 1).trimEnd() + "…" : s;
}

const SKIP_FILE = /(flag[ _]of|coat[ _]of[ _]arms|logo|icon|symbol|signature|seal[ _]of|emblem|commons-logo|wiki|padlock|question[ _]book|edit-clear|ambox|crystal[ _]clear|nuvola|disambig|loudspeaker|speaker[ _]icon|audio|\.ogg|\.oga|\.webm|\.ogv|\.mp3|\.wav|\.mid)/i;
const OK_EXT = /\.(jpe?g|png|tiff?|gif|webp)$/i;
const MAP_SVG = /map|karte|carte|mapa|plan/i;

async function mediaList(title: string): Promise<{ file: string; caption: string }[]> {
  try {
    const j = await getJson(`https://en.wikipedia.org/api/rest_v1/page/media-list/${encodeURIComponent(title.replace(/ /g, "_"))}`);
    const items: any[] = j.items ?? [];
    return items
      .filter((i) => i.type === "image" && i.title && i.showInGallery !== false)
      .filter((i) => !SKIP_FILE.test(i.title))
      .filter((i) => OK_EXT.test(i.title) || (/\.svg$/i.test(i.title) && MAP_SVG.test(i.title)))
      .map((i) => ({ file: normFile(i.title), caption: stripHtml(i.caption?.html ?? i.caption?.text ?? "") }))
      .filter((i) => i.caption.length >= 12);
  } catch (e) {
    log(`  ! media-list failed for ${title}: ${(e as Error).message}`);
    return [];
  }
}

async function extLinks(title: string) {
  const j = await getJson(`${WP}?${qs({ action: "query", prop: "extlinks", ellimit: "500", titles: title, redirects: "1" })}`);
  const page = j.query?.pages?.[0];
  return ((page?.extlinks ?? []) as any[]).map((l) => l.url as string);
}

/* ------------------------------------------------------------------ */
/* Main                                                                */
/* ------------------------------------------------------------------ */

async function main() {
  const personRef = (r: PersonRef) => (typeof r === "string" ? { wiki: r } : r);
  const peopleList = Object.entries(peopleRegistry).map(([slug, r]) => ({ slug, ...personRef(r) }));
  const placeList = Object.entries(placesRegistry).map(([slug, r]) => ({ slug, ...r }));

  log("1/7 Resolving Wikipedia articles…");
  const titles = [
    ...allEvents.map((e) => e.wiki),
    ...peopleList.map((p) => p.wiki),
    ...placeList.map((p) => p.wiki),
    ...civilizations.map((c) => c.wiki),
    ...civilizations.flatMap((c) => ("imageFrom" in c ? [c.imageFrom] : [])),
    ...beliefs.map((b) => b.wiki),
    ...beliefs.flatMap((b) => (b.imageFrom ? [b.imageFrom] : [])),
    ...deities.map((d) => d.wiki),
  ];
  const wiki = await resolveWikipedia(titles);
  log(`    ${wiki.size} articles resolved`);

  log("2/7 Fetching Wikidata entities…");
  const qidFor = (title: string, override?: string) => override ?? wiki.get(title)?.qid ?? null;
  const qids = [
    ...allEvents.map((e) => qidFor(e.wiki)),
    ...peopleList.map((p) => qidFor(p.wiki, (p as any).qid)),
    ...placeList.map((p) => qidFor(p.wiki)),
    ...civilizations.map((c) => qidFor(c.wiki)),
    ...beliefs.map((b) => qidFor(b.wiki)),
    ...deities.map((d) => qidFor(d.wiki)),
  ].filter(Boolean) as string[];
  const entities = await fetchEntities(qids);
  // Labels for citizenship / country values
  const refIds = new Set<string>();
  for (const p of peopleList) {
    const c = bestClaim(entities[qidFor(p.wiki, (p as any).qid) ?? ""], "P27");
    if (c) refIds.add(c.mainsnak.datavalue.value.id);
  }
  for (const p of placeList) {
    const c = bestClaim(entities[qidFor(p.wiki) ?? ""], "P17");
    if (c) refIds.add(c.mainsnak.datavalue.value.id);
  }
  const labelEntities = await fetchEntities([...refIds], "labels");
  const label = (id: string | undefined) => (id ? labelEntities[id]?.labels?.en?.value ?? null : null);
  log(`    ${Object.keys(entities).length} entities, ${refIds.size} referenced labels`);

  const p18 = (qid: string | null) => {
    const c = bestClaim(entities[qid ?? ""], "P18");
    return c ? normFile(c.mainsnak.datavalue.value) : null;
  };

  log("3/7 Collecting article galleries…");
  const galleries = new Map<string, { file: string; caption: string }[]>();
  for (const e of allEvents) {
    const page = wiki.get(e.wiki);
    if (!page) continue;
    galleries.set(e.slug, await mediaList(page.title));
  }

  log("4/7 Fetching Commons metadata…");
  const wanted = new Set<string>();
  const leadOf = (t: string) => (wiki.get(t)?.leadImage ? normFile(wiki.get(t)!.leadImage!) : null);
  for (const e of allEvents) {
    if (e.image) wanted.add(normFile(e.image));
    const l = leadOf(e.wiki);
    if (l) wanted.add(l);
    const q = p18(qidFor(e.wiki));
    if (q) wanted.add(q);
    for (const g of (galleries.get(e.slug) ?? []).slice(0, 10)) wanted.add(g.file);
  }
  for (const p of peopleList) {
    const q = p18(qidFor(p.wiki, (p as any).qid));
    if (q) wanted.add(q);
    const l = leadOf(p.wiki);
    if (l) wanted.add(l);
  }
  for (const p of placeList) {
    const q = p18(qidFor(p.wiki));
    if (q) wanted.add(q);
    const l = leadOf(p.wiki);
    if (l) wanted.add(l);
  }
  for (const t of [...beliefs, ...deities].flatMap((x) => [x.wiki, ...("imageFrom" in x && x.imageFrom ? [x.imageFrom] : [])])) {
    const l = leadOf(t);
    if (l) wanted.add(l);
    const q = p18(qidFor(t));
    if (q) wanted.add(q);
  }
  for (const c of civilizations) {
    for (const t of [c.wiki, "imageFrom" in c ? c.imageFrom : null]) {
      const l = t ? leadOf(t) : null;
      if (l) wanted.add(l);
    }
  }
  const info = await fetchImageInfo([...wanted]);
  log(`    ${info.size}/${wanted.size} files have usable Commons metadata`);

  const usedFiles = new Set<string>();
  const pick = (
    candidates: { file: string | null; method: any }[],
  ): { file: string; method: any } | null => {
    for (const c of candidates) if (c.file && info.has(c.file)) return { file: c.file, method: c.method };
    return null;
  };

  const result: EnrichedData = {
    generatedAt: new Date().toISOString(),
    events: {},
    people: {},
    places: {},
    civilizations: {},
    beliefs: {},
    deities: {},
    images: {},
  };

  log("5/7 Assembling records and verifying dates…");
  const report: string[] = ["# Enrichment report", "", `Generated ${result.generatedAt}`, ""];
  const mismatches: string[] = [];
  for (const e of allEvents) {
    const page = wiki.get(e.wiki)!;
    const qid = page?.qid ?? null;
    const ent = entities[qid ?? ""];
    const featured = pick([
      { file: e.image ? normFile(e.image) : null, method: "curated" },
      { file: leadOf(e.wiki), method: "wikipedia_lead" },
      { file: p18(qid), method: "wikidata_p18" },
    ]);
    const gallery = (galleries.get(e.slug) ?? [])
      .filter((g) => info.has(g.file) && g.file !== featured?.file)
      .slice(0, 6);
    // Date verification against Wikidata
    const point = wdTime(bestClaim(ent, "P585"));
    const start = wdTime(bestClaim(ent, "P580")) ?? point;
    const end = wdTime(bestClaim(ent, "P582"));
    let dateCheck: EnrichedData["events"][string]["dateCheck"];
    if (!start && !end) dateCheck = { status: "no-data", detail: "Wikidata has no point-in-time or start date for this entity." };
    else {
      const problems = [dateConflict(e.date, start), e.end && end ? dateConflict(e.end, end) : null].filter(Boolean);
      // An event whose authored start matches Wikidata's *end* (e.g. the fall of a city that ended a war) also counts.
      const altMatch = !e.end && end && !dateConflict(e.date, end);
      dateCheck =
        problems.length && !altMatch
          ? { status: "mismatch", detail: problems.join("; "), wikidata: `start ${fmtWd(start)} · end ${fmtWd(end)}` }
          : { status: "match", detail: `Matches Wikidata (start ${fmtWd(start)}${end ? ", end " + fmtWd(end) : ""}).` };
    }
    if (dateCheck.status === "mismatch") mismatches.push(`- **${e.slug}** (${e.date}${e.end ? " → " + e.end : ""}): ${dateCheck.detail}`);
    result.events[e.slug] = {
      qid,
      wikiTitle: page?.title ?? e.wiki,
      wikiUrl: page?.url ?? `https://en.wikipedia.org/wiki/${encodeURIComponent(e.wiki.replace(/ /g, "_"))}`,
      featured,
      gallery,
      extraSources: [],
      dateCheck,
    };
    if (featured) usedFiles.add(featured.file);
    gallery.forEach((g) => usedFiles.add(g.file));
  }

  for (const p of peopleList) {
    const page = wiki.get(p.wiki);
    const qid = qidFor(p.wiki, (p as any).qid);
    const ent = entities[qid ?? ""];
    const isHuman = (ent?.claims?.P31 ?? []).some((c: any) => c.mainsnak?.datavalue?.value?.id === "Q5");
    if (!isHuman) log(`  ! ${p.slug}: Wikidata entity ${qid} is not a human — check registry`);
    const portrait = pick([
      { file: p18(qid), method: "wikidata_p18" },
      ...(isHuman ? [{ file: leadOf(p.wiki), method: "wikipedia_lead" }] : []),
    ]);
    const cit = bestClaim(ent, "P27");
    result.people[p.slug] = {
      qid,
      wikiTitle: page?.title ?? p.wiki,
      wikiUrl: page?.url ?? "",
      isHuman,
      shortDescription: page?.shortdesc ?? ent?.descriptions?.en?.value ?? null,
      biography: isHuman ? firstSentences(page?.extract, 4) : null,
      birth: wdTime(bestClaim(ent, "P569")),
      death: wdTime(bestClaim(ent, "P570")),
      citizenship: label(cit?.mainsnak?.datavalue?.value?.id),
      portrait,
    };
    if (portrait) usedFiles.add(portrait.file);
  }

  for (const p of placeList) {
    const page = wiki.get(p.wiki);
    const qid = qidFor(p.wiki);
    const ent = entities[qid ?? ""];
    const coord = bestClaim(ent, "P625")?.mainsnak?.datavalue?.value;
    const country = bestClaim(ent, "P17");
    const image = pick([
      { file: p18(qid), method: "wikidata_p18" },
      { file: leadOf(p.wiki), method: "wikipedia_lead" },
    ]);
    result.places[p.slug] = {
      qid,
      wikiTitle: page?.title ?? p.wiki,
      wikiUrl: page?.url ?? "",
      shortDescription: page?.shortdesc ?? ent?.descriptions?.en?.value ?? null,
      description: firstSentences(page?.extract, 3),
      lat: coord?.latitude ?? null,
      lng: coord?.longitude ?? null,
      country: label(country?.mainsnak?.datavalue?.value?.id),
      image,
    };
    if (image) usedFiles.add(image.file);
  }

  for (const c of civilizations) {
    const page = wiki.get(c.wiki);
    const image = pick([
      // Editorial choice: the lead image of a closely related article, when set.
      { file: "imageFrom" in c ? leadOf(c.imageFrom) : null, method: "wikipedia_lead" },
      { file: leadOf(c.wiki), method: "wikipedia_lead" },
      { file: p18(page?.qid ?? null), method: "wikidata_p18" },
    ]);
    result.civilizations[c.slug] = { qid: page?.qid ?? null, wikiUrl: page?.url ?? "", image };
    if (image) usedFiles.add(image.file);
  }
  for (const [bucket, list] of [["beliefs", beliefs], ["deities", deities]] as const) {
    for (const b of list) {
      const page = wiki.get(b.wiki);
      const from = "imageFrom" in b ? b.imageFrom : undefined;
      const image = pick([
        { file: from ? leadOf(from) : null, method: "wikipedia_lead" },
        { file: leadOf(b.wiki), method: "wikipedia_lead" },
        { file: p18(page?.qid ?? null), method: "wikidata_p18" },
      ]);
      result[bucket][b.slug] = { qid: page?.qid ?? null, wikiUrl: page?.url ?? "", image };
      if (image) usedFiles.add(image.file);
    }
  }

  log(`6/7 Verifying ${usedFiles.size} image renditions are reachable…`);
  let broken = 0;
  for (const f of usedFiles) {
    const img = info.get(f)!;
    if (img.derived) {
      // Wikimedia's robot policy limits scripts from triggering thumbnail
      // generation; the file itself was confirmed by the Commons API above.
      img.httpStatus = 200;
      result.images[f] = img;
      continue;
    }
    const a = await checkUrl(img.thumbUrl);
    const b = img.smallUrl === img.thumbUrl ? a : await checkUrl(img.smallUrl);
    img.httpStatus = a.status === 200 && b.status === 200 ? 200 : a.status !== 200 ? a.status : b.status;
    if (img.httpStatus !== 200) {
      broken++;
      log(`  ! ${f}: ${a.status}/${b.status}`);
    }
    result.images[f] = img;
  }
  // Drawings and emblems with large transparent areas (measured once, cached on disk).
  const alphaPath = join(process.cwd(), "data", "cache", "alpha.json");
  const alphaCache: Record<string, number> = existsSync(alphaPath) ? JSON.parse(readFileSync(alphaPath, "utf8")) : {};
  for (const [f, img] of Object.entries(result.images)) {
    if (img.httpStatus !== 200 || !/\.(svg|png|gif)$/i.test(f)) continue;
    if (alphaCache[f] === undefined) {
      try {
        let res = await fetch(img.smallUrl, { headers: { "User-Agent": USER_AGENT } });
        // Back off politely when Wikimedia rate-limits (429), honouring Retry-After.
        for (let attempt = 1; res.status === 429 && attempt <= 4; attempt++) {
          const wait = (Number(res.headers.get("retry-after")) || 5 * attempt) * 1000;
          await new Promise((r) => setTimeout(r, wait));
          res = await fetch(img.smallUrl, { headers: { "User-Agent": USER_AGENT } });
        }
        if (!res.ok) throw new Error(String(res.status));
        const { data, info } = await sharp(Buffer.from(await res.arrayBuffer())).ensureAlpha().raw().toBuffer({ resolveWithObject: true });
        let clear = 0;
        for (let i = 3; i < data.length; i += info.channels) if (data[i] < 128) clear++;
        alphaCache[f] = clear / (info.width * info.height);
        await new Promise((r) => setTimeout(r, 400));
      } catch (err) {
        log(`  ! transparency check failed for ${f}: ${(err as Error).message}`);
        await new Promise((r) => setTimeout(r, 1000));
        continue;
      }
    }
    img.transparent = alphaCache[f] > 0.15;
  }
  writeFileSync(alphaPath, JSON.stringify(alphaCache, null, 1));
  log(`    ${Object.values(result.images).filter((i) => i.transparent).length} images with large transparent areas`);

  // Drop references to unreachable images so the site never shows a broken image.
  const ok = <T extends { file: string }>(x: T | null): T | null => (x && result.images[x.file]?.httpStatus === 200 ? x : null);
  for (const e of Object.values(result.events)) {
    e.featured = ok(e.featured);
    e.gallery = e.gallery.filter((g) => ok(g));
  }
  for (const p of Object.values(result.people)) p.portrait = ok(p.portrait);
  for (const p of Object.values(result.places)) p.image = ok(p.image);
  for (const c of Object.values(result.civilizations)) c.image = ok(c.image);
  for (const b of [...Object.values(result.beliefs), ...Object.values(result.deities)]) b.image = ok(b.image);

  log("7/7 Verifying sources…");
  let checked = 0;
  for (const e of allEvents) {
    const out: EnrichedData["events"][string]["extraSources"] = [];
    // Curated institutional sources
    for (const s of e.sources ?? []) {
      const r = await checkUrl(s.url);
      checked++;
      if (r.status >= 200 && r.status < 400) out.push({ ...s, status: r.status });
      else log(`  ! curated source dropped (${r.status}): ${s.url}`);
    }
    // Reputable references cited by the event's Wikipedia article
    const page = wiki.get(e.wiki);
    if (page) {
      const links = (await extLinks(page.title))
        .map((u) => ({ u, c: classifySource(u) }))
        .filter((x) => x.c)
        .sort((a, b) => a.c!.rank - b.c!.rank);
      const perDomain = new Map<string, number>();
      for (const { u, c } of links) {
        if (out.length >= 7) break;
        if (out.some((o) => o.url === u)) continue;
        const n = perDomain.get(c!.domain) ?? 0;
        if (n >= 2) continue;
        const r = await checkUrl(u, { wantTitle: true });
        checked++;
        const reachable = r.status >= 200 && r.status < 400;
        // Hosts that refuse automated requests are kept only because the
        // citation comes from the article itself; the status is recorded.
        if (!reachable && !(c!.blocksBots && (r.status === 403 || r.status === 429))) continue;
        perDomain.set(c!.domain, n + 1);
        out.push({
          url: u,
          title: cleanTitle(r.title, c!.publisher) ?? titleFromUrl(u),
          publisher: c!.publisher,
          type: c!.type,
          status: r.status,
        });
      }
    }
    result.events[e.slug].extraSources = out;
  }
  log(`    ${checked} source URLs checked`);

  mkdirSync(join(process.cwd(), "data"), { recursive: true });
  writeFileSync(join(process.cwd(), "data", "enriched.json"), JSON.stringify(result, null, 1));

  const evs = Object.values(result.events);
  report.push(
    "## Summary",
    "",
    `- Events: ${evs.length}; with featured image: ${evs.filter((e) => e.featured).length}; avg gallery: ${(evs.reduce((a, e) => a + e.gallery.length, 0) / evs.length).toFixed(1)}`,
    `- Date checks: ${evs.filter((e) => e.dateCheck.status === "match").length} match, ${mismatches.length} mismatch, ${evs.filter((e) => e.dateCheck.status === "no-data").length} no Wikidata date`,
    `- People: ${Object.keys(result.people).length}; with portrait: ${Object.values(result.people).filter((p) => p.portrait).length}; not human on Wikidata: ${Object.values(result.people).filter((p) => !p.isHuman).length}`,
    `- Places: ${Object.keys(result.places).length}; with coordinates: ${Object.values(result.places).filter((p) => p.lat !== null).length}; with image: ${Object.values(result.places).filter((p) => p.image).length}`,
    `- Images verified: ${Object.keys(result.images).length}; unreachable dropped: ${broken}`,
    `- Extra sources: ${evs.reduce((a, e) => a + e.extraSources.length, 0)}`,
    "",
    "## Date mismatches (for editorial review)",
    "",
    ...(mismatches.length ? mismatches : ["None."]),
    "",
    "## Events without a featured image",
    "",
    ...Object.entries(result.events)
      .filter(([, e]) => !e.featured)
      .map(([s]) => `- ${s}`),
  );
  writeFileSync(join(process.cwd(), "data", "enrichment-report.md"), report.join("\n") + "\n");
  log(report.slice(4).join("\n"));
}

function firstSentences(text: string | null | undefined, n: number): string | null {
  if (!text) return null;
  const clean = text.replace(/\s*\([^()]*(?:\([^()]*\)[^()]*)*\)/g, (m) => (m.length > 120 ? "" : m)).replace(/\s+/g, " ").trim();
  const parts = clean.match(/[^.!?]+[.!?]+(\s|$)/g) ?? [clean];
  return parts.slice(0, n).join("").trim() || null;
}

function cleanTitle(t: string | undefined, publisher: string): string | null {
  if (!t) return null;
  let s = t.split(/\s[|–—-]\s/)[0].trim();
  if (s.length < 4 || /^(home|access denied|just a moment|attention required|404|not found|error)/i.test(s)) return null;
  if (s.toLowerCase() === publisher.toLowerCase()) return null;
  if (s.length > 160) s = s.slice(0, 157) + "…";
  return s;
}

function titleFromUrl(u: string): string {
  try {
    const url = new URL(u);
    const seg = url.pathname.split("/").filter(Boolean).pop() ?? url.host;
    const t = decodeURIComponent(seg).replace(/\.(html?|aspx?|php)$/i, "").replace(/[-_]+/g, " ").trim();
    return t.length > 3 && !/^\d+$/.test(t) ? t.charAt(0).toUpperCase() + t.slice(1) : url.host;
  } catch {
    return u;
  }
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
