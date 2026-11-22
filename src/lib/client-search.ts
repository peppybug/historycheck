"use client";

import MiniSearch, { type SearchResult as MSResult } from "minisearch";
import { withBase } from "./base-path";
import { parseYearQuery } from "./dates";
import type { SearchIndex } from "./search-types";

/**
 * Client-side search over an index generated from the database at build
 * time (/data/search-index.json), so search works on static hosting.
 *
 * Ranking blends:
 *   - field-weighted relevance (title and alternative names first, then linked
 *     people, keywords, civilizations, places, location and summary)
 *   - prefix matching for the word being typed
 *   - edit-distance fuzziness for misspellings, used as a fallback when an
 *     exact search finds nothing, so close-but-wrong matches don't crowd results
 *   - year and era parsing ("1989", "44 BC", "1960s", "15th century", "1914-1918")
 */

export type IndexEvent = SearchIndex["events"][number];
export type IndexPerson = SearchIndex["people"][number];
export type IndexPlace = SearchIndex["places"][number];
export type IndexBelief = SearchIndex["beliefs"][number];

export interface Engine {
  index: SearchIndex;
  events: MiniSearch;
  people: MiniSearch;
  places: MiniSearch;
  beliefs: MiniSearch;
  eventBySlug: Map<string, IndexEvent>;
  periodName: Map<string, string>;
  categoryName: Map<string, string>;
  regionName: Map<string, string>;
}

let enginePromise: Promise<Engine> | null = null;

export function loadEngine(): Promise<Engine> {
  if (!enginePromise) {
    enginePromise = fetch(withBase("/data/search-index.json"))
      .then((r) => {
        if (!r.ok) throw new Error(`Search index unavailable (HTTP ${r.status})`);
        return r.json() as Promise<SearchIndex>;
      })
      .then(build)
      .catch((e) => {
        enginePromise = null; // allow a retry
        throw e;
      });
  }
  return enginePromise;
}

const normalise = (t: string) =>
  t
    .normalize("NFKD")
    .replace(/[̀-ͯ]/g, "")
    .toLowerCase();

const STOP = new Set(["the", "of", "and", "a", "an", "in", "on", "at", "to", "for", "de", "la", "le"]);
const tokenize = (t: string) => normalise(t).split(/[^a-z0-9]+/).filter((w) => w && !STOP.has(w));

function build(index: SearchIndex): Engine {
  const periodName = new Map(index.periods.map((p) => [p.slug, p.name]));
  const categoryName = new Map(index.categories.map((c) => [c.slug, c.name]));
  const regionName = new Map(index.regions.map((r) => [r.slug, r.name]));

  const events = new MiniSearch({
    idField: "slug",
    fields: ["title", "alt", "people", "keywords", "civs", "places", "location", "summary", "taxonomy"],
    tokenize,
    processTerm: (t) => t,
    extractField: (doc, field) => {
      const v = (doc as Record<string, unknown>)[field];
      return Array.isArray(v) ? v.join(" ") : (v as string);
    },
  });
  events.addAll(index.events.map((e) => ({ ...e, taxonomy: `${periodName.get(e.period)} ${categoryName.get(e.category)}` })));

  const people = new MiniSearch({
    idField: "slug",
    fields: ["name", "alt", "desc", "affiliation"],
    tokenize,
    processTerm: (t) => t,
    extractField: (doc, field) => {
      const v = (doc as Record<string, unknown>)[field];
      return Array.isArray(v) ? v.join(" ") : ((v as string) ?? "");
    },
  });
  people.addAll(index.people);

  const places = new MiniSearch({
    idField: "slug",
    fields: ["name", "alt", "country", "sig"],
    tokenize,
    processTerm: (t) => t,
    extractField: (doc, field) => {
      const v = (doc as Record<string, unknown>)[field];
      return Array.isArray(v) ? v.join(" ") : ((v as string) ?? "");
    },
  });
  places.addAll(index.places);

  const beliefs = new MiniSearch({
    idField: "slug",
    fields: ["name", "alt", "detail"],
    tokenize,
    processTerm: (t) => t,
    extractField: (doc, field) => {
      const v = (doc as Record<string, unknown>)[field];
      return Array.isArray(v) ? v.join(" ") : ((v as string) ?? "");
    },
  });
  beliefs.addAll(index.beliefs ?? []);

  return { index, events, people, places, beliefs, eventBySlug: new Map(index.events.map((e) => [e.slug, e])), periodName, categoryName, regionName };
}

