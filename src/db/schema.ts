import { relations, sql } from "drizzle-orm";
import {
  boolean,
  customType,
  doublePrecision,
  index,
  integer,
  pgEnum,
  pgTable,
  primaryKey,
  serial,
  smallint,
  text,
  timestamp,
  uniqueIndex,
} from "drizzle-orm/pg-core";

/** tsvector maintained by database triggers (see migrations/0001_search.sql). */
const tsvector = customType<{ data: string }>({
  dataType() {
    return "tsvector";
  },
});

/* ------------------------------------------------------------------ */
/* Enums                                                               */
/* ------------------------------------------------------------------ */

/** How precisely a date is known. Never present a year-only date as exact. */
export const datePrecision = pgEnum("date_precision", [
  "day",
  "month",
  "year",
  "approximate", // "c. 1200 BCE": year is an estimate
  "decade",
  "century",
]);

/** Editorial workflow: only `published` records are visible publicly. */
export const recordStatus = pgEnum("record_status", ["draft", "in_review", "published"]);

/** How well the record has been checked against its sources. */
export const verificationStatus = pgEnum("verification_status", [
  "verified", // facts checked against cited sources; anchors resolved
  "partial", // core facts checked; some details pending review
  "unverified",
]);

/**
 * Directed relationship types between events (stored in one canonical direction).
 *  led_to          from → to : direct causation (inverse shown as "caused by")
 *  contributed_to  from → to : one of several contributing causes
 *  followed_by     from → to : chronological sequence only, no causal claim
 *  part_of         from ⊂ to : from is a component of a larger event
 *  occurred_during from within to : happened during a broader period/event
 *  related_to      symmetric thematic link, no causal claim
 */
export const relationType = pgEnum("relation_type", [
  "led_to",
  "contributed_to",
  "followed_by",
  "part_of",
  "occurred_during",
  "related_to",
]);

export const sourceType = pgEnum("source_type", [
  "encyclopedia",
  "museum",
  "archive",
  "library",
  "government",
  "academic",
  "primary_document",
  "database",
  "institution",
]);

export const imageMatchMethod = pgEnum("image_match_method", [
  "wikidata_p18", // the image Wikidata editors attached to the exact entity
  "wikipedia_lead", // the lead image of the subject's encyclopedia article
  "article_media", // used inside the subject's own article, with a contextual caption
  "curated", // manually chosen and reviewed in the admin
]);

/* ------------------------------------------------------------------ */
/* Taxonomy                                                            */
/* ------------------------------------------------------------------ */

export const periods = pgTable("periods", {
  id: serial("id").primaryKey(),
  slug: text("slug").notNull().unique(),
  name: text("name").notNull(),
  startYear: integer("start_year").notNull(),
  endYear: integer("end_year").notNull(),
  description: text("description").notNull(),
  sortOrder: smallint("sort_order").notNull().default(0),
});

export const categories = pgTable("categories", {
  id: serial("id").primaryKey(),
  slug: text("slug").notNull().unique(),
  name: text("name").notNull(),
  description: text("description").notNull(),
});

export const regions = pgTable("regions", {
  id: serial("id").primaryKey(),
  slug: text("slug").notNull().unique(),
  name: text("name").notNull(),
});

export const civilizations = pgTable("civilizations", {
  id: serial("id").primaryKey(),
  slug: text("slug").notNull().unique(),
  name: text("name").notNull(),
  description: text("description").notNull(),
  startYear: integer("start_year"),
  endYear: integer("end_year"),
  dateLabel: text("date_label"),
  regionId: integer("region_id").references(() => regions.id, { onDelete: "set null" }),
  wikidataId: text("wikidata_id"),
  wikipediaTitle: text("wikipedia_title"),
  imageId: integer("image_id").references(() => images.id, { onDelete: "set null" }),
});

/* ------------------------------------------------------------------ */
/* Media and sources                                                   */
/* ------------------------------------------------------------------ */

