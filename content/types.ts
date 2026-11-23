/**
 * Authoring format for curated historical content.
 *
 * Dates are written as strings so their precision is explicit:
 *   "1989-11-09"  exact day        "1989-11"  month        "1989"  year only
 *   "-44-03-15"   15 March 44 BCE  "~-2560"   approximately 2560 BCE
 *   "C-5"         5th century BCE  "D1950"    the 1950s (decade)
 * BCE years are negative. There is no year zero (1 BCE is followed by 1 CE).
 */
export type DateString = string;

export type RelationKind =
  | "led_to" //          this event directly caused the target
  | "contributed_to" //  this event was one contributing cause of the target
  | "followed_by" //     target followed chronologically; no causal claim
  | "part_of" //         this event is a component of the target
  | "occurred_during" // this event happened during the broader target
  | "related_to"; //     thematic link, no causal claim

export interface EventSeed {
  slug: string;
  title: string;
  alt?: string[];
  date: DateString;
  end?: DateString;
  period: string;
  category: string;
  region: string;
  location: string;
  places?: string[];
  civ?: string[];
  /** English Wikipedia article title for the exact subject (anchor for Wikidata + imagery). */
  wiki: string;
  featured?: boolean;
  discovery?: boolean;
  keywords?: string[];
  summary: string;
  overview: string;
  context: string;
  narrative: string;
  causes: string[];
  consequences: string[];
  timeline: [DateString, string, string?][];
  people?: [string, string][];
  relations?: [RelationKind, string, string?][];
  /** Additional institutional sources (verified by the enrichment script). */
  sources?: { url: string; title: string; publisher: string; type: SourceKind }[];
  /** Note shown to readers about uncertainty (e.g. traditional or disputed dates). */
  /** Editorially chosen Wikimedia Commons file ("File:…") used when the Wikipedia article has no lead image. */
  image?: string;
  /** Focal point for cropped cards, as CSS object-position (e.g. "50% 15%" to keep a face in frame). */
  imagePosition?: string;
  dateNote?: string;
}

export type SourceKind =
  | "encyclopedia"
  | "museum"
  | "archive"
  | "library"
  | "government"
  | "academic"
  | "primary_document"
  | "database"
  | "institution";

export type Precision = "day" | "month" | "year" | "approximate" | "decade" | "century";

export interface ParsedDate {
  year: number;
  month: number | null;
  day: number | null;
  precision: Precision;
}

export function parseDate(input: DateString): ParsedDate {
  const s = input.trim();
  if (s.startsWith("C")) {
    const c = Number(s.slice(1));
    // 5th century CE → year 401; 5th century BCE → year -500 (start of the century)
    const year = c > 0 ? (c - 1) * 100 + 1 : c * 100;
    return { year, month: null, day: null, precision: "century" };
  }
  if (s.startsWith("D")) return { year: Number(s.slice(1)), month: null, day: null, precision: "decade" };
  if (s.startsWith("~")) return { year: Number(s.slice(1)), month: null, day: null, precision: "approximate" };
  const m = /^(-?\d+)(?:-(\d{2}))?(?:-(\d{2}))?$/.exec(s);
  if (!m) throw new Error(`Unparseable date: "${input}"`);
  const year = Number(m[1]);
  if (year === 0) throw new Error(`Year zero does not exist: "${input}"`);
  const month = m[2] ? Number(m[2]) : null;
  const day = m[3] ? Number(m[3]) : null;
  if (month !== null && (month < 1 || month > 12)) throw new Error(`Bad month: "${input}"`);
  if (day !== null && (day < 1 || day > 31)) throw new Error(`Bad day: "${input}"`);
  return { year, month, day, precision: day ? "day" : month ? "month" : "year" };
}

/** Fractional year used for chronological sorting. */
export function sortKey(d: ParsedDate): number {
  const m = d.month ?? 1;
  const day = d.day ?? 1;
  return d.year + ((m - 1) * 31 + (day - 1)) / 372;
}
