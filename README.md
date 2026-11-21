# Historycheck

**Explore the past. Understand the present.**

Historycheck is a searchable, connected record of world history. Every event page explains what happened, the context that produced it, the people and places involved, what came before and what happened next, with dates checked against Wikidata and archival images matched to the exact subject.

The launch database holds **175 hand-written events** across five thousand years and every inhabited continent, plus **231 people**, **159 places**, **17 civilizations**, about 1,400 verified Wikimedia Commons images, around 1,000 checked sources and more than 200 typed connections between events.

---

## What's in the product

| Area | What it does |
| --- | --- |
| **Home** (`/`) | Search with typeahead, a real causal chain from the database (First World War → … → Cold War), featured events, *On this day* using the visitor's local date, periods, civilizations, people, themes and lesser-known events. |
| **Event pages** (`/event/[slug]`) | Header with precision-aware dates and verification status, featured image with full credit, overview, context, causes, narrative, consequences, timeline, **before/after** (caused by, contributing causes, preceded by → led to, contributed to, followed by), meanwhile elsewhere, people, places with a map, a captioned image gallery with licences, sources, and a "how this record was checked" box. |
| **Search** (`/search`) | Weighted full-text search plus trigram typo tolerance, relational boosts (searching "Julius Caesar" returns the person and every event he is linked to), year and era parsing ("44 BC", "1960s", "15th century", "1914-1918"), filters by period, category, region and date range, faceted counts, sorting, highlighting, "did you mean" and helpful empty states. |
| **Explore** (`/explore`) | Browse by period, theme, region, civilization and person, plus a server-rendered world map of every place. |
| **Timeline** (`/timeline`) | All events on one linear scale with a lane per region. Zoom from all of history to single years (buttons, Ctrl/⌘ + scroll, or pinch), filter by region and category, jump to a year, and hover anywhere to list every event happening at that moment. A list view is the default on phones. |
| **Connections** (`/connections`) | A layered causal map up to three steps from any event. Direct causation, contributing causes and mere sequence are drawn differently, and every link is also listed in words. |
| **People, places, periods, categories, regions, civilizations** | Dedicated pages for each. |
| **Saved and recently viewed** | Kept in the visitor's browser; no account needed. |
| **Editorial workspace** (`/admin`) | Password-protected. Create and edit events, review queue, link people, places, sources (link-checked before saving) and images (verified on Commons before saving), manage typed connections, import people and places from Wikipedia/Wikidata. |
| **SEO** | Per-page metadata and Open Graph images, JSON-LD for events, canonical URLs, `sitemap.xml`, `robots.txt`. |

## Stack

- **Next.js 15** (App Router, React Server Components, server actions), **TypeScript**, **Tailwind CSS 4**
- **PostgreSQL 16** with **Drizzle ORM** and SQL migrations (works with Supabase or any Postgres)
- Postgres full-text search (`tsvector` maintained by triggers, `unaccent`) and `pg_trgm` for typo tolerance
- `d3-geo` + Natural Earth for maps rendered on the server (no tile provider, no client JavaScript)
- Self-hosted fonts via Fontsource: Newsreader (headings and long-form reading), Figtree (interface)
- `zod` for input validation; HMAC-signed session cookies for the admin area

## Getting started

### 1. Prerequisites

- Node.js 20 or newer
- PostgreSQL 14 or newer with the `pg_trgm` and `unaccent` extensions available (both ship with standard Postgres and are enabled on Supabase)

### 2. Install and configure

```bash
npm install
```

```bash
cp .env.example .env.local
```