const EVENT_BOOST = { title: 5, alt: 3.5, people: 2.5, keywords: 2, civs: 2, places: 1.5, location: 1.2, summary: 0.8, taxonomy: 0.6 };

/**
 * Exact (with prefix on the last word) first; fuzzy only if that finds nothing,
 * and then only against name-like fields so that "Ceasar" finds Caesar
 * without also matching "ceased" in a summary.
 */
function tiered(ms: MiniSearch, q: string, boost: Record<string, number>, fuzzyFields?: string[]) {
  const base = { boost, prefix: (term: string, i: number, terms: string[]) => i === terms.length - 1 && term.length >= 2 };
  let res = ms.search(q, { ...base, combineWith: "AND" });
  let approximate = false;
  if (!res.length) {
    res = ms.search(q, { ...base, combineWith: "AND", fields: fuzzyFields, fuzzy: (t) => (t.length >= 6 ? 0.34 : t.length >= 4 ? 0.25 : false) });
    approximate = res.length > 0;
  }
  return { res, approximate };
}

export interface Params {
  q: string;
  type: "all" | "events" | "people" | "places";
  period?: string;
  category?: string;
  region?: string;
  from?: number;
  to?: number;
  sort: "relevance" | "oldest" | "newest";
  page: number;
}

export interface EventHit extends IndexEvent {
  score: number;
  terms: string[];
  why: string | null;
}

export const PAGE_SIZE = 18;

