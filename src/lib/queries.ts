import "server-only";
import { cache } from "react";
import { and, asc, desc, eq, inArray, ne, or, sql } from "drizzle-orm";
import { db } from "@/db";
import * as s from "@/db/schema";

const published = eq(s.events.status, "published");

/* ------------------------------------------------------------------ */
/* Shared shapes                                                       */
/* ------------------------------------------------------------------ */

export type ImageRow = typeof s.images.$inferSelect;

export interface EventCardData {
  slug: string;
  title: string;
  summary: string;
  startYear: number;
  startMonth: number | null;
  startDay: number | null;
  endYear: number | null;
  endMonth: number | null;
  endDay: number | null;
  datePrecision: s.Event["datePrecision"];
  locationLabel: string;
  categoryName: string;
  categorySlug: string;
  periodName: string;
  regionName: string;
  regionSlug: string;
  image: (Pick<ImageRow, "thumbUrl" | "smallUrl" | "thumbWidth" | "thumbHeight" | "caption" | "creator" | "license"> & { position?: string | null; transparent?: boolean | null }) | null;
}

const cardColumns = {
  id: s.events.id,
  slug: s.events.slug,
  title: s.events.title,
  summary: s.events.summary,
  startYear: s.events.startYear,
  startMonth: s.events.startMonth,
  startDay: s.events.startDay,
  endYear: s.events.endYear,
  endMonth: s.events.endMonth,
  endDay: s.events.endDay,
  datePrecision: s.events.datePrecision,
  locationLabel: s.events.locationLabel,
  sortKey: s.events.sortKey,
  categoryName: s.categories.name,
  categorySlug: s.categories.slug,
  periodName: s.periods.name,
  periodSlug: s.periods.slug,
  regionName: s.regions.name,
  regionSlug: s.regions.slug,
  imgThumb: s.images.thumbUrl,
  imgSmall: s.images.smallUrl,
  imgW: s.images.thumbWidth,
  imgH: s.images.thumbHeight,
  imgCaption: s.images.caption,
  imgCreator: s.images.creator,
  imgLicense: s.images.license,
  imgPosition: s.events.imagePosition,
  imgTransparent: s.images.transparent,
};

function cardQuery() {
  return db
    .select(cardColumns)
    .from(s.events)
    .innerJoin(s.categories, eq(s.events.categoryId, s.categories.id))
    .innerJoin(s.periods, eq(s.events.periodId, s.periods.id))
    .innerJoin(s.regions, eq(s.events.regionId, s.regions.id))
    .leftJoin(s.images, eq(s.events.featuredImageId, s.images.id));
}

type CardRow = Awaited<ReturnType<ReturnType<typeof cardQuery>["execute"]>>[number];

export function toCard(r: CardRow): EventCardData & { id: number; sortKey: number; periodSlug: string } {
  return {
    id: r.id,
    slug: r.slug,
    title: r.title,
    summary: r.summary,
    startYear: r.startYear,
    startMonth: r.startMonth,
    startDay: r.startDay,
    endYear: r.endYear,
    endMonth: r.endMonth,
    endDay: r.endDay,
    datePrecision: r.datePrecision,
    locationLabel: r.locationLabel,
    categoryName: r.categoryName,
    categorySlug: r.categorySlug,
    periodName: r.periodName,
    periodSlug: r.periodSlug,
    regionName: r.regionName,
    regionSlug: r.regionSlug,
    sortKey: r.sortKey,
    image: r.imgThumb
      ? {
          thumbUrl: r.imgThumb,
          smallUrl: r.imgSmall,
          thumbWidth: r.imgW!,
          thumbHeight: r.imgH!,
          caption: r.imgCaption!,
          creator: r.imgCreator,
          license: r.imgLicense!,
          position: r.imgPosition,
          transparent: r.imgTransparent,
        }
      : null,
  };
}

export const cardsBySlugs = async (slugs: string[]) => {
  if (!slugs.length) return [];
  const rows = await cardQuery().where(and(published, inArray(s.events.slug, slugs)));
  const map = new Map(rows.map((r) => [r.slug, toCard(r)]));
  return slugs.map((sl) => map.get(sl)).filter(Boolean) as ReturnType<typeof toCard>[];
};