export const images = pgTable(
  "images",
  {
    id: serial("id").primaryKey(),
    /** Original file on Wikimedia Commons (or another archive). */
    /** Near-black drawing on a transparent background; rendered on a white backdrop. */
    transparent: boolean("transparent").notNull().default(false),
    url: text("url").notNull(),
    /** Resized rendition used for display. */
    thumbUrl: text("thumb_url").notNull(),
    thumbWidth: integer("thumb_width").notNull(),
    thumbHeight: integer("thumb_height").notNull(),
    smallUrl: text("small_url"),
    width: integer("width"),
    height: integer("height"),
    commonsTitle: text("commons_title"),
    caption: text("caption").notNull(),
    description: text("description"),
    creator: text("creator"),
    dateText: text("date_text"),
    sourceUrl: text("source_url").notNull(), // human-readable file page
    sourceName: text("source_name").notNull(),
    license: text("license").notNull(),
    licenseUrl: text("license_url"),
    attribution: text("attribution"),
    attributionRequired: boolean("attribution_required").notNull().default(false),
    mime: text("mime"),
    matchMethod: imageMatchMethod("match_method").notNull(),
    matchedEntity: text("matched_entity"), // e.g. Wikidata QID the image is attached to
    httpStatus: smallint("http_status"),
    verifiedAt: timestamp("verified_at", { withTimezone: true }),
    createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
  },
  (t) => [uniqueIndex("images_url_idx").on(t.url)],
);

export const sources = pgTable(
  "sources",
  {
    id: serial("id").primaryKey(),
    title: text("title").notNull(),
    publisher: text("publisher").notNull(),
    url: text("url").notNull(),
    sourceType: sourceType("source_type").notNull(),
    publishedDate: text("published_date"),
    httpStatus: smallint("http_status"),
    lastCheckedAt: timestamp("last_checked_at", { withTimezone: true }),
  },
  (t) => [uniqueIndex("sources_url_idx").on(t.url)],
);

/* ------------------------------------------------------------------ */
/* Core records                                                        */
/* ------------------------------------------------------------------ */

export const places = pgTable(
  "places",
  {
    id: serial("id").primaryKey(),
    slug: text("slug").notNull().unique(),
    name: text("name").notNull(),
    altNames: text("alt_names").array().notNull().default(sql`'{}'::text[]`),
    description: text("description").notNull(),
    descriptionSource: text("description_source"), // attribution when text is quoted from a CC source
    significance: text("significance"),
    modernCountry: text("modern_country"),
    latitude: doublePrecision("latitude"),
    longitude: doublePrecision("longitude"),
    regionId: integer("region_id").references(() => regions.id, { onDelete: "set null" }),
    imageId: integer("image_id").references(() => images.id, { onDelete: "set null" }),
    wikidataId: text("wikidata_id"),
    wikipediaTitle: text("wikipedia_title"),
    status: recordStatus("status").notNull().default("published"),
    searchVector: tsvector("search_vector"),
    createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
    updatedAt: timestamp("updated_at", { withTimezone: true }).notNull().defaultNow(),
  },
  (t) => [index("places_search_idx").using("gin", t.searchVector)],
);

export const people = pgTable(
  "people",
  {
    id: serial("id").primaryKey(),
    slug: text("slug").notNull().unique(),
    name: text("name").notNull(),
    altNames: text("alt_names").array().notNull().default(sql`'{}'::text[]`),
    shortDescription: text("short_description").notNull(),
    biography: text("biography").notNull(),
    biographySource: text("biography_source"),
    birthYear: integer("birth_year"),
    birthMonth: smallint("birth_month"),
    birthDay: smallint("birth_day"),
    birthPrecision: datePrecision("birth_precision"),
    deathYear: integer("death_year"),
    deathMonth: smallint("death_month"),
    deathDay: smallint("death_day"),
    deathPrecision: datePrecision("death_precision"),
    affiliation: text("affiliation"), // nationality or civilization, when appropriate
    portraitImageId: integer("portrait_image_id").references(() => images.id, { onDelete: "set null" }),
    wikidataId: text("wikidata_id"),
    wikipediaTitle: text("wikipedia_title"),
    status: recordStatus("status").notNull().default("published"),
    searchVector: tsvector("search_vector"),
    createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
    updatedAt: timestamp("updated_at", { withTimezone: true }).notNull().defaultNow(),
  },
  (t) => [index("people_search_idx").using("gin", t.searchVector)],
);

