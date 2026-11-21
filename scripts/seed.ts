/**
 * Reproducible seed: loads curated content (content/) plus verified
 * enrichment (data/enriched.json) into PostgreSQL inside one transaction.
 *
 *   npm run db:seed            full reset and load
 *
 * Verification status of each event:
 *   verified  — authored dates agree with Wikidata and the anchor resolved
 *   partial   — Wikidata has no comparable date, or a reviewed discrepancy
 *               is explained in content/review.ts
 *   unverified + in_review — unexplained date mismatch; held back from
 *               publication until an editor reviews it in /admin
 */
import "dotenv/config";
import { existsSync, readFileSync } from "node:fs";
import { join } from "node:path";
import { sql } from "drizzle-orm";
import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";
import * as s from "../src/db/schema";
import { allEvents } from "../content/events";
import { peopleRegistry } from "../content/people";
import { placesRegistry } from "../content/places";
import { extraRelations } from "../content/relations";
import { reviewedDates } from "../content/review";
import { categories, civilizations, periods, regions } from "../content/taxonomy";
import { parseDate, sortKey } from "../content/types";
import type { EnrichedData, EnrichedImage } from "./enrich";

const url = process.env.DATABASE_URL;
if (!url) throw new Error("DATABASE_URL is not set");
const client = postgres(url, { max: 1, onnotice: () => {} });
const db = drizzle(client, { schema: s });

const enrichedPath = join(process.cwd(), "data", "enriched.json");
const E: EnrichedData = existsSync(enrichedPath)
  ? JSON.parse(readFileSync(enrichedPath, "utf8"))
  : { generatedAt: "", events: {}, people: {}, places: {}, civilizations: {}, images: {} };
if (!E.generatedAt) console.warn("⚠ data/enriched.json not found — seeding without imagery or Wikidata facts. Run `npm run enrich` first.");

const WIKI_PUBLISHER = "Wikipedia (Wikimedia Foundation)";