export const cardsByIds = async (ids: number[]) => {
  if (!ids.length) return [];
  const rows = await cardQuery().where(and(published, inArray(s.events.id, ids)));
  return rows.map(toCard);
};

/* ------------------------------------------------------------------ */
/* Home                                                                */
/* ------------------------------------------------------------------ */

export const getStats = cache(async () => {
  const [row] = await db.execute<{ events: number; people: number; places: number; images: number; sources: number; relations: number; verified: number }>(sql`
    SELECT
      (SELECT count(*)::int FROM events WHERE status = 'published') AS events,
      (SELECT count(*)::int FROM people WHERE status = 'published') AS people,
      (SELECT count(*)::int FROM places WHERE status = 'published') AS places,
      (SELECT count(*)::int FROM images) AS images,
      (SELECT count(*)::int FROM sources) AS sources,
      (SELECT count(*)::int FROM event_relations) AS relations,
      (SELECT count(*)::int FROM events WHERE status = 'published' AND verification = 'verified') AS verified
  `);
  return row;
});

export const getFeatured = cache(async () => {
  const rows = await cardQuery()
    .where(and(published, eq(s.events.isFeatured, true)))
    .orderBy(asc(s.events.sortKey));
  return rows.map(toCard);
});

export const getDiscoveries = cache(async (limit = 6) => {
  const rows = await cardQuery()
    .where(and(published, eq(s.events.isDiscovery, true)))
    .orderBy(sql`md5(${s.events.slug} || to_char(now(), 'YYYY-MM-DD'))`)
    .limit(limit);
  return rows.map(toCard);
});

/** Longest chain of causal links (led_to / contributed_to) starting from an event. */
export const getCausalChain = cache(async (startSlug: string, maxDepth = 6, preferEnd?: string) => {
  const rows = await db.execute<{ path: number[]; types: string[] }>(sql`
    WITH RECURSIVE chain(id, path, types, depth) AS (
      SELECT e.id, ARRAY[e.id], ARRAY[]::text[], 1 FROM events e WHERE e.slug = ${startSlug} AND e.status = 'published'
      UNION ALL
      SELECT r.to_event_id, c.path || r.to_event_id, c.types || r.type::text, c.depth + 1
      FROM chain c
      JOIN event_relations r ON r.from_event_id = c.id AND r.type IN ('led_to', 'contributed_to')
      JOIN events e2 ON e2.id = r.to_event_id AND e2.status = 'published'
      WHERE NOT r.to_event_id = ANY(c.path) AND c.depth < ${maxDepth}
    )
    SELECT path, types FROM chain ORDER BY depth DESC, (SELECT slug FROM events WHERE id = chain.id) = ${preferEnd ?? ''} DESC, (SELECT sort_key FROM events WHERE id = chain.id) DESC LIMIT 1
  `);
  const best = rows[0];
  if (!best) return { events: [], types: [] as string[] };
  const cards = await cardsByIds(best.path);
  const byId = new Map(cards.map((c) => [c.id, c]));
  return { events: best.path.map((id) => byId.get(id)!).filter(Boolean), types: best.types };
});

export const getPeriodsWithCounts = cache(async () => {
  return db
    .select({
      slug: s.periods.slug,
      name: s.periods.name,
      startYear: s.periods.startYear,
      endYear: s.periods.endYear,
      description: s.periods.description,
      count: sql<number>`count(${s.events.id})::int`,
    })
    .from(s.periods)
    .leftJoin(s.events, and(eq(s.events.periodId, s.periods.id), published))
    .groupBy(s.periods.id)
    .orderBy(asc(s.periods.sortOrder));
});

export const getCategoriesWithCounts = cache(async () => {
  return db
    .select({
      slug: s.categories.slug,
      name: s.categories.name,
      description: s.categories.description,
      count: sql<number>`count(${s.events.id})::int`,
    })
    .from(s.categories)
    .leftJoin(s.events, and(eq(s.events.categoryId, s.categories.id), published))
    .groupBy(s.categories.id)
    .orderBy(desc(sql`count(${s.events.id})`));
});

