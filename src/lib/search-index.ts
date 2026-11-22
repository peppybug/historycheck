import "server-only";
import { asc, eq, sql } from "drizzle-orm";
import { db } from "@/db";
import * as s from "@/db/schema";
import type { SearchIndex } from "./search-types";

/**
 * Builds the compact document set the client-side search engine indexes.
 * Each event carries the names of its people, places and civilizations so
 * that searching "Julius Caesar" also finds the events he is linked to.
 */
export async function buildSearchIndex(): Promise<SearchIndex> {
  const [periods, categories, regions, civs] = await Promise.all([
    db.select({ slug: s.periods.slug, name: s.periods.name, startYear: s.periods.startYear, endYear: s.periods.endYear }).from(s.periods).orderBy(asc(s.periods.sortOrder)),
    db.select({ slug: s.categories.slug, name: s.categories.name }).from(s.categories).orderBy(asc(s.categories.name)),
    db.select({ slug: s.regions.slug, name: s.regions.name }).from(s.regions).orderBy(asc(s.regions.id)),
    db.select({ slug: s.civilizations.slug, name: s.civilizations.name, dateLabel: s.civilizations.dateLabel }).from(s.civilizations).orderBy(asc(s.civilizations.startYear)),
  ]);

  const events = await db.execute<{
    slug: string; title: string; alt_names: string[]; keywords: string[]; summary: string; location_label: string;
    start_year: number; start_month: number | null; start_day: number | null; end_year: number | null; end_month: number | null; end_day: number | null;
    date_precision: string; sort_key: number; period: string; category: string; region: string; is_featured: boolean;
    thumb: string | null; w: number | null; h: number | null; people: string[] | null; places: string[] | null; civs: string[] | null;
  }>(sql`
    SELECT e.slug, e.title, e.alt_names, e.keywords, e.summary, e.location_label,
      e.start_year, e.start_month, e.start_day, e.end_year, e.end_month, e.end_day, e.date_precision, e.sort_key,
      pe.slug AS period, c.slug AS category, r.slug AS region, e.is_featured,
      i.small_url AS thumb, i.thumb_width AS w, i.thumb_height AS h,
      (SELECT array_agg(x.name ORDER BY ep.sort) FROM event_people ep JOIN people x ON x.id = ep.person_id WHERE ep.event_id = e.id) AS people,
      (SELECT array_agg(x.name ORDER BY epl.sort) FROM event_places epl JOIN places x ON x.id = epl.place_id WHERE epl.event_id = e.id) AS places,
      (SELECT array_agg(x.name) FROM event_civilizations ec JOIN civilizations x ON x.id = ec.civilization_id WHERE ec.event_id = e.id) AS civs
    FROM events e
    JOIN periods pe ON pe.id = e.period_id
    JOIN categories c ON c.id = e.category_id
    JOIN regions r ON r.id = e.region_id
    LEFT JOIN images i ON i.id = e.featured_image_id
    WHERE e.status = 'published'
    ORDER BY e.sort_key`);

  const people = await db
    .select({
      slug: s.people.slug,
      name: s.people.name,
      alt: s.people.altNames,
      desc: s.people.shortDescription,
      affiliation: s.people.affiliation,
      by: s.people.birthYear,
      dy: s.people.deathYear,
      thumb: s.images.smallUrl,
      events: sql<number>`(SELECT count(*)::int FROM event_people ep WHERE ep.person_id = "people"."id")`,
    })
    .from(s.people)
    .leftJoin(s.images, eq(s.images.id, s.people.portraitImageId))
    .where(eq(s.people.status, "published"));

  const places = await db
    .select({
      slug: s.places.slug,
      name: s.places.name,
      alt: s.places.altNames,
      country: s.places.modernCountry,
      sig: s.places.significance,
      thumb: s.images.smallUrl,
      events: sql<number>`(SELECT count(*)::int FROM event_places ep WHERE ep.place_id = "places"."id")`,
    })
    .from(s.places)
    .leftJoin(s.images, eq(s.images.id, s.places.imageId))
    .where(eq(s.places.status, "published"));

  const beliefRows = await db
    .select({ id: s.beliefs.id, parentId: s.beliefs.parentId, slug: s.beliefs.slug, name: s.beliefs.name, origin: s.beliefs.origin, thumb: s.images.smallUrl })
    .from(s.beliefs)
    .leftJoin(s.images, eq(s.images.id, s.beliefs.imageId))
    .orderBy(asc(s.beliefs.sortYear));
  const deityRows = await db
    .select({ slug: s.deities.slug, name: s.deities.name, roman: s.deities.romanName, domain: s.deities.domain, thumb: s.images.smallUrl })
    .from(s.deities)
    .leftJoin(s.images, eq(s.images.id, s.deities.imageId))
    .orderBy(asc(s.deities.sort));

  return {
    generatedAt: new Date().toISOString(),
    periods,
    categories,
    regions,
    civilizations: civs,
    events: events.map((e) => ({
      slug: e.slug,
      title: e.title,
      alt: e.alt_names,
      keywords: e.keywords,
      summary: e.summary,
      location: e.location_label,
      sy: e.start_year,
      sm: e.start_month,
      sd: e.start_day,
      ey: e.end_year,
      em: e.end_month,
      ed: e.end_day,
      precision: e.date_precision as SearchIndex["events"][number]["precision"],
      sort: e.sort_key,
      period: e.period,
      category: e.category,
      region: e.region,
      featured: e.is_featured,
      thumb: e.thumb,
      w: e.w,
      h: e.h,
      people: e.people ?? [],
      places: e.places ?? [],
      civs: e.civs ?? [],
    })),
    people,
    places,
    beliefs: [
      ...beliefRows.map((b) => ({ slug: b.slug, kind: "belief" as const, name: b.name, alt: [], detail: b.parentId ? `Branch of ${beliefRows.find((x) => x.id === b.parentId)?.name} · ${b.origin}` : b.origin, thumb: b.thumb })),
      ...deityRows.map((d) => ({
        slug: d.slug,
        kind: "deity" as const,
        name: d.name,
        alt: d.roman && d.roman !== d.name ? [d.roman] : [],
        detail: `Greek mythology · ${d.domain}${d.roman && d.roman !== d.name ? ` (Roman: ${d.roman})` : ""}`,
        thumb: d.thumb,
      })),
    ],
  };
}
