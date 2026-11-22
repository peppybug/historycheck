export type Precision = "day" | "month" | "year" | "approximate" | "decade" | "century";

export interface SearchIndex {
  generatedAt: string;
  periods: { slug: string; name: string; startYear: number; endYear: number }[];
  categories: { slug: string; name: string }[];
  regions: { slug: string; name: string }[];
  civilizations: { slug: string; name: string; dateLabel: string | null }[];
  events: {
    slug: string;
    title: string;
    alt: string[];
    keywords: string[];
    summary: string;
    location: string;
    sy: number;
    sm: number | null;
    sd: number | null;
    ey: number | null;
    em: number | null;
    ed: number | null;
    precision: Precision;
    sort: number;
    period: string;
    category: string;
    region: string;
    featured: boolean;
    thumb: string | null;
    w: number | null;
    h: number | null;
    people: string[];
    places: string[];
    civs: string[];
  }[];
  people: { slug: string; name: string; alt: string[]; desc: string; affiliation: string | null; by: number | null; dy: number | null; thumb: string | null; events: number }[];
  places: { slug: string; name: string; alt: string[]; country: string | null; sig: string | null; thumb: string | null; events: number }[];
  /** Belief systems and mythological figures. */
  beliefs: { slug: string; kind: "belief" | "deity"; name: string; alt: string[]; detail: string; thumb: string | null }[];
}