export const getRegionsWithCounts = cache(async () => {
  return db
    .select({ slug: s.regions.slug, name: s.regions.name, count: sql<number>`count(${s.events.id})::int` })
    .from(s.regions)
    .leftJoin(s.events, and(eq(s.events.regionId, s.regions.id), published))
    .groupBy(s.regions.id)
    .orderBy(asc(s.regions.id));
});

export const getCivilizations = cache(async () => {
  return db
    .select({
      slug: s.civilizations.slug,
      name: s.civilizations.name,
      description: s.civilizations.description,
      dateLabel: s.civilizations.dateLabel,
      startYear: s.civilizations.startYear,
      thumb: s.images.smallUrl,
      w: s.images.thumbWidth,
      h: s.images.thumbHeight,
      caption: s.images.caption,
      transparent: s.images.transparent,
      count: sql<number>`(SELECT count(*)::int FROM event_civilizations ec JOIN events e ON e.id = ec.event_id AND e.status = 'published' WHERE ec.civilization_id = "civilizations"."id")`,
    })
    .from(s.civilizations)
    .leftJoin(s.images, eq(s.civilizations.imageId, s.images.id))
    .orderBy(asc(s.civilizations.startYear));
});

/** People ranked by how many published events they appear in. */
export const getNotablePeople = cache(async (limit = 12) => {
  return db
    .select({
      slug: s.people.slug,
      name: s.people.name,
      shortDescription: s.people.shortDescription,
      birthYear: s.people.birthYear,
      birthPrecision: s.people.birthPrecision,
      deathYear: s.people.deathYear,
      deathPrecision: s.people.deathPrecision,
      thumb: s.images.smallUrl,
      w: s.images.thumbWidth,
      h: s.images.thumbHeight,
      count: sql<number>`count(${s.eventPeople.eventId})::int`,
    })
    .from(s.people)
    .innerJoin(s.eventPeople, eq(s.eventPeople.personId, s.people.id))
    .innerJoin(s.events, and(eq(s.events.id, s.eventPeople.eventId), published))
    .leftJoin(s.images, eq(s.people.portraitImageId, s.images.id))
    .where(eq(s.people.status, "published"))
    .groupBy(s.people.id, s.images.id)
    .orderBy(desc(sql`count(${s.eventPeople.eventId})`), asc(s.people.name))
    .limit(limit);
});

export const getEventsByCategory = cache(async (slug: string, limit = 4) => {
  const rows = await cardQuery()
    .where(and(published, eq(s.categories.slug, slug)))
    .orderBy(desc(s.events.isFeatured), sql`${s.images.id} IS NULL`, desc(s.events.sortKey))
    .limit(limit);
  return rows.map(toCard);
});

/* ------------------------------------------------------------------ */
/* On this day                                                         */
/* ------------------------------------------------------------------ */

