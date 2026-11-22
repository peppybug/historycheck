CREATE TABLE "belief_events" (
	"belief_id" integer NOT NULL,
	"event_id" integer NOT NULL,
	"sort" smallint DEFAULT 0 NOT NULL,
	CONSTRAINT "belief_events_belief_id_event_id_pk" PRIMARY KEY("belief_id","event_id")
);
--> statement-breakpoint
CREATE TABLE "beliefs" (
	"id" serial PRIMARY KEY NOT NULL,
	"slug" text NOT NULL,
	"name" text NOT NULL,
	"kind" text NOT NULL,
	"parent_id" integer,
	"origin" text NOT NULL,
	"sort_year" integer NOT NULL,
	"region_id" integer,
	"summary" text NOT NULL,
	"overview" text NOT NULL,
	"facts" text[] DEFAULT '{}'::text[] NOT NULL,
	"wikidata_id" text,
	"wikipedia_title" text,
	"image_id" integer,
	CONSTRAINT "beliefs_slug_unique" UNIQUE("slug")
);
--> statement-breakpoint
CREATE TABLE "deities" (
	"id" serial PRIMARY KEY NOT NULL,
	"slug" text NOT NULL,
	"name" text NOT NULL,
	"belief_id" integer NOT NULL,
	"domain" text NOT NULL,
	"roman_name" text,
	"parents" text,
	"symbols" text,
	"summary" text NOT NULL,
	"sort" smallint DEFAULT 0 NOT NULL,
	"wikidata_id" text,
	"wikipedia_title" text,
	"image_id" integer,
	CONSTRAINT "deities_slug_unique" UNIQUE("slug")
);
--> statement-breakpoint
CREATE TABLE "deity_events" (
	"deity_id" integer NOT NULL,
	"event_id" integer NOT NULL,
	CONSTRAINT "deity_events_deity_id_event_id_pk" PRIMARY KEY("deity_id","event_id")
);
--> statement-breakpoint
ALTER TABLE "belief_events" ADD CONSTRAINT "belief_events_belief_id_beliefs_id_fk" FOREIGN KEY ("belief_id") REFERENCES "public"."beliefs"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "belief_events" ADD CONSTRAINT "belief_events_event_id_events_id_fk" FOREIGN KEY ("event_id") REFERENCES "public"."events"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "beliefs" ADD CONSTRAINT "beliefs_region_id_regions_id_fk" FOREIGN KEY ("region_id") REFERENCES "public"."regions"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "beliefs" ADD CONSTRAINT "beliefs_image_id_images_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."images"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "deities" ADD CONSTRAINT "deities_belief_id_beliefs_id_fk" FOREIGN KEY ("belief_id") REFERENCES "public"."beliefs"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "deities" ADD CONSTRAINT "deities_image_id_images_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."images"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "deity_events" ADD CONSTRAINT "deity_events_deity_id_deities_id_fk" FOREIGN KEY ("deity_id") REFERENCES "public"."deities"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "deity_events" ADD CONSTRAINT "deity_events_event_id_events_id_fk" FOREIGN KEY ("event_id") REFERENCES "public"."events"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
CREATE INDEX "belief_events_event_idx" ON "belief_events" USING btree ("event_id");