Edit `.env.local` (see [Environment variables](#environment-variables)). The scripts in `scripts/` read `.env` via `dotenv`, so either copy the same values to `.env` or export them in your shell.

### 3. Create the database

For a local Postgres:

```bash
createdb historycheck
```

Then run the migrations and load the record:

```bash
npm run db:setup
```

`db:setup` runs the migrations in `drizzle/` and then the seed. The seed reads the curated content in `content/` plus the verified enrichment snapshot in `data/enriched.json`, which is committed, so seeding needs no network access and gives the same result every time.

### 4. Run

```bash
npm run dev
```

Open <http://localhost:3000>. The editorial workspace is at <http://localhost:3000/admin>.

## Environment variables

| Variable | Required | Purpose |
| --- | --- | --- |
| `DATABASE_URL` | Yes | Postgres connection string. On Supabase, use the *Session pooler* connection string. |
| `ADMIN_PASSWORD` | For `/admin` | Password for the editorial workspace. If unset, the workspace is disabled. |
| `SESSION_SECRET` | For `/admin` | At least 32 random characters, used to sign the admin session cookie. Generate one with `openssl rand -base64 48`. |
| `NEXT_PUBLIC_SITE_URL` | Recommended | Public origin (for example `https://historycheck.example`). Used for canonical URLs, Open Graph and the sitemap. |

No third-party API keys are needed. Wikipedia, Wikidata and Wikimedia Commons are public APIs; the enrichment script identifies itself with a descriptive User-Agent as Wikimedia's policy requires, and throttles and caches its requests.

Secrets are only read on the server (database access, server actions and middleware); nothing sensitive is exposed to the browser.

## Scripts

| Command | What it does |
| --- | --- |
| `npm run dev` / `build` / `start` | Next.js development server, production build, production server |
| `npm run db:migrate` | Apply SQL migrations |
| `npm run db:generate` | Generate a migration after editing `src/db/schema.ts` |
| `npm run db:seed` | Reset and load the database from `content/` and `data/enriched.json` |
| `npm run db:setup` | Migrate, then seed |
| `npm run enrich` | Re-run the Wikipedia, Wikidata and Commons enrichment pipeline and rewrite `data/enriched.json` and `data/enrichment-report.md` |
| `npm run content:validate` | Check curated content: references, dates, duplicate slugs, and that every Wikipedia anchor resolves |
| `npm test` | Unit tests for date handling, year-query parsing and source classification |
| `npm run typecheck`, `npm run lint` | Static checks |

## How the data works

```
content/            Hand-written records (TypeScript, reviewed in git)
  events/*.ts         175 events: text, dates with precision, causes, consequences,
                      timeline, people + roles, places, typed relations, sources
  people.ts           People registry → exact Wikipedia article (and Wikidata ID when needed)
  places.ts           Places registry → exact Wikipedia article + region
  taxonomy.ts         Periods, categories, regions, civilizations
  review.ts           Editorial decisions on automated date discrepancies
scripts/enrich.ts   Resolves every record against Wikipedia/Wikidata/Commons → data/enriched.json
scripts/seed.ts     Loads content + enrichment into Postgres in one transaction
```

### Data model

`events`, `people`, `places`, `images`, `sources`, `periods`, `categories`, `regions` and `civilizations`, joined by `event_people` (with role), `event_places`, `event_images` (with a contextual caption), `event_sources` (with a note), `event_civilizations`, `person_sources`, `place_sources`, `event_milestones` and `event_relations`.

- **Dates** are stored as year, month and day integers plus a precision enum (`day`, `month`, `year`, `approximate`, `decade`, `century`). BCE years are negative, and there is no year zero. A `sort_key` gives a fractional year for ordering.
- **Relations** are directed and typed: `led_to` and `contributed_to` (causal), `followed_by` (sequence only), `part_of` and `occurred_during` (containment), `related_to` (thematic). Inverse readings such as "caused by" and "preceded by" are derived, not stored twice.
- **Editorial workflow**: `status` (`draft`, `in_review`, `published`) controls visibility; `verification` (`verified`, `partial`, `unverified`) and `review_notes` record how each record was checked.
- **Search**: `search_vector` columns are maintained by triggers with weighted fields; GIN indexes cover full-text and trigram lookups.
- Foreign keys, cascade rules, check constraints (no self-links, valid month and day ranges, end after start) and indexes are defined in `src/db/schema.ts` and `drizzle/`.

### Image acquisition and matching

Images are never found by keyword search. For each record, the pipeline:

1. identifies the exact subject through its Wikipedia article and Wikidata item;
2. picks the image attached to that entity: Wikidata **P18** for people and places, or the **lead image** editors chose for the event's own article;
3. builds galleries only from images **used inside the event's article**, keeping the article's caption as evidence of relevance;
4. fetches Commons metadata for every file (creator, date, licence, licence URL, whether attribution is required) and accepts only files with licence information;
5. checks that both display renditions (500 px and 1280 px) return HTTP 200, and drops any image that doesn't;
6. stores how each image was matched (`wikidata_p18`, `wikipedia_lead`, `article_media` or `curated`) so it can be shown and audited.

When no image can be verified, the page says so rather than showing a substitute. Commons thumbnails are served directly from `upload.wikimedia.org` at pre-sized widths with explicit dimensions, lazy loading and `srcset`, so there is no layout shift and no re-proxying.

### Date verification

`scripts/enrich.ts` compares each event's authored start and end dates with Wikidata's P585 (point in time), P580 (start) and P582 (end), allowing for Julian/Gregorian conversion and BCE numbering conventions. Results:

- **match** → `verified`
- **no comparable Wikidata date** → `partial`
- **mismatch** → held as `in_review` until an editor fixes the content or records a reason in `content/review.ts`

The full results are written to `data/enrichment-report.md`.

### Sources

Each event cites its encyclopedia article and Wikidata item, institutional sources selected by editors, and reputable references cited by its article: museums, archives, libraries, universities, government historians and established reference works (see `scripts/lib/source-allowlist.ts`). Every link is checked. Hosts that block automated checks (for example Britannica) are kept only when the citing article vouches for them, and their status is recorded.

## Adding to the record

**In the workspace (`/admin`):** create an event (it starts as a draft), then link people, places, connections, sources and images on its page. Import new people or places by Wikipedia title; their dates, coordinates, portraits and short descriptions are fetched and verified live. Publish when the record is reviewed.

**In code:** add an entry to a file in `content/events/`, register any new people or places, then run:

```bash
npm run content:validate
```

```bash
npm run enrich
```

```bash
npm run db:seed
```

Note that `db:seed` resets the database. Edits made in the workspace live only in the database, so export or back up before re-seeding a production database.

## Deployment

Any Node host works. For Vercel with Supabase:

1. Create a Supabase project, copy the *Session pooler* connection string into `DATABASE_URL`, and run `npm run db:setup` from your machine against it.
2. Import the repository into Vercel, set `DATABASE_URL`, `ADMIN_PASSWORD`, `SESSION_SECRET` and `NEXT_PUBLIC_SITE_URL`, and deploy.

## Accessibility

Semantic landmarks and a skip link; one `h1` per page with an ordered heading structure; ARIA combobox pattern for search suggestions; visible focus styles; labelled form controls; keyboard support in the timeline, gallery lightbox (native `<dialog>`) and connections explorer; text alternatives for every chart (connections are also listed in words); light and dark themes that meet WCAG AA contrast; and `prefers-reduced-motion` is respected.

## Licensing of content

Event text is written for Historycheck. Biographies and place descriptions quoted from Wikipedia are CC BY-SA 4.0 and attributed on each page. Every image carries its own Commons licence and attribution. Map outlines are Natural Earth (public domain).