export async function onThisDay(month: number, day: number) {
  const exact = await cardQuery()
    .where(and(published, eq(s.events.datePrecision, "day"), eq(s.events.startMonth, month), eq(s.events.startDay, day)))
    .orderBy(asc(s.events.startYear));
  // Milestones inside events that fall on this date (e.g. "Bastille stormed" inside French Revolution)
  const milestones = await db
    .select({
      label: s.eventMilestones.label,
      description: s.eventMilestones.description,
      year: s.eventMilestones.year,
      slug: s.events.slug,
      title: s.events.title,
    })
    .from(s.eventMilestones)
    .innerJoin(s.events, and(eq(s.events.id, s.eventMilestones.eventId), published))
    .where(and(eq(s.eventMilestones.precision, "day"), eq(s.eventMilestones.month, month), eq(s.eventMilestones.day, day)))
    .orderBy(asc(s.eventMilestones.year))
    .limit(12);
  const births = await db
    .select({ slug: s.people.slug, name: s.people.name, year: s.people.birthYear, kind: sql<string>`'born'` })
    .from(s.people)
    .where(and(eq(s.people.birthPrecision, "day"), eq(s.people.birthMonth, month), eq(s.people.birthDay, day)));
  const deaths = await db
    .select({ slug: s.people.slug, name: s.people.name, year: s.people.deathYear, kind: sql<string>`'died'` })
    .from(s.people)
    .where(and(eq(s.people.deathPrecision, "day"), eq(s.people.deathMonth, month), eq(s.people.deathDay, day)));

  // When nothing happened on this exact date, show the nearest dated events (by day of year).
  let nearby: ReturnType<typeof toCard>[] = [];
  if (exact.length < 3) {
    const doy = (month - 1) * 31 + day;
    const rows = await cardQuery()
      .where(and(published, eq(s.events.datePrecision, "day")))
      .orderBy(
        sql`least(abs(((${s.events.startMonth} - 1) * 31 + ${s.events.startDay}) - ${doy}), 372 - abs(((${s.events.startMonth} - 1) * 31 + ${s.events.startDay}) - ${doy}))`,
      )
      .limit(6);
    nearby = rows.map(toCard).filter((c) => !exact.some((e) => e.slug === c.slug));
  }

  // A deterministic "event of the day", chosen from all events with images.
  const [daily] = await cardQuery()
    .where(and(published, sql`${s.images.id} IS NOT NULL`))
    .orderBy(sql`md5(${s.events.slug} || ${`${month}-${day}`})`)
    .limit(1);

  return {
    exact: exact.map(toCard),
    milestones: milestones.filter((m) => !exact.some((e) => e.slug === m.slug)),
    people: [...births, ...deaths].sort((a, b) => (a.year ?? 0) - (b.year ?? 0)),
    nearby: nearby.slice(0, 4),
    daily: daily ? toCard(daily) : null,
  };
}

export async function randomEventSlug(): Promise<string | null> {
  const [row] = await db.select({ slug: s.events.slug }).from(s.events).where(published).orderBy(sql`random()`).limit(1);
  return row?.slug ?? null;
}

/* ------------------------------------------------------------------ */
/* Event page                                                          */
/* ------------------------------------------------------------------ */