export function runSearch(engine: Engine, p: Params) {
  const q = p.q.trim();
  const year = parseYearQuery(q);
  const overlaps = (e: IndexEvent, from: number, to: number) => e.sy <= to && (e.ey ?? e.sy) >= from;
  // The whole query is a year or era ("1989", "44 BC", "1960s", "15th century"): match by date only.
  const pureYear = !!year;

  // ---- Events -------------------------------------------------------
  let hits: EventHit[] = [];
  let approximate = false;
  if (!q) {
    hits = engine.index.events.map((e) => ({ ...e, score: e.featured ? 1 : 0, terms: [], why: null }));
  } else {
    const byText = new Map<string, EventHit>();
    if (!pureYear) {
      const t = tiered(engine.events, q, EVENT_BOOST, ["title", "alt", "people", "keywords", "civs", "places"]);
      approximate = t.approximate;
      for (const r of t.res) {
        const e = engine.eventBySlug.get(String(r.id));
        if (e) byText.set(e.slug, { ...e, score: r.score, terms: r.terms, why: whyMatched(e, r) });
      }
    }
    if (year) {
      for (const e of engine.index.events) {
        if (!overlaps(e, year.from, year.to)) continue;
        const cur = byText.get(e.slug);
        const bonus = 6 + (e.sy === year.from && year.from === year.to ? 3 : 0) + (e.precision === "day" ? 1 : 0);
        byText.set(e.slug, cur ? { ...cur, score: cur.score + bonus } : { ...e, score: bonus, terms: [], why: null });
      }
    }
    hits = [...byText.values()];
  }

  const filtered = hits.filter(
    (e) =>
      (!p.period || e.period === p.period) &&
      (!p.category || e.category === p.category) &&
      (!p.region || e.region === p.region) &&
      (p.from === undefined || (e.ey ?? e.sy) >= p.from) &&
      (p.to === undefined || e.sy <= p.to),
  );

  const facets = { period: new Map<string, number>(), category: new Map<string, number>(), region: new Map<string, number>() };
  for (const e of filtered) {
    facets.period.set(e.period, (facets.period.get(e.period) ?? 0) + 1);
    facets.category.set(e.category, (facets.category.get(e.category) ?? 0) + 1);
    facets.region.set(e.region, (facets.region.get(e.region) ?? 0) + 1);
  }

  filtered.sort((a, b) =>
    p.sort === "oldest" ? a.sort - b.sort : p.sort === "newest" ? b.sort - a.sort : b.score - a.score || a.sort - b.sort,
  );
  const wantEvents = p.type === "all" || p.type === "events";
  const pageEvents = wantEvents ? filtered.slice((p.page - 1) * PAGE_SIZE, p.page * PAGE_SIZE) : [];

  // ---- People and places -------------------------------------------
  const peopleLimit = pureYear ? 0 : p.type === "people" ? 40 : p.type === "all" ? 4 : 0;
  const placesLimit = pureYear ? 0 : p.type === "places" ? 40 : p.type === "all" ? 4 : 0;
  let people: (IndexPerson & { terms: string[] })[] = [];
  let places: (IndexPlace & { terms: string[] })[] = [];
  if (q && peopleLimit) {
    const t = tiered(engine.people, q, { name: 4, alt: 3, desc: 0.6, affiliation: 0.8 }, ["name", "alt"]);
    people = t.res
      .slice(0, peopleLimit)
      .map((r) => ({ ...(engine.index.people.find((x) => x.slug === r.id) as IndexPerson), terms: r.terms }));
  }
  if (q && placesLimit) {
    const t = tiered(engine.places, q, { name: 4, alt: 3, country: 1, sig: 0.4 }, ["name", "alt"]);
    places = t.res
      .slice(0, placesLimit)
      .map((r) => ({ ...(engine.index.places.find((x) => x.slug === r.id) as IndexPlace), terms: r.terms }));
  }

  let beliefs: (IndexBelief & { terms: string[] })[] = [];
  if (q && !pureYear && p.type === "all") {
    const t = tiered(engine.beliefs, q, { name: 4, alt: 3, detail: 0.8 }, ["name", "alt"]);
    beliefs = t.res.slice(0, 4).map((r) => ({ ...(engine.index.beliefs.find((x) => x.slug === r.id) as IndexBelief), terms: r.terms }));
  }

  // ---- Taxonomy shortcuts ------------------------------------------
  const nq = normalise(q);
  const taxonomy =
    q && p.type === "all"
      ? [
          ...engine.index.periods.map((x) => ({ kind: "period" as const, slug: x.slug, name: x.name })),
          ...engine.index.civilizations.map((x) => ({ kind: "civilization" as const, slug: x.slug, name: x.name })),
          ...engine.index.categories.map((x) => ({ kind: "category" as const, slug: x.slug, name: x.name })),
        ]
          .filter((x) => {
            const n = normalise(x.name);
            return nq.length >= 3 && (n.includes(nq) || nq.includes(n));
          })
          .slice(0, 4)
      : [];

  // ---- Did you mean -------------------------------------------------
  let suggestion: string | null = null;
  if (q && !filtered.length && !people.length && !places.length && !beliefs.length) {
    const s = engine.events.search(q, { fuzzy: 0.4, prefix: true, combineWith: "OR", boost: { title: 3 } })[0];
    const ps = engine.people.search(q, { fuzzy: 0.4, prefix: true, combineWith: "OR", boost: { name: 3 } })[0];
    const best = [s && { score: s.score, name: engine.eventBySlug.get(String(s.id))?.title }, ps && { score: ps.score, name: engine.index.people.find((x) => x.slug === ps.id)?.name }]
      .filter(Boolean)
      .sort((a, b) => b!.score - a!.score)[0];
    suggestion = best?.name ?? null;
  }

  return { events: pageEvents, total: wantEvents ? filtered.length : 0, facets, people, places, beliefs, taxonomy, year, suggestion, approximate };
}

/** Explains a match through a linked person ("involves Julius Caesar"). */
function whyMatched(e: IndexEvent, r: MSResult): string | null {
  const viaPeople = Object.entries(r.match).filter(([, fields]) => fields.includes("people") && !fields.includes("title")).map(([t]) => t);
  if (!viaPeople.length) return null;
  return e.people.find((name) => viaPeople.every((t) => tokenize(name).some((w) => w.startsWith(t)))) ?? null;
}

