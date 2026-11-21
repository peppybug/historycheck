import "server-only";
import { sql, type SQL } from "drizzle-orm";
import { z } from "zod";
import { db } from "@/db";
import { parseYearQuery } from "./dates";

/**
 * Historycheck search
 * -------------------
 * Ranking blends several signals so that "Julius Caesar" returns the person
 * *and* the events he is linked to, "1989" returns events of that year,
 * and "Napolean" still finds Napoleon:
 *   - weighted full-text rank (title/alt names > summary > context > narrative)
 *   - prefix matching for the word being typed
 *   - trigram word-similarity on titles and names (typo tolerance)
 *   - relational boosts: linked people, places, civilizations, period, category
 *   - year/era parsing ("44 BC", "1960s", "15th century", "1914-1918")
 */

export const searchParamsSchema = z.object({
  q: z.string().trim().max(120).catch(""),
  type: z.enum(["all", "events", "people", "places"]).catch("all"),
  period: z.string().max(60).optional().catch(undefined),
  category: z.string().max(60).optional().catch(undefined),
  region: z.string().max(60).optional().catch(undefined),
  from: z.coerce.number().int().min(-5000).max(2100).optional().catch(undefined),
  to: z.coerce.number().int().min(-5000).max(2100).optional().catch(undefined),
  sort: z.enum(["relevance", "oldest", "newest"]).catch("relevance"),
  page: z.coerce.number().int().min(1).max(50).catch(1),
});
export type SearchParams = z.infer<typeof searchParamsSchema>;

const PAGE_SIZE = 18;