export const getEvent = cache(async (slug: string) => {
  const ev = await db.query.events.findFirst({
    where: and(eq(s.events.slug, slug), published),
    with: {
      period: true,
      category: true,
      region: true,
      primaryPlace: true,
      featuredImage: true,
      milestones: { orderBy: (m, { asc }) => [asc(m.sort)] },
      people: {
        orderBy: (p, { asc }) => [asc(p.sort)],
        with: { person: { with: { portrait: true } } },
      },
      places: {
        orderBy: (p, { asc }) => [asc(p.sort)],
        with: { place: { with: { image: true } } },
      },
      images: { orderBy: (i, { asc }) => [asc(i.sort)], with: { image: true } },
      sources: { with: { source: true } },
      civilizations: { with: { civilization: true } },
    },
  });
  if (!ev) return null;

  const relRows = await db
    .select()
    .from(s.eventRelations)
    .where(or(eq(s.eventRelations.fromEventId, ev.id), eq(s.eventRelations.toEventId, ev.id)));
  const otherIds = [...new Set(relRows.map((r) => (r.fromEventId === ev.id ? r.toEventId : r.fromEventId)))];
  const others = new Map((await cardsByIds(otherIds)).map((c) => [c.id, c]));

  type Rel = { card: ReturnType<typeof toCard>; type: string; note: string | null; direction: "in" | "out" };
  const rel: Rel[] = relRows
    .map((r) => {
      const out = r.fromEventId === ev.id;
      const card = others.get(out ? r.toEventId : r.fromEventId);
      return card ? { card, type: r.type, note: r.note, direction: (out ? "out" : "in") as "in" | "out" } : null;
    })
    .filter(Boolean) as Rel[];

  const byKey = (a: Rel, b: Rel) => a.card.sortKey - b.card.sortKey;
  const before = {
    causedBy: rel.filter((r) => r.direction === "in" && r.type === "led_to").sort(byKey),
    contributing: rel.filter((r) => r.direction === "in" && r.type === "contributed_to").sort(byKey),
    precededBy: rel.filter((r) => r.direction === "in" && r.type === "followed_by").sort(byKey),
  };
  const after = {
    ledTo: rel.filter((r) => r.direction === "out" && r.type === "led_to").sort(byKey),
    contributedTo: rel.filter((r) => r.direction === "out" && r.type === "contributed_to").sort(byKey),
    followedBy: rel.filter((r) => r.direction === "out" && r.type === "followed_by").sort(byKey),
  };
  const links = {
    partOf: rel.filter((r) => r.direction === "out" && (r.type === "part_of" || r.type === "occurred_during")).sort(byKey),
    includes: rel.filter((r) => r.direction === "in" && (r.type === "part_of" || r.type === "occurred_during")).sort(byKey),
    related: rel.filter((r) => r.type === "related_to").sort(byKey),
  };

  // Chronological neighbours in the whole record (no causal claim).
  const [prev] = await cardQuery().where(and(published, sql`${s.events.sortKey} < ${ev.sortKey}`)).orderBy(desc(s.events.sortKey)).limit(1);
  const [next] = await cardQuery().where(and(published, sql`${s.events.sortKey} > ${ev.sortKey}`)).orderBy(asc(s.events.sortKey)).limit(1);

  // Meanwhile elsewhere: overlapping in time, different region.
  const span = Math.max(3, Math.min(40, Math.round(Math.abs(ev.startYear) > 1000 ? 6 : 40)));
  const endY = ev.endYear ?? ev.startYear;
  const meanwhile = (
    await cardQuery()
      .where(
        and(
          published,
          ne(s.events.id, ev.id),
          ne(s.events.regionId, ev.regionId),
          sql`${s.events.startYear} <= ${endY + span} AND coalesce(${s.events.endYear}, ${s.events.startYear}) >= ${ev.startYear - span}`,
          otherIds.length ? sql`${s.events.id} NOT IN (${sql.join(otherIds.map((i) => sql`${i}`), sql`, `)})` : sql`true`,
        ),
      )
      .orderBy(sql`abs(${s.events.sortKey} - ${ev.sortKey})`)
      .limit(4)
  ).map(toCard);

  return {
    ...ev,
    before,
    after,
    links,
    prev: prev ? toCard(prev) : null,
    next: next ? toCard(next) : null,
    meanwhile,
  };
});

export type EventPage = NonNullable<Awaited<ReturnType<typeof getEvent>>>;

/* ------------------------------------------------------------------ */
/* People, places, taxonomy pages                                      */
/* ------------------------------------------------------------------ */

export const getPerson = cache(async (slug: string) => {
  const person = await db.query.people.findFirst({
    where: and(eq(s.people.slug, slug), eq(s.people.status, "published")),
    with: { portrait: true, sources: { with: { source: true } } },
  });
  if (!person) return null;
  const roles = await db
    .select({ role: s.eventPeople.role, eventId: s.eventPeople.eventId })
    .from(s.eventPeople)
    .where(eq(s.eventPeople.personId, person.id));
  const cards = await cardsByIds(roles.map((r) => r.eventId));
  const roleOf = new Map(roles.map((r) => [r.eventId, r.role]));
  const events = cards.sort((a, b) => a.sortKey - b.sortKey).map((c) => ({ ...c, role: roleOf.get(c.id)! }));
  // People who appear in the same events
  const associates = events.length
    ? await db
        .select({ slug: s.people.slug, name: s.people.name, shortDescription: s.people.shortDescription, thumb: s.images.smallUrl, shared: sql<number>`count(*)::int` })
        .from(s.eventPeople)
        .innerJoin(s.people, eq(s.people.id, s.eventPeople.personId))
        .leftJoin(s.images, eq(s.images.id, s.people.portraitImageId))
        .where(and(inArray(s.eventPeople.eventId, events.map((e) => e.id)), ne(s.eventPeople.personId, person.id)))
        .groupBy(s.people.id, s.images.id)
        .orderBy(desc(sql`count(*)`), asc(s.people.name))
        .limit(8)
    : [];
  return { ...person, events, associates };
});

