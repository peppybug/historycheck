CREATE TYPE "public"."date_precision" AS ENUM('day', 'month', 'year', 'approximate', 'decade', 'century');--> statement-breakpoint
CREATE TYPE "public"."image_match_method" AS ENUM('wikidata_p18', 'wikipedia_lead', 'curated');--> statement-breakpoint
CREATE TYPE "public"."record_status" AS ENUM('draft', 'in_review', 'published');--> statement-breakpoint
CREATE TYPE "public"."relation_type" AS ENUM('led_to', 'contributed_to', 'followed_by', 'part_of', 'occurred_during', 'related_to');--> statement-breakpoint
CREATE TYPE "public"."source_type" AS ENUM('encyclopedia', 'museum', 'archive', 'library', 'government', 'academic', 'primary_document', 'database', 'institution');--> statement-breakpoint
CREATE TYPE "public"."verification_status" AS ENUM('verified', 'partial', 'unverified');--> statement-breakpoint
CREATE TABLE "categories" (
	"id" serial PRIMARY KEY NOT NULL,
	"slug" text NOT NULL,
	"name" text NOT NULL,
	"description" text NOT NULL,
	CONSTRAINT "categories_slug_unique" UNIQUE("slug")
);
--> statement-breakpoint
CREATE TABLE "civilizations" (
	"id" serial PRIMARY KEY NOT NULL,
	"slug" text NOT NULL,
	"name" text NOT NULL,
	"description" text NOT NULL,
	"start_year" integer,
	"end_year" integer,
	"date_label" text,
	"region_id" integer,
	"wikidata_id" text,
	"wikipedia_title" text,
	"image_id" integer,
	CONSTRAINT "civilizations_slug_unique" UNIQUE("slug")
);
--> statement-breakpoint
CREATE TABLE "event_civilizations" (
	"event_id" integer NOT NULL,
	"civilization_id" integer NOT NULL,
	CONSTRAINT "event_civilizations_event_id_civilization_id_pk" PRIMARY KEY("event_id","civilization_id")
);
--> statement-breakpoint
CREATE TABLE "event_images" (
	"event_id" integer NOT NULL,
	"image_id" integer NOT NULL,
	"sort" smallint DEFAULT 0 NOT NULL,
	CONSTRAINT "event_images_event_id_image_id_pk" PRIMARY KEY("event_id","image_id")
);
--> statement-breakpoint
CREATE TABLE "event_milestones" (
	"id" serial PRIMARY KEY NOT NULL,
	"event_id" integer NOT NULL,
	"sort" smallint NOT NULL,
	"year" integer NOT NULL,
	"month" smallint,
	"day" smallint,
	"precision" date_precision NOT NULL,
	"label" text NOT NULL,
	"description" text
);
--> statement-breakpoint
CREATE TABLE "event_people" (
	"event_id" integer NOT NULL,
	"person_id" integer NOT NULL,
	"role" text NOT NULL,
	"sort" smallint DEFAULT 0 NOT NULL,
	CONSTRAINT "event_people_event_id_person_id_pk" PRIMARY KEY("event_id","person_id")
);
--> statement-breakpoint
CREATE TABLE "event_places" (
	"event_id" integer NOT NULL,
	"place_id" integer NOT NULL,
	"note" text,
	"sort" smallint DEFAULT 0 NOT NULL,
	CONSTRAINT "event_places_event_id_place_id_pk" PRIMARY KEY("event_id","place_id")
);
--> statement-breakpoint
CREATE TABLE "event_relations" (
	"id" serial PRIMARY KEY NOT NULL,
	"from_event_id" integer NOT NULL,
	"to_event_id" integer NOT NULL,
	"type" "relation_type" NOT NULL,
	"note" text
);
--> statement-breakpoint
CREATE TABLE "event_sources" (
	"event_id" integer NOT NULL,
	"source_id" integer NOT NULL,
	"note" text,
	CONSTRAINT "event_sources_event_id_source_id_pk" PRIMARY KEY("event_id","source_id")
);
--> statement-breakpoint
CREATE TABLE "events" (
	"id" serial PRIMARY KEY NOT NULL,
	"slug" text NOT NULL,
	"title" text NOT NULL,
	"alt_names" text[] DEFAULT '{}'::text[] NOT NULL,
	"summary" text NOT NULL,
	"overview" text NOT NULL,
	"context" text NOT NULL,
	"narrative" text NOT NULL,
	"causes" text[] DEFAULT '{}'::text[] NOT NULL,
	"consequences" text[] DEFAULT '{}'::text[] NOT NULL,
	"keywords" text[] DEFAULT '{}'::text[] NOT NULL,
	"start_year" integer NOT NULL,
	"start_month" smallint,
	"start_day" smallint,
	"end_year" integer,
	"end_month" smallint,
	"end_day" smallint,
	"date_precision" date_precision NOT NULL,
	"sort_key" double precision NOT NULL,
	"period_id" integer NOT NULL,
	"category_id" integer NOT NULL,
	"region_id" integer NOT NULL,
	"primary_place_id" integer,
	"location_label" text NOT NULL,
	"featured_image_id" integer,
	"is_featured" boolean DEFAULT false NOT NULL,
	"is_discovery" boolean DEFAULT false NOT NULL,
	"status" "record_status" DEFAULT 'draft' NOT NULL,
	"verification" "verification_status" DEFAULT 'unverified' NOT NULL,
	"review_notes" text,
	"wikidata_id" text,
	"wikipedia_title" text,
	"search_vector" "tsvector",
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	"updated_at" timestamp with time zone DEFAULT now() NOT NULL,
	CONSTRAINT "events_slug_unique" UNIQUE("slug")
);
--> statement-breakpoint
CREATE TABLE "images" (
	"id" serial PRIMARY KEY NOT NULL,
	"url" text NOT NULL,
	"thumb_url" text NOT NULL,
	"thumb_width" integer NOT NULL,
	"thumb_height" integer NOT NULL,
	"small_url" text,
	"width" integer,
	"height" integer,
	"commons_title" text,
	"caption" text NOT NULL,
	"description" text,
	"creator" text,
	"date_text" text,
	"source_url" text NOT NULL,
	"source_name" text NOT NULL,
	"license" text NOT NULL,
	"license_url" text,
	"attribution" text,
	"attribution_required" boolean DEFAULT false NOT NULL,
	"mime" text,
	"match_method" "image_match_method" NOT NULL,
	"matched_entity" text,
	"http_status" smallint,
	"verified_at" timestamp with time zone,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "people" (
	"id" serial PRIMARY KEY NOT NULL,
	"slug" text NOT NULL,
	"name" text NOT NULL,
	"alt_names" text[] DEFAULT '{}'::text[] NOT NULL,
	"short_description" text NOT NULL,
	"biography" text NOT NULL,
	"biography_source" text,
	"birth_year" integer,
	"birth_month" smallint,
	"birth_day" smallint,
	"birth_precision" date_precision,
	"death_year" integer,
	"death_month" smallint,
	"death_day" smallint,
	"death_precision" date_precision,
	"affiliation" text,
	"portrait_image_id" integer,
	"wikidata_id" text,
	"wikipedia_title" text,
	"status" "record_status" DEFAULT 'published' NOT NULL,
	"search_vector" "tsvector",
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	"updated_at" timestamp with time zone DEFAULT now() NOT NULL,
	CONSTRAINT "people_slug_unique" UNIQUE("slug")
);
--> statement-breakpoint
CREATE TABLE "periods" (
	"id" serial PRIMARY KEY NOT NULL,
	"slug" text NOT NULL,
	"name" text NOT NULL,
	"start_year" integer NOT NULL,
	"end_year" integer NOT NULL,
	"description" text NOT NULL,
	"sort_order" smallint DEFAULT 0 NOT NULL,
	CONSTRAINT "periods_slug_unique" UNIQUE("slug")
);
--> statement-breakpoint
CREATE TABLE "person_sources" (
	"person_id" integer NOT NULL,
	"source_id" integer NOT NULL,
	CONSTRAINT "person_sources_person_id_source_id_pk" PRIMARY KEY("person_id","source_id")
);
--> statement-breakpoint
CREATE TABLE "place_sources" (
	"place_id" integer NOT NULL,
	"source_id" integer NOT NULL,
	CONSTRAINT "place_sources_place_id_source_id_pk" PRIMARY KEY("place_id","source_id")
);
--> statement-breakpoint
CREATE TABLE "places" (
	"id" serial PRIMARY KEY NOT NULL,
	"slug" text NOT NULL,
	"name" text NOT NULL,
	"alt_names" text[] DEFAULT '{}'::text[] NOT NULL,
	"description" text NOT NULL,
	"description_source" text,
	"significance" text,
	"modern_country" text,
	"latitude" double precision,
	"longitude" double precision,
	"region_id" integer,
	"image_id" integer,
	"wikidata_id" text,
	"wikipedia_title" text,
	"status" "record_status" DEFAULT 'published' NOT NULL,
	"search_vector" "tsvector",
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	"updated_at" timestamp with time zone DEFAULT now() NOT NULL,
	CONSTRAINT "places_slug_unique" UNIQUE("slug")
);
--> statement-breakpoint
CREATE TABLE "regions" (
	"id" serial PRIMARY KEY NOT NULL,
	"slug" text NOT NULL,
	"name" text NOT NULL,
	CONSTRAINT "regions_slug_unique" UNIQUE("slug")
);
--> statement-breakpoint
CREATE TABLE "sources" (
	"id" serial PRIMARY KEY NOT NULL,
	"title" text NOT NULL,
	"publisher" text NOT NULL,
	"url" text NOT NULL,
	"source_type" "source_type" NOT NULL,
	"published_date" text,
	"http_status" smallint,
	"last_checked_at" timestamp with time zone
);
--> statement-breakpoint
ALTER TABLE "civilizations" ADD CONSTRAINT "civilizations_region_id_regions_id_fk" FOREIGN KEY ("region_id") REFERENCES "public"."regions"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "civilizations" ADD CONSTRAINT "civilizations_image_id_images_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."images"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "event_civilizations" ADD CONSTRAINT "event_civilizations_event_id_events_id_fk" FOREIGN KEY ("event_id") REFERENCES "public"."events"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "event_civilizations" ADD CONSTRAINT "event_civilizations_civilization_id_civilizations_id_fk" FOREIGN KEY ("civilization_id") REFERENCES "public"."civilizations"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "event_images" ADD CONSTRAINT "event_images_event_id_events_id_fk" FOREIGN KEY ("event_id") REFERENCES "public"."events"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "event_images" ADD CONSTRAINT "event_images_image_id_images_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."images"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "event_milestones" ADD CONSTRAINT "event_milestones_event_id_events_id_fk" FOREIGN KEY ("event_id") REFERENCES "public"."events"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "event_people" ADD CONSTRAINT "event_people_event_id_events_id_fk" FOREIGN KEY ("event_id") REFERENCES "public"."events"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "event_people" ADD CONSTRAINT "event_people_person_id_people_id_fk" FOREIGN KEY ("person_id") REFERENCES "public"."people"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "event_places" ADD CONSTRAINT "event_places_event_id_events_id_fk" FOREIGN KEY ("event_id") REFERENCES "public"."events"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "event_places" ADD CONSTRAINT "event_places_place_id_places_id_fk" FOREIGN KEY ("place_id") REFERENCES "public"."places"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "event_relations" ADD CONSTRAINT "event_relations_from_event_id_events_id_fk" FOREIGN KEY ("from_event_id") REFERENCES "public"."events"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "event_relations" ADD CONSTRAINT "event_relations_to_event_id_events_id_fk" FOREIGN KEY ("to_event_id") REFERENCES "public"."events"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "event_sources" ADD CONSTRAINT "event_sources_event_id_events_id_fk" FOREIGN KEY ("event_id") REFERENCES "public"."events"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "event_sources" ADD CONSTRAINT "event_sources_source_id_sources_id_fk" FOREIGN KEY ("source_id") REFERENCES "public"."sources"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "events" ADD CONSTRAINT "events_period_id_periods_id_fk" FOREIGN KEY ("period_id") REFERENCES "public"."periods"("id") ON DELETE restrict ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "events" ADD CONSTRAINT "events_category_id_categories_id_fk" FOREIGN KEY ("category_id") REFERENCES "public"."categories"("id") ON DELETE restrict ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "events" ADD CONSTRAINT "events_region_id_regions_id_fk" FOREIGN KEY ("region_id") REFERENCES "public"."regions"("id") ON DELETE restrict ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "events" ADD CONSTRAINT "events_primary_place_id_places_id_fk" FOREIGN KEY ("primary_place_id") REFERENCES "public"."places"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "events" ADD CONSTRAINT "events_featured_image_id_images_id_fk" FOREIGN KEY ("featured_image_id") REFERENCES "public"."images"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "people" ADD CONSTRAINT "people_portrait_image_id_images_id_fk" FOREIGN KEY ("portrait_image_id") REFERENCES "public"."images"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "person_sources" ADD CONSTRAINT "person_sources_person_id_people_id_fk" FOREIGN KEY ("person_id") REFERENCES "public"."people"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "person_sources" ADD CONSTRAINT "person_sources_source_id_sources_id_fk" FOREIGN KEY ("source_id") REFERENCES "public"."sources"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "place_sources" ADD CONSTRAINT "place_sources_place_id_places_id_fk" FOREIGN KEY ("place_id") REFERENCES "public"."places"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "place_sources" ADD CONSTRAINT "place_sources_source_id_sources_id_fk" FOREIGN KEY ("source_id") REFERENCES "public"."sources"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "places" ADD CONSTRAINT "places_region_id_regions_id_fk" FOREIGN KEY ("region_id") REFERENCES "public"."regions"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "places" ADD CONSTRAINT "places_image_id_images_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."images"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
CREATE INDEX "event_civ_civ_idx" ON "event_civilizations" USING btree ("civilization_id");--> statement-breakpoint
CREATE INDEX "milestones_event_idx" ON "event_milestones" USING btree ("event_id","sort");--> statement-breakpoint
CREATE INDEX "event_people_person_idx" ON "event_people" USING btree ("person_id");--> statement-breakpoint
CREATE INDEX "event_places_place_idx" ON "event_places" USING btree ("place_id");--> statement-breakpoint
CREATE UNIQUE INDEX "event_relations_unique" ON "event_relations" USING btree ("from_event_id","to_event_id","type");--> statement-breakpoint
CREATE INDEX "event_relations_to_idx" ON "event_relations" USING btree ("to_event_id");--> statement-breakpoint
CREATE INDEX "events_sort_idx" ON "events" USING btree ("sort_key");--> statement-breakpoint
CREATE INDEX "events_period_idx" ON "events" USING btree ("period_id");--> statement-breakpoint
CREATE INDEX "events_category_idx" ON "events" USING btree ("category_id");--> statement-breakpoint
CREATE INDEX "events_region_idx" ON "events" USING btree ("region_id");--> statement-breakpoint
CREATE INDEX "events_status_idx" ON "events" USING btree ("status");--> statement-breakpoint
CREATE INDEX "events_month_day_idx" ON "events" USING btree ("start_month","start_day");--> statement-breakpoint
CREATE INDEX "events_search_idx" ON "events" USING gin ("search_vector");--> statement-breakpoint
CREATE UNIQUE INDEX "images_url_idx" ON "images" USING btree ("url");--> statement-breakpoint
CREATE INDEX "people_search_idx" ON "people" USING gin ("search_vector");--> statement-breakpoint
CREATE INDEX "places_search_idx" ON "places" USING gin ("search_vector");--> statement-breakpoint
CREATE UNIQUE INDEX "sources_url_idx" ON "sources" USING btree ("url");