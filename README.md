# Historycheck

**Explore the past. Understand the present.**

Historycheck is a searchable, connected record of world history. Every event page explains what happened, the context that produced it, the people and places involved, what came before and what happened next, with dates checked against Wikidata and archival images matched to the exact subject.

The launch database holds **175 hand-written events** spanning about 5,000 years across all ten regions of the record, plus **231 people**, **159 places**, **17 civilizations**, **1,446** verified Wikimedia Commons images, **2,114** sources (1,001 institutional sources beyond the Wikipedia and Wikidata anchors) and **172** typed connections between events, 79 of them causal. 96 events have dates that match Wikidata exactly; every other event shows on its page why it is partially verified.

---

## What's in the product

| Area | What it does |
| --- | --- |
| **Home** (`/`) | Search with typeahead, a real causal chain from the database (First World War → … → Cold War), featured events, *On this day* using the visitor's local date, periods, civilizations, people, themes and lesser-known events. |
| **Event pages** (`/event/[slug]`) | Header with precision-aware dates and verification status, featured image with full credit, overview, context, causes, narrative, consequences, timeline, **before/after** (caused by, contributing causes, preceded by → led to, contributed to, followed by), meanwhile elsewhere, people, places with a map, a captioned image gallery with licences, sources, and a "how this record was checked" box. |
| **Search** (`/search`) | Runs in the browser over an index generated from the database at build time, so it works on static hosting. Field-weighted ranking, prefix matching while you type, typo tolerance as a labelled fallback ("Ceasar" finds Caesar), relational matching (searching "Julius Caesar" returns the person and every event he is linked to), year and era parsing ("44 BC", "1960s", "15th century", "1914-1918"), filters by period, category, region and date range, faceted counts, sorting, highlighting, "did you mean" and helpful empty states. |
| **Explore** (`/explore`) | Browse by period, theme, region, civilization and person, plus a server-rendered world map of every place. |
| **Timeline** (`/timeline`) | All events on one linear scale with a lane per region. Zoom from all of history to single years (buttons, Ctrl/⌘ + scroll, or pinch), filter by region and category, jump to a year, and hover anywhere to list every event happening at that moment. A list view is the default on phones. |
| **Connections** (`/connections/[slug]`) | A layered causal map up to three steps from any event. Direct causation, contributing causes and mere sequence are drawn differently, and every link is also listed in words. |
| **People, places, periods, categories, regions, civilizations** | Dedicated pages for each. |
| **Saved and recently viewed** | Kept in the visitor's browser; no account needed. |
| **Editorial workspace** (`/admin`) | Needs a Node server, so it is **not part of the GitHub Pages build** (see [Editing the record](#adding-to-the-record)). Password-protected. Create and edit events, review queue, link people, places, sources (link-checked before saving) and images (verified on Commons before saving), manage typed connections, import people and places from Wikipedia/Wikidata. |
| **SEO** | Per-page metadata and Open Graph images, JSON-LD for events, canonical URLs, `sitemap.xml`, `robots.txt`. |

## Stack

- **Next.js 15** (App Router, React Server Components, server actions), **TypeScript**, **Tailwind CSS 4**
- **PostgreSQL 16** with **Drizzle ORM** and SQL migrations (works with Supabase or any Postgres)
- Client-side search with MiniSearch over a JSON index generated from Postgres at build time
- `d3-geo` + Natural Earth for maps rendered on the server (no tile provider, no client JavaScript)
- Self-hosted fonts via Fontsource: Newsreader (headings and long-form reading), Figtree (interface)
- `zod` for input validation; HMAC-signed session cookies for the admin area

## Hosting on GitHub Pages

The public site is deployed as a fully static export by `.github/workflows/pages.yml`. On every push to `main` (or the current default branch), and once a day, the workflow:

1. starts a throwaway PostgreSQL 16 service;
2. validates the content and runs the unit tests;
3. runs the migrations and loads the record from `content/` and `data/enriched.json` (no requests to Wikimedia are made during the build);
4. pre-renders every page with `npm run build:pages`, producing ./out with 797 HTML pages, a search index, one "On this day" file per calendar day and a shared map outline;
5. publishes ./out to GitHub Pages.

**One-time setup:** in the repository, open **Settings → Pages → Build and deployment** and set **Source** to **GitHub Actions**. The next push (or **Actions → Deploy to GitHub Pages → Run workflow**) publishes the site at `https://<your-user>.github.io/historycheck/`.

The base path and canonical URL come from GitHub automatically (`actions/configure-pages`), so a custom domain also works without code changes.

What changes on static hosting:

| Feature | On GitHub Pages |
| --- | --- |
| Event, person, place and collection pages, timeline, explore, about | Pre-rendered at build time |
| Search and typeahead | In the browser, over `/data/search-index.json` |
| On this day | In the browser, using the visitor's date and `/data/on-this-day/MM-DD.json` |
| Random event, saved events, recently viewed | In the browser |
| Connections | One static page per event (`/connections/apollo-11/`) |
| `/admin` editorial workspace | Not available (it needs a server); edit `content/` instead |
| "Less familiar chapters" on the homepage | Rotates with the daily rebuild |

To build the static site locally:

```bash
NEXT_PUBLIC_BASE_PATH=/historycheck npm run build:pages
```

`scripts/build-pages.mjs` temporarily moves the server-only code (`src/app/admin`, `src/components/admin`, `src/middleware.ts`) out of the way, runs `next build` with `output: "export"`, and restores it afterwards, even if the build fails.

To preview it under the same path GitHub uses, serve a folder that contains `out` as `historycheck`:

```bash
mkdir -p /tmp/pages && ln -sfn "$PWD/out" /tmp/pages/historycheck && python3 -m http.server 4000 -d /tmp/pages
```

Then open <http://localhost:4000/historycheck/>.

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
| `NEXT_PUBLIC_BASE_PATH` | Static builds only | Sub-path the site is served from, e.g. `/historycheck` for a GitHub Pages project site. Set automatically by the Pages workflow. |
| `NEXT_PUBLIC_SITE_URL` | Recommended | Public origin (for example `https://historycheck.example`). Used for canonical URLs, Open Graph and the sitemap. |

No third-party API keys are needed. Wikipedia, Wikidata and Wikimedia Commons are public APIs; the enrichment script identifies itself with a descriptive User-Agent as Wikimedia's policy requires, and throttles and caches its requests.

Secrets are only read on the server or at build time (database access, server actions and middleware); nothing sensitive is exposed to the browser. The static GitHub Pages build needs no secrets at all: its database is a temporary container inside the workflow.

## Scripts

| Command | What it does |
| --- | --- |
| `npm run dev` / `build` / `start` | Next.js development server, production build, production server (with `/admin`) |
| `npm run build:pages` | Static export for GitHub Pages into ./out |
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
5. checks that the display renditions return HTTP 200 and drops any image that doesn't. When a file is narrower than 1280 px, Commons would return the unscaled original; instead the pipeline derives the largest *standard* thumbnail width (960, 500, 330 or 250 px) below the original's width. Those are edge-cached by Wikimedia and are what its hotlinking guidance prefers. Because Wikimedia's robot policy limits scripts from triggering thumbnail generation, derived renditions are verified through the Commons API (file exists, dimensions known) rather than by fetching each one;
6. stores how each image was matched (`wikidata_p18`, `wikipedia_lead`, `article_media` or `curated`) so it can be shown and audited.

When no image can be verified, the page says so rather than showing a substitute. If an image fails to load in a visitor's browser, the page shows a labelled placeholder (or drops it from the gallery) instead of a broken image. For a high-traffic deployment, consider putting a caching image proxy or CDN in front of `upload.wikimedia.org`. Commons thumbnails are served directly from `upload.wikimedia.org` at pre-sized widths with explicit dimensions, lazy loading and `srcset`, so there is no layout shift and no re-proxying.

### Date verification

`scripts/enrich.ts` compares each event's authored start and end dates with Wikidata's P585 (point in time), P580 (start) and P582 (end), allowing for Julian/Gregorian conversion and BCE numbering conventions. Results:

- **match** → `verified`
- **no comparable Wikidata date** → `partial`
- **mismatch** → held as `in_review` until an editor fixes the content or records a reason in `content/review.ts`

The full results are written to `data/enrichment-report.md`.

### Sources

Each event cites its encyclopedia article and Wikidata item, institutional sources selected by editors, and reputable references cited by its article: museums, archives, libraries, universities, government historians and established reference works (see `scripts/lib/source-allowlist.ts`). Every link is checked. Hosts that block automated checks (for example Britannica) are kept only when the citing article vouches for them, and their status is recorded.

## Adding to the record

**For the GitHub Pages site,** the record lives in `content/` and changes go through pull requests, so reviewing the PR is the review before publication. Add or edit an event in `content/events/`, register any new people or places in `content/people.ts` and `content/places.ts`, then refresh the verified snapshot and check everything:

```bash
npm run enrich
```

```bash
npm run content:validate
```

Commit the content changes together with the updated `data/enriched.json` and `data/enrichment-report.md`. If the report lists a date that differs from Wikidata, either fix the content or explain the difference in `content/review.ts`; until then the build keeps that event unpublished. Merging deploys the site.

**With a server deployment (`/admin`):** create an event (it starts as a draft), then link people, places, connections, sources and images on its page. Import new people or places by Wikipedia title; their dates, coordinates, portraits and short descriptions are fetched and verified live. Publish when the record is reviewed.

Note that `db:seed` resets the database. Edits made in the workspace live only in that database (they are not written back to `content/`), so back up before re-seeding a server database.

## Server deployment (optional)

GitHub Pages is the default. To also run the editorial workspace, deploy the regular build to any Node host. For Vercel with Supabase:

1. Create a Supabase project, copy the *Session pooler* connection string into `DATABASE_URL`, and run `npm run db:setup` from your machine against it.
2. Import the repository into Vercel, set `DATABASE_URL`, `ADMIN_PASSWORD`, `SESSION_SECRET` and `NEXT_PUBLIC_SITE_URL`, and deploy.

## Accessibility

Semantic landmarks and a skip link; one `h1` per page with an ordered heading structure; ARIA combobox pattern for search suggestions; visible focus styles; labelled form controls; keyboard support in the timeline, gallery lightbox (native `<dialog>`) and connections explorer; text alternatives for every chart (connections are also listed in words); light and dark themes that meet WCAG AA contrast; and `prefers-reduced-motion` is respected.

## Licensing of content

Event text is written for Historycheck. Biographies and place descriptions quoted from Wikipedia are CC BY-SA 4.0 and attributed on each page. Every image carries its own Commons licence and attribution. Map outlines are Natural Earth (public domain).