export const getPlace = cache(async (slug: string) => {
  const place = await db.query.places.findFirst({
    where: and(eq(s.places.slug, slug), eq(s.places.status, "published")),
    with: { image: true, region: true, sources: { with: { source: true } } },
  });
  if (!place) return null;
  const links = await db.select({ eventId: s.eventPlaces.eventId }).from(s.eventPlaces).where(eq(s.eventPlaces.placeId, place.id));
  const events = (await cardsByIds(links.map((l) => l.eventId))).sort((a, b) => a.sortKey - b.sortKey);
  const nearby =
    place.latitude != null && place.longitude != null
      ? await db
          .select({ slug: s.places.slug, name: s.places.name, modernCountry: s.places.modernCountry, lat: s.places.latitude, lng: s.places.longitude })
          .from(s.places)
          .where(and(ne(s.places.id, place.id), sql`${s.places.latitude} IS NOT NULL`))
          .orderBy(sql`(${s.places.latitude} - ${place.latitude})^2 + ((${s.places.longitude} - ${place.longitude}) * cos(radians(${place.latitude})))^2`)
          .limit(5)
      : [];
  return { ...place, events, nearby };
});

export const getPeriod = cache(async (slug: string) => {
  const [period] = await db.select().from(s.periods).where(eq(s.periods.slug, slug));
  if (!period) return null;
  const events = (await cardQuery().where(and(published, eq(s.events.periodId, period.id))).orderBy(asc(s.events.sortKey))).map(toCard);
  const all = await db.select().from(s.periods).orderBy(asc(s.periods.sortOrder));
  const i = all.findIndex((p) => p.id === period.id);
  return { period, events, prev: all[i - 1] ?? null, next: all[i + 1] ?? null };
});

export const getCategory = cache(async (slug: string) => {
  const [category] = await db.select().from(s.categories).where(eq(s.categories.slug, slug));
  if (!category) return null;
  const events = (await cardQuery().where(and(published, eq(s.events.categoryId, category.id))).orderBy(asc(s.events.sortKey))).map(toCard);
  return { category, events };
});

export const getRegion = cache(async (slug: string) => {
  const [region] = await db.select().from(s.regions).where(eq(s.regions.slug, slug));
  if (!region) return null;
  const events = (await cardQuery().where(and(published, eq(s.events.regionId, region.id))).orderBy(asc(s.events.sortKey))).map(toCard);
  return { region, events };
});

export const getCivilization = cache(async (slug: string) => {
  const civ = await db.query.civilizations.findFirst({ where: eq(s.civilizations.slug, slug), with: { image: true, region: true } });
  if (!civ) return null;
  const links = await db.select({ eventId: s.eventCivilizations.eventId }).from(s.eventCivilizations).where(eq(s.eventCivilizations.civilizationId, civ.id));
  const events = (await cardsByIds(links.map((l) => l.eventId))).sort((a, b) => a.sortKey - b.sortKey);
  return { ...civ, events };
});

/* ------------------------------------------------------------------ */
/* Beliefs and mythology                                               */
/* ------------------------------------------------------------------ */

const parseFacts = (facts: string[]) => facts.map((f) => f.split("\t") as [string, string]);

export const getBeliefs = cache(async () => {
  const rows = await db.query.beliefs.findMany({ with: { image: true, region: true }, orderBy: asc(s.beliefs.sortYear) });
  const counts = await db
    .select({ beliefId: s.beliefEvents.beliefId, n: sql<number>`count(*)::int` })
    .from(s.beliefEvents)
    .innerJoin(s.events, and(eq(s.events.id, s.beliefEvents.eventId), published))
    .groupBy(s.beliefEvents.beliefId);
  const n = new Map(counts.map((c) => [c.beliefId, c.n]));
  return rows.map((b) => ({ ...b, facts: parseFacts(b.facts), eventCount: n.get(b.id) ?? 0 }));
});

export const getDeities = cache(async () => {
  return db.query.deities.findMany({ with: { image: true, belief: true }, orderBy: asc(s.deities.sort) });
});