export const events = pgTable(
  "events",
  {
    id: serial("id").primaryKey(),
    slug: text("slug").notNull().unique(),
    title: text("title").notNull(),
    altNames: text("alt_names").array().notNull().default(sql`'{}'::text[]`),
    summary: text("summary").notNull(),
    overview: text("overview").notNull(),
    context: text("context").notNull(),
    /** Paragraphs separated by blank lines. */
    narrative: text("narrative").notNull(),
    causes: text("causes").array().notNull().default(sql`'{}'::text[]`),
    consequences: text("consequences").array().notNull().default(sql`'{}'::text[]`),
    keywords: text("keywords").array().notNull().default(sql`'{}'::text[]`),

    startYear: integer("start_year").notNull(), // astronomical-free: -44 = 44 BCE
    startMonth: smallint("start_month"),
    startDay: smallint("start_day"),
    endYear: integer("end_year"),
    endMonth: smallint("end_month"),
    endDay: smallint("end_day"),
    datePrecision: datePrecision("date_precision").notNull(),
    /** Fractional year for ordering, e.g. 1989.86 for 9 Nov 1989. */
    sortKey: doublePrecision("sort_key").notNull(),

    periodId: integer("period_id")
      .notNull()
      .references(() => periods.id, { onDelete: "restrict" }),
    categoryId: integer("category_id")
      .notNull()
      .references(() => categories.id, { onDelete: "restrict" }),
    regionId: integer("region_id")
      .notNull()
      .references(() => regions.id, { onDelete: "restrict" }),
    primaryPlaceId: integer("primary_place_id").references(() => places.id, { onDelete: "set null" }),
    locationLabel: text("location_label").notNull(),
    featuredImageId: integer("featured_image_id").references(() => images.id, { onDelete: "set null" }),
    /** CSS object-position for cropped views of the featured image (e.g. "50% 15%" keeps a face in frame). */
    imagePosition: text("image_position"),

    isFeatured: boolean("is_featured").notNull().default(false),
    isDiscovery: boolean("is_discovery").notNull().default(false),
    status: recordStatus("status").notNull().default("draft"),
    verification: verificationStatus("verification").notNull().default("unverified"),
    /** Reader-facing note about uncertain, traditional or disputed dating. */
    dateNote: text("date_note"),
    reviewNotes: text("review_notes"),
    wikidataId: text("wikidata_id"),
    wikipediaTitle: text("wikipedia_title"),
    searchVector: tsvector("search_vector"),
    createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
    updatedAt: timestamp("updated_at", { withTimezone: true }).notNull().defaultNow(),
  },
  (t) => [
    index("events_sort_idx").on(t.sortKey),
    index("events_period_idx").on(t.periodId),
    index("events_category_idx").on(t.categoryId),
    index("events_region_idx").on(t.regionId),
    index("events_status_idx").on(t.status),
    index("events_month_day_idx").on(t.startMonth, t.startDay),
    index("events_search_idx").using("gin", t.searchVector),
  ],
);

export const eventMilestones = pgTable(
  "event_milestones",
  {
    id: serial("id").primaryKey(),
    eventId: integer("event_id")
      .notNull()
      .references(() => events.id, { onDelete: "cascade" }),
    sort: smallint("sort").notNull(),
    year: integer("year").notNull(),
    month: smallint("month"),
    day: smallint("day"),
    precision: datePrecision("precision").notNull(),
    label: text("label").notNull(),
    description: text("description"),
  },
  (t) => [index("milestones_event_idx").on(t.eventId, t.sort)],
);

/* ------------------------------------------------------------------ */
/* Join tables                                                         */
/* ------------------------------------------------------------------ */

export const eventPeople = pgTable(
  "event_people",
  {
    eventId: integer("event_id")
      .notNull()
      .references(() => events.id, { onDelete: "cascade" }),
    personId: integer("person_id")
      .notNull()
      .references(() => people.id, { onDelete: "cascade" }),
    role: text("role").notNull(),
    sort: smallint("sort").notNull().default(0),
  },
  (t) => [primaryKey({ columns: [t.eventId, t.personId] }), index("event_people_person_idx").on(t.personId)],
);

export const eventPlaces = pgTable(
  "event_places",
  {
    eventId: integer("event_id")
      .notNull()
      .references(() => events.id, { onDelete: "cascade" }),
    placeId: integer("place_id")
      .notNull()
      .references(() => places.id, { onDelete: "cascade" }),
    note: text("note"),
    sort: smallint("sort").notNull().default(0),
  },
  (t) => [primaryKey({ columns: [t.eventId, t.placeId] }), index("event_places_place_idx").on(t.placeId)],
);

export const eventImages = pgTable(
  "event_images",
  {
    eventId: integer("event_id")
      .notNull()
      .references(() => events.id, { onDelete: "cascade" }),
    imageId: integer("image_id")
      .notNull()
      .references(() => images.id, { onDelete: "cascade" }),
    /** Caption describing the image in the context of this event. */
    caption: text("caption"),
    sort: smallint("sort").notNull().default(0),
  },
  (t) => [primaryKey({ columns: [t.eventId, t.imageId] })],
);

export const eventCivilizations = pgTable(
  "event_civilizations",
  {
    eventId: integer("event_id")
      .notNull()
      .references(() => events.id, { onDelete: "cascade" }),
    civilizationId: integer("civilization_id")
      .notNull()
      .references(() => civilizations.id, { onDelete: "cascade" }),
  },
  (t) => [primaryKey({ columns: [t.eventId, t.civilizationId] }), index("event_civ_civ_idx").on(t.civilizationId)],
);

