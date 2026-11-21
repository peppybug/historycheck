-- Word-level edit-distance similarity, for misspellings trigrams miss ("Ceasar", "Ghandi").
CREATE EXTENSION IF NOT EXISTS fuzzystrmatch;
--> statement-breakpoint
CREATE OR REPLACE FUNCTION hc_fuzzy(q text, t text) RETURNS double precision
  LANGUAGE sql IMMUTABLE PARALLEL SAFE
  AS $$
    SELECT coalesce(avg(best), 0) FROM (
      SELECT max(1 - levenshtein(qw, tw)::float / greatest(length(qw), length(tw))) AS best
      FROM unnest(regexp_split_to_array(lower(hc_unaccent(q)), '[^a-z0-9]+')) AS qw
      CROSS JOIN unnest(regexp_split_to_array(lower(hc_unaccent(t)), '[^a-z0-9]+')) AS tw
      WHERE length(qw) >= 4 AND length(tw) >= 3
      GROUP BY qw
    ) x
  $$;