export const getBelief = cache(async (slug: string) => {
  const all = await getBeliefs();
  const b = all.find((x) => x.slug === slug);
  if (!b) return null;
  const parent = b.parentId ? all.find((x) => x.id === b.parentId) ?? null : null;
  const branches = all.filter((x) => x.parentId === b.id);
  const links = await db.select({ eventId: s.beliefEvents.eventId }).from(s.beliefEvents).where(eq(s.beliefEvents.beliefId, b.id));
  const events = (await cardsByIds(links.map((l) => l.eventId))).sort((x, y) => x.sortKey - y.sortKey);
  const figures = (await getDeities()).filter((d) => d.beliefId === b.id);
  return { ...b, parent, branches, events, figures };
});

export const getDeity = cache(async (slug: string) => {
  const all = await getDeities();
  const d = all.find((x) => x.slug === slug);
  if (!d) return null;
  const links = await db.select({ eventId: s.deityEvents.eventId }).from(s.deityEvents).where(eq(s.deityEvents.deityId, d.id));
  const events = (await cardsByIds(links.map((l) => l.eventId))).sort((x, y) => x.sortKey - y.sortKey);
  const others = all.filter((x) => x.beliefId === d.beliefId && x.id !== d.id);
  return { ...d, events, others };
});

/** Beliefs and figures linked to one event, for the event page. */
export const getEventBeliefs = cache(async (eventId: number) => {
  const [bs, ds] = await Promise.all([
    db.select({ slug: s.beliefs.slug, name: s.beliefs.name }).from(s.beliefEvents).innerJoin(s.beliefs, eq(s.beliefs.id, s.beliefEvents.beliefId)).where(eq(s.beliefEvents.eventId, eventId)),
    db.select({ slug: s.deities.slug, name: s.deities.name }).from(s.deityEvents).innerJoin(s.deities, eq(s.deities.id, s.deityEvents.deityId)).where(eq(s.deityEvents.eventId, eventId)),
  ]);
  return { beliefs: bs, deities: ds };
});

/* ------------------------------------------------------------------ */
/* Timeline, map, connections, sitemap                                 */
/* ------------------------------------------------------------------ */

export const getTimelineEvents = cache(async () => {
  const rows = await cardQuery().where(published).orderBy(asc(s.events.sortKey));
  return rows.map((r) => {
    const c = toCard(r);
    return {
      slug: c.slug,
      title: c.title,
      startYear: c.startYear,
      startMonth: c.startMonth,
      startDay: c.startDay,
      endYear: c.endYear,
      endMonth: c.endMonth,
      endDay: c.endDay,
      datePrecision: c.datePrecision,
      sortKey: c.sortKey,
      region: c.regionSlug,
      regionName: c.regionName,
      category: c.categorySlug,
      categoryName: c.categoryName,
      period: c.periodSlug,
      location: c.locationLabel,
      summary: c.summary,
      thumb: c.image?.smallUrl ?? null,
    };
  });
});
export type TimelineEvent = Awaited<ReturnType<typeof getTimelineEvents>>[number];

export const getMapPlaces = cache(async () => {
  return db
    .select({
      slug: s.places.slug,
      name: s.places.name,
      lat: s.places.latitude,
      lng: s.places.longitude,
      count: sql<number>`count(${s.eventPlaces.eventId})::int`,
    })
    .from(s.places)
    .innerJoin(s.eventPlaces, eq(s.eventPlaces.placeId, s.places.id))
    .innerJoin(s.events, and(eq(s.events.id, s.eventPlaces.eventId), published))
    .where(and(sql`${s.places.latitude} IS NOT NULL`, eq(s.places.status, "published")))
    .groupBy(s.places.id)
    .orderBy(desc(sql`count(${s.eventPlaces.eventId})`));
});