export const eventSources = pgTable(
  "event_sources",
  {
    eventId: integer("event_id")
      .notNull()
      .references(() => events.id, { onDelete: "cascade" }),
    sourceId: integer("source_id")
      .notNull()
      .references(() => sources.id, { onDelete: "cascade" }),
    note: text("note"),
  },
  (t) => [primaryKey({ columns: [t.eventId, t.sourceId] })],
);

export const personSources = pgTable(
  "person_sources",
  {
    personId: integer("person_id")
      .notNull()
      .references(() => people.id, { onDelete: "cascade" }),
    sourceId: integer("source_id")
      .notNull()
      .references(() => sources.id, { onDelete: "cascade" }),
  },
  (t) => [primaryKey({ columns: [t.personId, t.sourceId] })],
);

export const placeSources = pgTable(
  "place_sources",
  {
    placeId: integer("place_id")
      .notNull()
      .references(() => places.id, { onDelete: "cascade" }),
    sourceId: integer("source_id")
      .notNull()
      .references(() => sources.id, { onDelete: "cascade" }),
  },
  (t) => [primaryKey({ columns: [t.placeId, t.sourceId] })],
);

export const eventRelations = pgTable(
  "event_relations",
  {
    id: serial("id").primaryKey(),
    fromEventId: integer("from_event_id")
      .notNull()
      .references(() => events.id, { onDelete: "cascade" }),
    toEventId: integer("to_event_id")
      .notNull()
      .references(() => events.id, { onDelete: "cascade" }),
    type: relationType("type").notNull(),
    /** One sentence explaining the connection, shown to readers. */
    note: text("note"),
  },
  (t) => [
    uniqueIndex("event_relations_unique").on(t.fromEventId, t.toEventId, t.type),
    index("event_relations_to_idx").on(t.toEventId),
  ],
);

/* ------------------------------------------------------------------ */
/* Relations (for the relational query API)                            */
/* ------------------------------------------------------------------ */

export const eventsRelations = relations(events, ({ one, many }) => ({
  period: one(periods, { fields: [events.periodId], references: [periods.id] }),
  category: one(categories, { fields: [events.categoryId], references: [categories.id] }),
  region: one(regions, { fields: [events.regionId], references: [regions.id] }),
  primaryPlace: one(places, { fields: [events.primaryPlaceId], references: [places.id] }),
  featuredImage: one(images, { fields: [events.featuredImageId], references: [images.id] }),
  milestones: many(eventMilestones),
  people: many(eventPeople),
  places: many(eventPlaces),
  images: many(eventImages),
  sources: many(eventSources),
  civilizations: many(eventCivilizations),
}));

export const milestonesRelations = relations(eventMilestones, ({ one }) => ({
  event: one(events, { fields: [eventMilestones.eventId], references: [events.id] }),
}));

export const eventPeopleRelations = relations(eventPeople, ({ one }) => ({
  event: one(events, { fields: [eventPeople.eventId], references: [events.id] }),
  person: one(people, { fields: [eventPeople.personId], references: [people.id] }),
}));

export const eventPlacesRelations = relations(eventPlaces, ({ one }) => ({
  event: one(events, { fields: [eventPlaces.eventId], references: [events.id] }),
  place: one(places, { fields: [eventPlaces.placeId], references: [places.id] }),
}));

export const eventImagesRelations = relations(eventImages, ({ one }) => ({
  event: one(events, { fields: [eventImages.eventId], references: [events.id] }),
  image: one(images, { fields: [eventImages.imageId], references: [images.id] }),
}));

export const eventSourcesRelations = relations(eventSources, ({ one }) => ({
  event: one(events, { fields: [eventSources.eventId], references: [events.id] }),
  source: one(sources, { fields: [eventSources.sourceId], references: [sources.id] }),
}));

export const eventCivilizationsRelations = relations(eventCivilizations, ({ one }) => ({
  event: one(events, { fields: [eventCivilizations.eventId], references: [events.id] }),
  civilization: one(civilizations, { fields: [eventCivilizations.civilizationId], references: [civilizations.id] }),
}));

export const peopleRelations = relations(people, ({ one, many }) => ({
  portrait: one(images, { fields: [people.portraitImageId], references: [images.id] }),
  events: many(eventPeople),
  sources: many(personSources),
}));

export const personSourcesRelations = relations(personSources, ({ one }) => ({
  person: one(people, { fields: [personSources.personId], references: [people.id] }),
  source: one(sources, { fields: [personSources.sourceId], references: [sources.id] }),
}));