/** Typeahead suggestions across events, people, places, periods and civilizations. */
export function suggest(engine: Engine, raw: string) {
  const q = raw.trim();
  if (q.length < 2) return [];
  const year = parseYearQuery(q);
  type S = { type: "event" | "person" | "place" | "period" | "civilization" | "belief" | "deity"; slug: string; label: string; detail: string | null; thumb: string | null; score: number };
  const out: S[] = [];
  const opts = { prefix: true, fuzzy: (t: string) => (t.length >= 5 ? 0.2 : false), combineWith: "AND" as const };
  const yearLabel = (e: IndexEvent) => (e.sy < 0 ? `${-e.sy} BCE` : `${e.sy}`);

  if (year) {
    for (const e of engine.index.events) {
      if (e.sy <= year.to && (e.ey ?? e.sy) >= year.from)
        out.push({ type: "event", slug: e.slug, label: e.title, detail: `${yearLabel(e)} · ${e.location}`, thumb: e.thumb, score: 50 - Math.abs(e.sy - year.from) / 10 });
    }
  }
  const ev = engine.events.search(q, { ...opts, boost: { title: 5, alt: 3.5, people: 1, keywords: 1, civs: 1, places: 0.8, summary: 0.2 } }).slice(0, 5);
  for (const r of ev) {
    const e = engine.eventBySlug.get(String(r.id))!;
    if (!out.some((o) => o.slug === e.slug)) out.push({ type: "event", slug: e.slug, label: e.title, detail: `${yearLabel(e)} · ${e.location}`, thumb: e.thumb, score: r.score });
  }
  for (const r of engine.people.search(q, { ...opts, boost: { name: 5, alt: 3, desc: 0.3 } }).slice(0, 3)) {
    const x = engine.index.people.find((p) => p.slug === r.id)!;
    out.push({ type: "person", slug: x.slug, label: x.name, detail: x.desc, thumb: x.thumb, score: r.score * 1.2 });
  }
  for (const r of engine.places.search(q, { ...opts, boost: { name: 5, alt: 3, country: 0.5 } }).slice(0, 2)) {
    const x = engine.index.places.find((p) => p.slug === r.id)!;
    out.push({ type: "place", slug: x.slug, label: x.name, detail: x.country ?? x.sig, thumb: x.thumb, score: r.score });
  }
  for (const r of engine.beliefs.search(q, { ...opts, boost: { name: 5, alt: 3, detail: 0.3 } }).slice(0, 2)) {
    const x = engine.index.beliefs.find((b) => b.slug === r.id)!;
    out.push({ type: x.kind, slug: x.slug, label: x.name, detail: x.detail, thumb: x.thumb, score: r.score * 1.1 });
  }
  const nq = normalise(q);
  for (const p of engine.index.periods) if (normalise(p.name).includes(nq)) out.push({ type: "period", slug: p.slug, label: p.name, detail: null, thumb: null, score: 8 });
  for (const c of engine.index.civilizations)
    if (normalise(c.name).includes(nq)) out.push({ type: "civilization", slug: c.slug, label: c.name, detail: c.dateLabel, thumb: null, score: 9 });

  return out
    .sort((a, b) => b.score - a.score)
    .slice(0, 8)
    .map(({ score: _s, ...rest }) => rest);
}

/** Splits text into parts, marking words that start with any matched term. */
export function highlightParts(text: string, terms: string[]): { text: string; mark: boolean }[] {
  if (!terms.length) return [{ text, mark: false }];
  const parts: { text: string; mark: boolean }[] = [];
  for (const token of text.split(/(\s+|[.,;:!?()"“”'’\-–])/)) {
    if (!token) continue;
    const n = normalise(token);
    const mark = n.length > 1 && terms.some((t) => t.length > 1 && n.startsWith(t));
    const last = parts[parts.length - 1];
    if (last && last.mark === mark) last.text += token;
    else parts.push({ text: token, mark });
  }
  return parts;
}