/** Neighbourhood graph around an event for the connections explorer. */
export async function getConnectionGraph(slug: string, depth = 2) {
  const [root] = await db.select({ id: s.events.id }).from(s.events).where(and(eq(s.events.slug, slug), published));
  if (!root) return null;
  const edges = await db.execute<{ from_event_id: number; to_event_id: number; type: string; note: string | null; dist: number }>(sql`
    WITH RECURSIVE walk(id, dist) AS (
      SELECT ${root.id}::int, 0
      UNION
      SELECT CASE WHEN r.from_event_id = w.id THEN r.to_event_id ELSE r.from_event_id END, w.dist + 1
      FROM walk w JOIN event_relations r ON (r.from_event_id = w.id OR r.to_event_id = w.id)
      WHERE w.dist < ${depth}
    ),
    nodes AS (SELECT id, min(dist) AS dist FROM walk GROUP BY id)
    SELECT DISTINCT r.from_event_id, r.to_event_id, r.type::text, r.note, least(a.dist, b.dist) AS dist
    FROM event_relations r
    JOIN nodes a ON a.id = r.from_event_id
    JOIN nodes b ON b.id = r.to_event_id
    JOIN events ea ON ea.id = r.from_event_id AND ea.status = 'published'
    JOIN events eb ON eb.id = r.to_event_id AND eb.status = 'published'
  `);
  const ids = [...new Set([root.id, ...edges.flatMap((e) => [e.from_event_id, e.to_event_id])])];
  const cards = await cardsByIds(ids);
  return { rootId: root.id, nodes: cards, edges: [...edges] };
}

export async function listEventOptions() {
  return db
    .select({ slug: s.events.slug, title: s.events.title, startYear: s.events.startYear, rels: sql<number>`(SELECT count(*)::int FROM event_relations r WHERE r.from_event_id = "events"."id" OR r.to_event_id = "events"."id")` })
    .from(s.events)
    .where(published)
    .orderBy(asc(s.events.sortKey));
}

export async function sitemapEntries() {
  const [ev, pe, pl, pr, ca, ci, re, be, de] = await Promise.all([
    db.select({ slug: s.events.slug, updated: s.events.updatedAt }).from(s.events).where(published),
    db.select({ slug: s.people.slug, updated: s.people.updatedAt }).from(s.people).where(eq(s.people.status, "published")),
    db.select({ slug: s.places.slug, updated: s.places.updatedAt }).from(s.places).where(eq(s.places.status, "published")),
    db.select({ slug: s.periods.slug }).from(s.periods),
    db.select({ slug: s.categories.slug }).from(s.categories),
    db.select({ slug: s.civilizations.slug }).from(s.civilizations),
    db.select({ slug: s.regions.slug }).from(s.regions),
    db.select({ slug: s.beliefs.slug }).from(s.beliefs),
    db.select({ slug: s.deities.slug }).from(s.deities),
  ]);
  return { ev, pe, pl, pr, ca, ci, re, be, de };
}

/* ------------------------------------------------------------------ */
/* Static generation                                                   */
/* ------------------------------------------------------------------ */

/** Slugs for generateStaticParams (every public page is pre-rendered). */
export async function staticSlugs(kind: "event" | "person" | "place" | "period" | "category" | "region" | "civilization" | "belief" | "deity") {
  if (kind === "belief") return (await db.select({ slug: s.beliefs.slug }).from(s.beliefs)).map((r) => ({ slug: r.slug }));
  if (kind === "deity") return (await db.select({ slug: s.deities.slug }).from(s.deities)).map((r) => ({ slug: r.slug }));
  const rows =
    kind === "event"
      ? await db.select({ slug: s.events.slug }).from(s.events).where(published)
      : kind === "person"
        ? await db.select({ slug: s.people.slug }).from(s.people).where(eq(s.people.status, "published"))
        : kind === "place"
          ? await db.select({ slug: s.places.slug }).from(s.places).where(eq(s.places.status, "published"))
          : kind === "period"
            ? await db.select({ slug: s.periods.slug }).from(s.periods)
            : kind === "category"
              ? await db.select({ slug: s.categories.slug }).from(s.categories)
              : kind === "region"
                ? await db.select({ slug: s.regions.slug }).from(s.regions)
                : await db.select({ slug: s.civilizations.slug }).from(s.civilizations);
  return rows.map((r) => ({ slug: r.slug }));
}