export const placesRelations = relations(places, ({ one, many }) => ({
  image: one(images, { fields: [places.imageId], references: [images.id] }),
  region: one(regions, { fields: [places.regionId], references: [regions.id] }),
  events: many(eventPlaces),
  sources: many(placeSources),
}));

export const placeSourcesRelations = relations(placeSources, ({ one }) => ({
  place: one(places, { fields: [placeSources.placeId], references: [places.id] }),
  source: one(sources, { fields: [placeSources.sourceId], references: [sources.id] }),
}));

export const civilizationsRelations = relations(civilizations, ({ one, many }) => ({
  image: one(images, { fields: [civilizations.imageId], references: [images.id] }),
  region: one(regions, { fields: [civilizations.regionId], references: [regions.id] }),
  events: many(eventCivilizations),
}));

/* ------------------------------------------------------------------ */
/* Beliefs and mythology                                               */
/* ------------------------------------------------------------------ */

/** Religions, their branches and ancient religions. Not dated events. */
export const beliefs = pgTable("beliefs", {
  id: serial("id").primaryKey(),
  slug: text("slug").notNull().unique(),
  name: text("name").notNull(),
  kind: text("kind").notNull(),
  parentId: integer("parent_id"),
  origin: text("origin").notNull(),
  sortYear: integer("sort_year").notNull(),
  regionId: integer("region_id").references(() => regions.id, { onDelete: "set null" }),
  summary: text("summary").notNull(),
  overview: text("overview").notNull(),
  /** Reference facts as [label, value] pairs. */
  facts: text("facts").array().notNull().default(sql`'{}'::text[]`),
  wikidataId: text("wikidata_id"),
  wikipediaTitle: text("wikipedia_title"),
  imageId: integer("image_id").references(() => images.id, { onDelete: "set null" }),
});

export const beliefEvents = pgTable(
  "belief_events",
  {
    beliefId: integer("belief_id").notNull().references(() => beliefs.id, { onDelete: "cascade" }),
    eventId: integer("event_id").notNull().references(() => events.id, { onDelete: "cascade" }),
    sort: smallint("sort").notNull().default(0),
  },
  (t) => [primaryKey({ columns: [t.beliefId, t.eventId] }), index("belief_events_event_idx").on(t.eventId)],
);

/** Gods and other figures of myth. Never historical people. */
export const deities = pgTable("deities", {
  id: serial("id").primaryKey(),
  slug: text("slug").notNull().unique(),
  name: text("name").notNull(),
  beliefId: integer("belief_id").notNull().references(() => beliefs.id, { onDelete: "cascade" }),
  domain: text("domain").notNull(),
  romanName: text("roman_name"),
  parents: text("parents"),
  symbols: text("symbols"),
  summary: text("summary").notNull(),
  sort: smallint("sort").notNull().default(0),
  wikidataId: text("wikidata_id"),
  wikipediaTitle: text("wikipedia_title"),
  imageId: integer("image_id").references(() => images.id, { onDelete: "set null" }),
});

export const deityEvents = pgTable(
  "deity_events",
  {
    deityId: integer("deity_id").notNull().references(() => deities.id, { onDelete: "cascade" }),
    eventId: integer("event_id").notNull().references(() => events.id, { onDelete: "cascade" }),
  },
  (t) => [primaryKey({ columns: [t.deityId, t.eventId] })],
);

export const beliefsRelations = relations(beliefs, ({ one, many }) => ({
  image: one(images, { fields: [beliefs.imageId], references: [images.id] }),
  region: one(regions, { fields: [beliefs.regionId], references: [regions.id] }),
  events: many(beliefEvents),
  deities: many(deities),
}));
export const beliefEventsRelations = relations(beliefEvents, ({ one }) => ({
  belief: one(beliefs, { fields: [beliefEvents.beliefId], references: [beliefs.id] }),
  event: one(events, { fields: [beliefEvents.eventId], references: [events.id] }),
}));
export const deitiesRelations = relations(deities, ({ one, many }) => ({
  image: one(images, { fields: [deities.imageId], references: [images.id] }),
  belief: one(beliefs, { fields: [deities.beliefId], references: [beliefs.id] }),
  events: many(deityEvents),
}));
export const deityEventsRelations = relations(deityEvents, ({ one }) => ({
  deity: one(deities, { fields: [deityEvents.deityId], references: [deities.id] }),
  event: one(events, { fields: [deityEvents.eventId], references: [events.id] }),
}));

export type Event = typeof events.$inferSelect;
export type Person = typeof people.$inferSelect;
export type Place = typeof places.$inferSelect;
export type Image = typeof images.$inferSelect;
export type Source = typeof sources.$inferSelect;