/** Builds a prefix tsquery from user input: "julius caes" → 'julius' & 'caes':* */
function prefixQuery(q: string): string | null {
  const words = q
    .normalize("NFKD")
    .replace(/[̀-ͯ]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9\s'-]/g, " ")
    .split(/\s+/)
    .map((w) => w.replace(/['-]/g, ""))
    .filter((w) => w.length > 0)
    .slice(0, 8);
  if (!words.length) return null;
  return words.map((w, i) => (i === words.length - 1 && w.length >= 2 ? `${w}:*` : w)).join(" & ");
}

export type EventHit = {
  slug: string;
  title: string;
  summaryHtml: string; // contains ⟦ ⟧ markers around matched terms
  startYear: number;
  startMonth: number | null;
  startDay: number | null;
  endYear: number | null;
  endMonth: number | null;
  endDay: number | null;
  datePrecision: "day" | "month" | "year" | "approximate" | "decade" | "century";
  locationLabel: string;
  category: string;
  categorySlug: string;
  period: string;
  periodSlug: string;
  region: string;
  thumb: string | null;
  thumbW: number | null;
  thumbH: number | null;
  score: number;
  why: string | null;
};

export async function search(p: SearchParams, fuzzy = false): Promise<SearchOutput> {
  const q = p.q;
  const yr = parseYearQuery(q);
  const pq = prefixQuery(q);
  const hasText = q.length > 0;

  const tsq = sql`(websearch_to_tsquery('english', hc_unaccent(${q})) || to_tsquery('simple', ${pq ?? "''"}))`;
  const lq = sql`lower(hc_unaccent(${q}))`;

  // Filters shared by events results and facets
  const filters: SQL[] = [sql`e.status = 'published'`];
  if (p.period) filters.push(sql`pe.slug = ${p.period}`);
  if (p.category) filters.push(sql`c.slug = ${p.category}`);
  if (p.region) filters.push(sql`r.slug = ${p.region}`);
  if (p.from !== undefined) filters.push(sql`coalesce(e.end_year, e.start_year) >= ${p.from}`);
  if (p.to !== undefined) filters.push(sql`e.start_year <= ${p.to}`);

  const yearMatch = yr ? sql`(e.start_year <= ${yr.to} AND coalesce(e.end_year, e.start_year) >= ${yr.from})` : sql`false`;
  const textMatch = hasText
    ? sql`(
        e.search_vector @@ ${tsq}
        OR word_similarity(${lq}, lower(hc_unaccent(e.title))) > 0.55
        OR EXISTS (SELECT 1 FROM unnest(e.alt_names) a WHERE word_similarity(${lq}, lower(hc_unaccent(a))) > 0.6)
        OR EXISTS (SELECT 1 FROM event_people ep JOIN people x ON x.id = ep.person_id WHERE ep.event_id = e.id AND (x.search_vector @@ ${tsq} AND word_similarity(${lq}, lower(hc_unaccent(x.name))) > 0.5 OR similarity(${lq}, lower(hc_unaccent(x.name))) > 0.45))
        OR EXISTS (SELECT 1 FROM event_places epl JOIN places x ON x.id = epl.place_id WHERE epl.event_id = e.id AND (similarity(${lq}, lower(hc_unaccent(x.name))) > 0.5 OR ${lq} = ANY(SELECT lower(hc_unaccent(n)) FROM unnest(x.alt_names) n)))
        OR EXISTS (SELECT 1 FROM event_civilizations ec JOIN civilizations x ON x.id = ec.civilization_id WHERE ec.event_id = e.id AND similarity(${lq}, lower(hc_unaccent(x.name))) > 0.45)
        OR similarity(${lq}, lower(pe.name)) > 0.5 OR similarity(${lq}, lower(c.name)) > 0.5
        OR ${yearMatch}
        ${fuzzy ? sql`OR hc_fuzzy(${q}, e.title) > 0.62 OR EXISTS (SELECT 1 FROM event_people ep JOIN people x ON x.id = ep.person_id WHERE ep.event_id = e.id AND hc_fuzzy(${q}, x.name) > 0.62)` : sql``}
      )`
    : sql`true`;

  const score = hasText
    ? sql`(
        ts_rank_cd(e.search_vector, ${tsq}, 32) * 4
        + word_similarity(${lq}, lower(hc_unaccent(e.title))) * 2
        + CASE WHEN lower(hc_unaccent(e.title)) = ${lq} THEN 3 ELSE 0 END
        + coalesce((SELECT max(word_similarity(${lq}, lower(hc_unaccent(a)))) FROM unnest(e.alt_names) a), 0) * 1.5
        + coalesce((SELECT max(similarity(${lq}, lower(hc_unaccent(x.name)))) FROM event_people ep JOIN people x ON x.id = ep.person_id WHERE ep.event_id = e.id), 0) * 1.2
        + coalesce((SELECT max(similarity(${lq}, lower(hc_unaccent(x.name)))) FROM event_places epl JOIN places x ON x.id = epl.place_id WHERE epl.event_id = e.id), 0) * 0.6
        + coalesce((SELECT max(similarity(${lq}, lower(hc_unaccent(x.name)))) FROM event_civilizations ec JOIN civilizations x ON x.id = ec.civilization_id WHERE ec.event_id = e.id), 0) * 0.8
        + CASE WHEN ${yearMatch} THEN 1.5 ELSE 0 END
        + CASE WHEN e.is_featured THEN 0.05 ELSE 0 END
        ${fuzzy ? sql`+ hc_fuzzy(${q}, e.title) * 1.5 + coalesce((SELECT max(hc_fuzzy(${q}, x.name)) FROM event_people ep JOIN people x ON x.id = ep.person_id WHERE ep.event_id = e.id), 0)` : sql``}
      )`
    : sql`(CASE WHEN e.is_featured THEN 1 ELSE 0 END)::float`;

  const why = hasText
    ? sql`(SELECT x.name FROM event_people ep JOIN people x ON x.id = ep.person_id WHERE ep.event_id = e.id AND similarity(${lq}, lower(hc_unaccent(x.name))) > 0.45 ORDER BY similarity(${lq}, lower(hc_unaccent(x.name))) DESC LIMIT 1)`
    : sql`NULL`;

  const order =
    p.sort === "oldest" ? sql`e.sort_key ASC` : p.sort === "newest" ? sql`e.sort_key DESC` : sql`score DESC, e.sort_key ASC`;

  const where = sql.join([...filters, textMatch], sql` AND `);
  const base = sql`
    FROM events e
    JOIN periods pe ON pe.id = e.period_id
    JOIN categories c ON c.id = e.category_id
    JOIN regions r ON r.id = e.region_id
    LEFT JOIN images i ON i.id = e.featured_image_id
    WHERE ${where}`;

  const wantEvents = p.type === "all" || p.type === "events";
  const offset = (p.page - 1) * PAGE_SIZE;

  const [events, total, facets, people, places, taxonomy] = await Promise.all([
    wantEvents
      ? db.execute<EventHit>(sql`
          SELECT e.slug, e.title,
            ${hasText ? sql`ts_headline('english', e.summary, ${tsq}, 'StartSel=⟦, StopSel=⟧, HighlightAll=true')` : sql`e.summary`} AS "summaryHtml",
            e.start_year AS "startYear", e.start_month AS "startMonth", e.start_day AS "startDay",
            e.end_year AS "endYear", e.end_month AS "endMonth", e.end_day AS "endDay",
            e.date_precision AS "datePrecision", e.location_label AS "locationLabel",
            c.name AS category, c.slug AS "categorySlug", pe.name AS period, pe.slug AS "periodSlug", r.name AS region,
            i.small_url AS thumb, i.thumb_width AS "thumbW", i.thumb_height AS "thumbH",
            ${score} AS score, ${why} AS why
          ${base}
          ORDER BY ${order}
          LIMIT ${PAGE_SIZE} OFFSET ${offset}`)
      : Promise.resolve([] as EventHit[]),
    wantEvents ? db.execute<{ n: number }>(sql`SELECT count(*)::int AS n ${base}`) : Promise.resolve([{ n: 0 }]),
    db.execute<{ kind: string; slug: string; name: string; n: number }>(sql`
      WITH hits AS (SELECT e.id, pe.slug AS period, pe.name AS period_name, c.slug AS category, c.name AS category_name, r.slug AS region, r.name AS region_name ${base})
      SELECT 'period' AS kind, period AS slug, period_name AS name, count(*)::int AS n FROM hits GROUP BY 1,2,3
      UNION ALL SELECT 'category', category, category_name, count(*)::int FROM hits GROUP BY 1,2,3
      UNION ALL SELECT 'region', region, region_name, count(*)::int FROM hits GROUP BY 1,2,3`),
    hasText && (p.type === "all" || p.type === "people")
      ? db.execute<{ slug: string; name: string; short_description: string; birth_year: number | null; death_year: number | null; birth_precision: string | null; death_precision: string | null; thumb: string | null; events: number }>(sql`
          SELECT x.slug, x.name, x.short_description, x.birth_year, x.death_year, x.birth_precision, x.death_precision, i.small_url AS thumb,
            (SELECT count(*)::int FROM event_people ep WHERE ep.person_id = x.id) AS events
          FROM people x LEFT JOIN images i ON i.id = x.portrait_image_id
          WHERE x.status = 'published' AND (
            (x.search_vector @@ ${tsq} AND word_similarity(${lq}, lower(hc_unaccent(x.name))) > 0.3)
            OR similarity(${lq}, lower(hc_unaccent(x.name))) > 0.4
            OR word_similarity(${lq}, lower(hc_unaccent(x.name))) > 0.7
            ${fuzzy ? sql`OR hc_fuzzy(${q}, x.name) > 0.62` : sql``})
          ORDER BY similarity(${lq}, lower(hc_unaccent(x.name))) + word_similarity(${lq}, lower(hc_unaccent(x.name))) + ts_rank(x.search_vector, ${tsq}) ${fuzzy ? sql`+ hc_fuzzy(${q}, x.name)` : sql``} DESC
          LIMIT ${p.type === "people" ? 30 : 4}`)
      : Promise.resolve([]),
    hasText && (p.type === "all" || p.type === "places")
      ? db.execute<{ slug: string; name: string; modern_country: string | null; significance: string | null; thumb: string | null; events: number }>(sql`
          SELECT x.slug, x.name, x.modern_country, x.significance, i.small_url AS thumb,
            (SELECT count(*)::int FROM event_places ep WHERE ep.place_id = x.id) AS events
          FROM places x LEFT JOIN images i ON i.id = x.image_id
          WHERE x.status = 'published' AND (
            similarity(${lq}, lower(hc_unaccent(x.name))) > 0.4
            OR word_similarity(${lq}, lower(hc_unaccent(x.name))) > 0.75
            OR (x.search_vector @@ ${tsq} AND word_similarity(${lq}, lower(hc_unaccent(x.name))) > 0.3)
            ${fuzzy ? sql`OR hc_fuzzy(${q}, x.name) > 0.62` : sql``})
          ORDER BY similarity(${lq}, lower(hc_unaccent(x.name))) ${fuzzy ? sql`+ hc_fuzzy(${q}, x.name)` : sql``} DESC
          LIMIT ${p.type === "places" ? 30 : 4}`)
      : Promise.resolve([]),
    hasText && p.type === "all"
      ? db.execute<{ kind: string; slug: string; name: string; detail: string | null }>(sql`
          SELECT * FROM (
            SELECT 'period' AS kind, slug, name, NULL AS detail, similarity(${lq}, lower(name)) AS s FROM periods
            UNION ALL SELECT 'civilization', slug, name, date_label, similarity(${lq}, lower(hc_unaccent(name))) FROM civilizations
            UNION ALL SELECT 'category', slug, name, NULL, similarity(${lq}, lower(name)) FROM categories
          ) t WHERE s > 0.35 OR ${lq} LIKE '%' || lower(name) || '%' ORDER BY s DESC LIMIT 4`)
      : Promise.resolve([]),
  ]);

  // No person matched exactly: look for close spellings of names ("Ghandi" → Gandhi).
  let peopleOut = [...people];
  if (!fuzzy && hasText && q.length >= 4 && !peopleOut.length && (p.type === "all" || p.type === "people") && (events.length || places.length)) {
    peopleOut = (await search({ ...p, type: "people" }, true)).people;
  }

  // Nothing matched exactly: retry tolerating misspellings ("Ceasar", "Ghandi").
  if (!fuzzy && hasText && q.length >= 4 && !events.length && !people.length && !places.length) {
    const retry = await search(p, true);
    if (retry.events.length || retry.people.length || retry.places.length) return { ...retry, approximate: true };
  }

  // "Did you mean" when nothing matched
  let suggestion: string | null = null;
  if (hasText && !events.length && !people.length && !places.length) {
    const [row] = await db.execute<{ name: string }>(sql`
      SELECT name FROM (
        SELECT title AS name, similarity(${lq}, lower(hc_unaccent(title))) AS s FROM events WHERE status = 'published'
        UNION ALL SELECT name, similarity(${lq}, lower(hc_unaccent(name))) FROM people
        UNION ALL SELECT name, similarity(${lq}, lower(hc_unaccent(name))) FROM places
      ) t WHERE s > 0.15 ORDER BY s DESC LIMIT 1`);
    suggestion = row?.name ?? null;
  }

  return {
    events: [...events],
    total: total[0]?.n ?? 0,
    pageSize: PAGE_SIZE,
    facets: [...facets],
    people: peopleOut,
    places: [...places],
    taxonomy: [...taxonomy],
    year: yr,
    suggestion,
    approximate: fuzzy,
  };
}

type PersonHit = { slug: string; name: string; short_description: string; birth_year: number | null; death_year: number | null; birth_precision: string | null; death_precision: string | null; thumb: string | null; events: number };
type PlaceHit = { slug: string; name: string; modern_country: string | null; significance: string | null; thumb: string | null; events: number };
export interface SearchOutput {
  events: EventHit[];
  total: number;
  pageSize: number;
  facets: { kind: string; slug: string; name: string; n: number }[];
  people: PersonHit[];
  places: PlaceHit[];
  taxonomy: { kind: string; slug: string; name: string; detail: string | null }[];
  year: ReturnType<typeof parseYearQuery>;
  suggestion: string | null;
  approximate: boolean;
}
export type SearchResult = SearchOutput;

/** Fast typeahead suggestions across all record types. */
export async function suggest(raw: string) {
  const q = raw.trim().slice(0, 80);
  if (q.length < 2) return [];
  const lq = sql`lower(hc_unaccent(${q}))`;
  const like = `${q.toLowerCase().replace(/[%_]/g, "")}%`;
  const yr = parseYearQuery(q);
  const rows = await db.execute<{ type: string; slug: string; label: string; detail: string | null; thumb: string | null; s: number }>(sql`
    SELECT * FROM (
      SELECT 'event' AS type, e.slug, e.title AS label,
        CASE WHEN e.start_year < 0 THEN (-e.start_year)::text || ' BCE' ELSE e.start_year::text END || ' · ' || e.location_label AS detail,
        i.small_url AS thumb,
        greatest(word_similarity(${lq}, lower(hc_unaccent(e.title))), hc_fuzzy(${q}, e.title) * 0.75,
                 coalesce((SELECT max(word_similarity(${lq}, lower(hc_unaccent(a)))) FROM unnest(e.alt_names) a), 0) * 0.95)
          + CASE WHEN lower(hc_unaccent(e.title)) LIKE ${like} THEN 0.3 ELSE 0 END
          + CASE WHEN ${yr ? sql`(e.start_year <= ${yr.to} AND coalesce(e.end_year, e.start_year) >= ${yr.from})` : sql`false`} THEN 0.9 ELSE 0 END AS s
      FROM events e LEFT JOIN images i ON i.id = e.featured_image_id WHERE e.status = 'published'
      UNION ALL
      SELECT 'person', x.slug, x.name, x.short_description, i.small_url,
        greatest(word_similarity(${lq}, lower(hc_unaccent(x.name))), hc_fuzzy(${q}, x.name) * 0.8) + CASE WHEN lower(hc_unaccent(x.name)) LIKE ${like} THEN 0.35 ELSE 0 END
      FROM people x LEFT JOIN images i ON i.id = x.portrait_image_id WHERE x.status = 'published'
      UNION ALL
      SELECT 'place', x.slug, x.name, coalesce(x.modern_country, x.significance), i.small_url,
        word_similarity(${lq}, lower(hc_unaccent(x.name))) * 0.9 + CASE WHEN lower(hc_unaccent(x.name)) LIKE ${like} THEN 0.25 ELSE 0 END
      FROM places x LEFT JOIN images i ON i.id = x.image_id WHERE x.status = 'published'
      UNION ALL
      SELECT 'period', slug, name, NULL, NULL, word_similarity(${lq}, lower(name)) FROM periods
      UNION ALL
      SELECT 'civilization', slug, name, date_label, NULL, word_similarity(${lq}, lower(hc_unaccent(name))) FROM civilizations
    ) t WHERE s > 0.5 ORDER BY s DESC LIMIT 8`);
  return rows.map(({ s: _s, ...r }) => r);
}
