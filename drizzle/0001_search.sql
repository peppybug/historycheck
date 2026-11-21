-- Full-text + fuzzy search infrastructure.
CREATE EXTENSION IF NOT EXISTS pg_trgm;
--> statement-breakpoint
CREATE EXTENSION IF NOT EXISTS unaccent;
--> statement-breakpoint
-- unaccent() is STABLE; wrap it so it can be used in indexes.
CREATE OR REPLACE FUNCTION hc_unaccent(text) RETURNS text
  LANGUAGE sql IMMUTABLE PARALLEL SAFE STRICT
  AS $$ SELECT public.unaccent('public.unaccent'::regdictionary, $1) $$;
--> statement-breakpoint
CREATE OR REPLACE FUNCTION hc_events_search_trigger() RETURNS trigger LANGUAGE plpgsql AS $$
BEGIN
  NEW.search_vector :=
    setweight(to_tsvector('english', hc_unaccent(coalesce(NEW.title, ''))), 'A') ||
    setweight(to_tsvector('english', hc_unaccent(array_to_string(NEW.alt_names, ' '))), 'A') ||
    setweight(to_tsvector('english', hc_unaccent(array_to_string(NEW.keywords, ' '))), 'B') ||
    setweight(to_tsvector('english', hc_unaccent(coalesce(NEW.summary, ''))), 'B') ||
    setweight(to_tsvector('english', hc_unaccent(coalesce(NEW.location_label, ''))), 'B') ||
    setweight(to_tsvector('english', hc_unaccent(coalesce(NEW.overview, '') || ' ' || coalesce(NEW.context, ''))), 'C') ||
    setweight(to_tsvector('english', hc_unaccent(coalesce(NEW.narrative, ''))), 'D');
  NEW.updated_at := now();
  RETURN NEW;
END $$;
--> statement-breakpoint
CREATE TRIGGER events_search_update BEFORE INSERT OR UPDATE ON events
  FOR EACH ROW EXECUTE FUNCTION hc_events_search_trigger();
--> statement-breakpoint
CREATE OR REPLACE FUNCTION hc_people_search_trigger() RETURNS trigger LANGUAGE plpgsql AS $$
BEGIN
  NEW.search_vector :=
    setweight(to_tsvector('simple', hc_unaccent(coalesce(NEW.name, ''))), 'A') ||
    setweight(to_tsvector('simple', hc_unaccent(array_to_string(NEW.alt_names, ' '))), 'A') ||
    setweight(to_tsvector('english', hc_unaccent(coalesce(NEW.short_description, ''))), 'B') ||
    setweight(to_tsvector('english', hc_unaccent(coalesce(NEW.affiliation, ''))), 'B') ||
    setweight(to_tsvector('english', hc_unaccent(coalesce(NEW.biography, ''))), 'D');
  NEW.updated_at := now();
  RETURN NEW;
END $$;
--> statement-breakpoint
CREATE TRIGGER people_search_update BEFORE INSERT OR UPDATE ON people
  FOR EACH ROW EXECUTE FUNCTION hc_people_search_trigger();
--> statement-breakpoint
CREATE OR REPLACE FUNCTION hc_places_search_trigger() RETURNS trigger LANGUAGE plpgsql AS $$
BEGIN
  NEW.search_vector :=
    setweight(to_tsvector('simple', hc_unaccent(coalesce(NEW.name, ''))), 'A') ||
    setweight(to_tsvector('simple', hc_unaccent(array_to_string(NEW.alt_names, ' '))), 'A') ||
    setweight(to_tsvector('english', hc_unaccent(coalesce(NEW.modern_country, ''))), 'B') ||
    setweight(to_tsvector('english', hc_unaccent(coalesce(NEW.significance, ''))), 'C') ||
    setweight(to_tsvector('english', hc_unaccent(coalesce(NEW.description, ''))), 'D');
  NEW.updated_at := now();
  RETURN NEW;
END $$;
--> statement-breakpoint
CREATE TRIGGER places_search_update BEFORE INSERT OR UPDATE ON places
  FOR EACH ROW EXECUTE FUNCTION hc_places_search_trigger();
--> statement-breakpoint
-- Trigram indexes power typo-tolerant suggestions ("Napolean", "Ceasar").
CREATE INDEX events_title_trgm_idx ON events USING gin (lower(hc_unaccent(title)) gin_trgm_ops);
--> statement-breakpoint
CREATE INDEX people_name_trgm_idx ON people USING gin (lower(hc_unaccent(name)) gin_trgm_ops);
--> statement-breakpoint
CREATE INDEX places_name_trgm_idx ON places USING gin (lower(hc_unaccent(name)) gin_trgm_ops);
--> statement-breakpoint
-- Guard against self-links and nonsensical dates.
ALTER TABLE event_relations ADD CONSTRAINT event_relations_no_self CHECK (from_event_id <> to_event_id);
--> statement-breakpoint
ALTER TABLE events ADD CONSTRAINT events_month_range CHECK (start_month IS NULL OR start_month BETWEEN 1 AND 12);
--> statement-breakpoint
ALTER TABLE events ADD CONSTRAINT events_day_range CHECK (start_day IS NULL OR start_day BETWEEN 1 AND 31);
--> statement-breakpoint
ALTER TABLE events ADD CONSTRAINT events_end_after_start CHECK (end_year IS NULL OR end_year >= start_year);