async function main() {
  const t0 = Date.now();
  await db.transaction(async (tx) => {
    await tx.execute(sql`TRUNCATE event_relations, event_sources, person_sources, place_sources, event_images,
      event_civilizations, event_places, event_people, event_milestones, events, people, places, civilizations,
      sources, images, regions, categories, periods RESTART IDENTITY CASCADE`);

    /* Taxonomy ---------------------------------------------------- */
    const periodRows = await tx
      .insert(s.periods)
      .values(periods.map((p, i) => ({ ...p, sortOrder: i })))
      .returning({ id: s.periods.id, slug: s.periods.slug });
    const categoryRows = await tx.insert(s.categories).values([...categories]).returning({ id: s.categories.id, slug: s.categories.slug });
    const regionRows = await tx.insert(s.regions).values([...regions]).returning({ id: s.regions.id, slug: s.regions.slug });
    const periodId = new Map(periodRows.map((r) => [r.slug, r.id]));
    const categoryId = new Map(categoryRows.map((r) => [r.slug, r.id]));
    const regionId = new Map(regionRows.map((r) => [r.slug, r.id]));

    /* Images ------------------------------------------------------ */
    const imageId = new Map<string, number>();
    const imageList = Object.values(E.images).filter((i) => i.httpStatus === 200);
    // How each file was matched to its subject (strongest method wins).
    const usage = new Map<string, { method: (typeof s.imageMatchMethod.enumValues)[number]; entity: string | null }>();
    const rank = { wikidata_p18: 0, wikipedia_lead: 1, article_media: 2, curated: 3 } as const;
    const use = (file: string | undefined, method: keyof typeof rank, entity: string | null) => {
      if (!file) return;
      const cur = usage.get(file);
      if (!cur || rank[method] < rank[cur.method]) usage.set(file, { method, entity });
    };
    for (const ev of Object.values(E.events)) {
      use(ev.featured?.file, ev.featured?.method ?? "wikipedia_lead", ev.featured?.method === "wikidata_p18" ? ev.qid : ev.wikiTitle);
      ev.gallery.forEach((g) => use(g.file, "article_media", ev.wikiTitle));
    }
    for (const p of Object.values(E.people)) use(p.portrait?.file, p.portrait?.method ?? "wikidata_p18", p.portrait?.method === "wikidata_p18" ? p.qid : p.wikiTitle);
    for (const p of Object.values(E.places)) use(p.image?.file, p.image?.method ?? "wikidata_p18", p.image?.method === "wikidata_p18" ? p.qid : p.wikiTitle);
    for (const c of Object.values(E.civilizations)) use(c.image?.file, c.image?.method ?? "wikipedia_lead", c.qid);
    for (let i = 0; i < imageList.length; i += 200) {
      const rows = await tx
        .insert(s.images)
        .values(imageList.slice(i, i + 200).map((img) => imageRow(img, usage.get(img.file))))
        .returning({ id: s.images.id, title: s.images.commonsTitle });
      rows.forEach((r) => imageId.set(r.title!, r.id));
    }
    const img = (ref: { file: string } | null | undefined) => (ref ? imageId.get(ref.file) ?? null : null);

    /* Sources helper ---------------------------------------------- */
    const sourceId = new Map<string, number>();
    async function source(v: { url: string; title: string; publisher: string; sourceType: (typeof s.sourceType.enumValues)[number]; httpStatus?: number | null }) {
      const existing = sourceId.get(v.url);
      if (existing) return existing;
      const [row] = await tx
        .insert(s.sources)
        .values({ ...v, lastCheckedAt: v.httpStatus ? new Date() : null })
        .returning({ id: s.sources.id });
      sourceId.set(v.url, row.id);
      return row.id;
    }

    /* Civilizations ----------------------------------------------- */
    const civId = new Map<string, number>();
    for (const c of civilizations) {
      const en = E.civilizations[c.slug];
      const [row] = await tx
        .insert(s.civilizations)
        .values({
          slug: c.slug,
          name: c.name,
          description: c.description,
          startYear: c.startYear,
          endYear: c.endYear,
          dateLabel: c.dateLabel,
          regionId: regionId.get(c.region) ?? null,
          wikidataId: en?.qid ?? null,
          wikipediaTitle: c.wiki,
          imageId: img(en?.image),
        })
        .returning({ id: s.civilizations.id });
      civId.set(c.slug, row.id);
    }

    /* Places ------------------------------------------------------ */
    const placeId = new Map<string, number>();
    for (const [slug, ref] of Object.entries(placesRegistry)) {
      const en = E.places[slug];
      const name = ref.name ?? ref.wiki.replace(/\s*\(.*\)$/, "").replace(/,.*$/, "");
      const [row] = await tx
        .insert(s.places)
        .values({
          slug,
          name,
          description: en?.description ?? en?.shortDescription ?? `${name}, a place connected to events in the Historycheck record.`,
          descriptionSource: en?.description ? `Wikipedia — ${en.wikiTitle}` : null,
          significance: en?.shortDescription ? capitalise(en.shortDescription) : null,
          modernCountry: en?.country ?? null,
          latitude: en?.lat ?? null,
          longitude: en?.lng ?? null,
          regionId: regionId.get(ref.region) ?? null,
          imageId: img(en?.image),
          wikidataId: en?.qid ?? null,
          wikipediaTitle: en?.wikiTitle ?? ref.wiki,
          status: "published",
        })
        .returning({ id: s.places.id });
      placeId.set(slug, row.id);
      if (en?.wikiUrl) {
        const sid = await source({ url: en.wikiUrl, title: en.wikiTitle, publisher: WIKI_PUBLISHER, sourceType: "encyclopedia", httpStatus: 200 });
        await tx.insert(s.placeSources).values({ placeId: row.id, sourceId: sid });
      }
      if (en?.qid) {
        const sid = await source({ url: `https://www.wikidata.org/wiki/${en.qid}`, title: `Wikidata item ${en.qid}`, publisher: "Wikidata", sourceType: "database", httpStatus: 200 });
        await tx.insert(s.placeSources).values({ placeId: row.id, sourceId: sid });
      }
    }

    /* People ------------------------------------------------------ */
    const personId = new Map<string, number>();
    for (const [slug, raw] of Object.entries(peopleRegistry)) {
      const ref = typeof raw === "string" ? { wiki: raw } : raw;
      const en = E.people[slug];
      const name = ref.name ?? ref.wiki.replace(/\s*\(.*\)$/, "");
      const b = en?.birth;
      const d = en?.death;
      const [row] = await tx
        .insert(s.people)
        .values({
          slug,
          name,
          shortDescription: en?.shortDescription ? capitalise(en.shortDescription) : "Historical figure",
          biography: en?.biography ?? `${name} appears in the Historycheck record. A full biography has not yet been imported.`,
          biographySource: en?.biography ? `Wikipedia — ${en.wikiTitle}` : null,
          birthYear: b?.year ?? null,
          birthMonth: b?.month ?? null,
          birthDay: b?.day ?? null,
          birthPrecision: b?.precision ?? null,
          deathYear: d?.year ?? null,
          deathMonth: d?.month ?? null,
          deathDay: d?.day ?? null,
          deathPrecision: d?.precision ?? null,
          affiliation: ref.affiliation ?? en?.citizenship ?? null,
          portraitImageId: img(en?.portrait),
          wikidataId: en?.qid ?? null,
          wikipediaTitle: en?.wikiTitle ?? ref.wiki,
          status: "published",
        })
        .returning({ id: s.people.id });
      personId.set(slug, row.id);
      if (en?.wikiUrl) {
        const sid = await source({ url: en.wikiUrl, title: en.wikiTitle, publisher: WIKI_PUBLISHER, sourceType: "encyclopedia", httpStatus: 200 });
        await tx.insert(s.personSources).values({ personId: row.id, sourceId: sid }).onConflictDoNothing();
      }
      if (en?.qid) {
        const sid = await source({ url: `https://www.wikidata.org/wiki/${en.qid}`, title: `Wikidata item ${en.qid}`, publisher: "Wikidata", sourceType: "database", httpStatus: 200 });
        await tx.insert(s.personSources).values({ personId: row.id, sourceId: sid }).onConflictDoNothing();
      }
    }

    /* Events ------------------------------------------------------ */
    const eventId = new Map<string, number>();
    let published = 0;
    let held = 0;
    for (const e of allEvents) {
      const en = E.events[e.slug];
      const start = parseDate(e.date);
      const end = e.end ? parseDate(e.end) : null;
      const review = reviewedDates[e.slug];
      const check = en?.dateCheck?.status ?? "no-data";
      const verification = check === "match" ? "verified" : check === "mismatch" && !review ? "unverified" : "partial";
      const status = check === "mismatch" && !review ? "in_review" : "published";
      if (status === "published") published++;
      else held++;
      const [row] = await tx
        .insert(s.events)
        .values({
          slug: e.slug,
          title: e.title,
          altNames: e.alt ?? [],
          summary: e.summary,
          overview: e.overview,
          context: e.context,
          narrative: e.narrative,
          causes: e.causes,
          consequences: e.consequences,
          keywords: e.keywords ?? [],
          startYear: start.year,
          startMonth: start.month,
          startDay: start.day,
          endYear: end?.year ?? null,
          endMonth: end?.month ?? null,
          endDay: end?.day ?? null,
          datePrecision: start.precision,
          sortKey: sortKey(start),
          periodId: periodId.get(e.period)!,
          categoryId: categoryId.get(e.category)!,
          regionId: regionId.get(e.region)!,
          primaryPlaceId: e.places?.[0] ? placeId.get(e.places[0]) ?? null : null,
          locationLabel: e.location,
          featuredImageId: img(en?.featured),
          isFeatured: !!e.featured,
          isDiscovery: !!e.discovery,
          status,
          verification,
          dateNote: e.dateNote ?? null,
          reviewNotes:
            check === "mismatch"
              ? `Automated date check: ${en?.dateCheck.detail}${review ? `\nEditorial review: ${review}` : ""}`
              : en?.dateCheck?.detail ?? null,
          wikidataId: en?.qid ?? null,
          wikipediaTitle: en?.wikiTitle ?? e.wiki,
        })
        .returning({ id: s.events.id });
      eventId.set(e.slug, row.id);
      const id = row.id;

      if (e.timeline.length)
        await tx.insert(s.eventMilestones).values(
          e.timeline.map(([d, label, description], i) => {
            const p = parseDate(d);
            return { eventId: id, sort: i, year: p.year, month: p.month, day: p.day, precision: p.precision, label, description: description ?? null };
          }),
        );
      if (e.people?.length)
        await tx.insert(s.eventPeople).values(e.people.map(([slug, role], i) => ({ eventId: id, personId: personId.get(slug)!, role, sort: i })));
      if (e.places?.length)
        await tx.insert(s.eventPlaces).values(e.places.map((slug, i) => ({ eventId: id, placeId: placeId.get(slug)!, sort: i })));
      if (e.civ?.length) await tx.insert(s.eventCivilizations).values(e.civ.map((c) => ({ eventId: id, civilizationId: civId.get(c)! })));
      const gallery = (en?.gallery ?? []).filter((g) => imageId.has(g.file));
      if (gallery.length)
        await tx.insert(s.eventImages).values(gallery.map((g, i) => ({ eventId: id, imageId: imageId.get(g.file)!, caption: g.caption, sort: i })));

      // Sources: the encyclopedia article and Wikidata item the record is anchored to,
      // curated institutional sources, and reputable references cited by the article.
      const srcs: { id: number; note: string | null }[] = [];
      if (en?.wikiUrl)
        srcs.push({ id: await source({ url: en.wikiUrl, title: en.wikiTitle, publisher: WIKI_PUBLISHER, sourceType: "encyclopedia", httpStatus: 200 }), note: "Encyclopedia article used as the record's anchor" });
      if (en?.qid)
        srcs.push({ id: await source({ url: `https://www.wikidata.org/wiki/${en.qid}`, title: `Wikidata item ${en.qid}`, publisher: "Wikidata", sourceType: "database", httpStatus: 200 }), note: "Structured data used to verify dates" });
      for (const x of en?.extraSources ?? []) {
        const curated = e.sources?.some((c) => c.url === x.url);
        srcs.push({
          id: await source({ url: x.url, title: x.title, publisher: x.publisher, sourceType: x.type as any, httpStatus: x.status }),
          note: curated ? "Selected by Historycheck editors" : "Reference cited in the encyclopedia article",
        });
      }
      const seen = new Set<number>();
      const uniq = srcs.filter((x) => (seen.has(x.id) ? false : (seen.add(x.id), true)));
      if (uniq.length) await tx.insert(s.eventSources).values(uniq.map((x) => ({ eventId: id, sourceId: x.id, note: x.note })));
    }

    /* Relations --------------------------------------------------- */
    const rels = allEvents.flatMap((e) =>
      (e.relations ?? []).map(([type, target, note]) => ({ fromEventId: eventId.get(e.slug)!, toEventId: eventId.get(target)!, type, note: note ?? null })),
    );
    for (const [from, type, to, note] of extraRelations) {
      const a = eventId.get(from), b = eventId.get(to);
      if (!a || !b) throw new Error(`content/relations.ts references an unknown event: ${!a ? from : to}`);
      rels.push({ fromEventId: a, toEventId: b, type, note });
    }
    if (rels.length) await tx.insert(s.eventRelations).values(rels).onConflictDoNothing();

    console.log(
      `Seeded ${allEvents.length} events (${published} published, ${held} held for review), ${personId.size} people, ${placeId.size} places, ` +
        `${imageId.size} images, ${sourceId.size} sources, ${rels.length} relations in ${((Date.now() - t0) / 1000).toFixed(1)}s`,
    );
  });
  await client.end();
}

function imageRow(img: EnrichedImage, use?: { method: (typeof s.imageMatchMethod.enumValues)[number]; entity: string | null }) {
  const caption = img.objectName ?? img.description ?? img.file.replace(/^File:/, "").replace(/\.[a-z]+$/i, "");
  const attributionParts = [img.creator, img.license].filter(Boolean);
  return {
    url: img.url,
    thumbUrl: img.thumbUrl,
    thumbWidth: img.thumbWidth,
    thumbHeight: img.thumbHeight,
    smallUrl: img.smallUrl,
    width: img.width,
    height: img.height,
    commonsTitle: img.file,
    caption: caption.length > 300 ? caption.slice(0, 299) + "…" : caption,
    description: img.description,
    creator: img.creator,
    dateText: img.dateText,
    sourceUrl: img.sourceUrl,
    sourceName: "Wikimedia Commons",
    license: img.license,
    licenseUrl: img.licenseUrl,
    attribution: attributionParts.length ? `${attributionParts.join(", ")}, via Wikimedia Commons` : "Via Wikimedia Commons",
    attributionRequired: img.attributionRequired,
    mime: img.mime,
    matchMethod: use?.method ?? ("article_media" as const),
    matchedEntity: use?.entity ?? null,
    httpStatus: img.httpStatus,
    verifiedAt: new Date(),
  };
}

const capitalise = (t: string) => t.charAt(0).toUpperCase() + t.slice(1);

main().catch(async (e) => {
  console.error(e);
  await client.end();
  process.exit(1);
});
