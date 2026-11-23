import Link from "next/link";
import { ArchiveImage } from "@/components/archive-image";
import { EventCard, EventCardFeature, EventRow } from "@/components/event-card";
import { OnThisDay } from "@/components/on-this-day";
import { PeriodStrip } from "@/components/period-strip";
import { RelationLegend } from "@/components/relation-legend";
import { SearchBox } from "@/components/search-box";
import { SectionHeading } from "@/components/section-heading";
import { RecentlyViewed } from "@/components/stored-events";
import { ThreadChain } from "@/components/thread-chain";
import { formatYear } from "@/lib/dates";
import {
  getCausalChain,
  getCivilizations,
  getDiscoveries,
  getEventsByCategory,
  getFeatured,
  getNotablePeople,
  getPeriodsWithCounts,
  getStats,
} from "@/lib/queries";


const EXAMPLES = ["Julius Caesar", "1989", "Cold War", "Ancient Egypt", "Moon landing", "Industrial Revolution", "Mali Empire"];

export default async function HomePage() {
  const [stats, featured, chain, periods, civs, people, discoveries, conflicts, science, politics] = await Promise.all([
    getStats(),
    getFeatured(),
    getCausalChain("world-war-i", 6, "cold-war"),
    getPeriodsWithCounts(),
    getCivilizations(),
    getNotablePeople(10),
    getDiscoveries(6),
    getEventsByCategory("conflict", 3),
    getEventsByCategory("science", 3),
    getEventsByCategory("politics", 3),
  ]);

  const [lead, ...rest] = featured;

  return (
    <>
      {/* Hero ----------------------------------------------------------- */}
      <section className="border-b border-line bg-surface">
        <div className="container-page grid grid-cols-1 gap-12 py-12 md:py-16 lg:grid-cols-[1.25fr_1fr] lg:gap-16 lg:py-20">
          <div className="flex flex-col justify-center">
            <h1 className="max-w-[16ch] text-[2.5rem] leading-[1.06] sm:text-3xl">Every event has a before and an after.</h1>
            <p className="mt-5 max-w-xl text-lg text-ink-2">
              Search {stats.events} historical events, {stats.people} people and {stats.places} places. Each record shows what caused it,
              what it led to and what was happening elsewhere in the world at the same time, with dates checked against Wikidata and
              images from public archives.
            </p>
            <div className="mt-8 max-w-xl">
              <SearchBox size="lg" />
            </div>
            <div className="mt-4 flex max-w-xl flex-wrap items-baseline gap-x-1 gap-y-2 text-sm">
              <span className="mr-1 text-muted">Try</span>
              {EXAMPLES.map((q, i) => (
                <span key={q}>
                  <Link href={`/search?q=${encodeURIComponent(q)}`} className="link text-ink">
                    {q}
                  </Link>
                  {i < EXAMPLES.length - 1 ? <span className="text-muted">,</span> : null}
                </span>
              ))}
            </div>
          </div>

          <div className="rounded-sm border border-line bg-paper p-5 sm:p-6">
            <h2 className="font-sans text-base font-semibold">One thread through the record</h2>
            <p className="mt-1 text-sm text-ink-2">
              Start at the First World War and follow its documented consequences, one causal link at a time.
            </p>
            <div className="mt-5">
              <ThreadChain events={chain.events} types={chain.types} />
            </div>
            <Link href="/connections/world-war-i" className="link mt-5 inline-block text-sm font-medium">
              Explore every connection from 1914
            </Link>
          </div>
        </div>
      </section>

      {/* Featured ------------------------------------------------------- */}
      <section aria-labelledby="featured-h" className="container-page mt-16">
        <SectionHeading
          id="featured-h"
          title="Featured in the record"
          deck="Turning points with full context, timelines, the people involved and authentic imagery."
          href="/search?sort=oldest"
          hrefLabel="Browse all events"
        />
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {lead ? (
            <div className="md:col-span-2 lg:row-span-2">
              <EventCardFeature event={lead} priority sizes="(min-width: 1024px) 50vw, 100vw" />
            </div>
          ) : null}
          {rest.slice(0, 4).map((e) => (
            <EventCard key={e.slug} event={e} />
          ))}
        </div>
        {rest.length > 4 ? (
          <div className="mt-5 grid gap-3 md:grid-cols-2">
            {rest.slice(4, 8).map((e) => (
              <EventRow key={e.slug} event={e} />
            ))}
          </div>
        ) : null}
      </section>

      <OnThisDay />

      {/* Periods -------------------------------------------------------- */}
      <section aria-labelledby="periods-h" className="container-page mt-20">
        <SectionHeading
          id="periods-h"
          title="Five thousand years, in nine periods"
          deck="From the first writing in Mesopotamia to the twenty-first century. Each band is sized by how many events the record holds for it."
          href="/periods"
          hrefLabel="All periods"
        />
        <PeriodStrip periods={periods} />
      </section>

      {/* Civilizations --------------------------------------------------- */}
      <section aria-labelledby="civ-h" className="container-page mt-20">
        <SectionHeading id="civ-h" title="Civilizations" deck="States and cultures that shaped their regions for centuries." href="/explore#civilizations" hrefLabel="All civilizations" />
        <ul className="-mx-4 flex snap-x gap-4 overflow-x-auto px-4 pb-3 md:mx-0 md:grid md:grid-cols-3 md:overflow-visible md:px-0 lg:grid-cols-6">
          {civs.slice(0, 12).map((c) => (
            <li key={c.slug} className="w-44 shrink-0 snap-start md:w-auto">
              <Link href={`/civilization/${c.slug}`} className="group block">
                <span className="img-zoom block aspect-[4/5] overflow-hidden rounded-xs bg-sunken">
                  {c.thumb ? (
                    <ArchiveImage image={{ thumbUrl: c.thumb, smallUrl: c.thumb, thumbWidth: c.w ?? 500, thumbHeight: c.h ?? 600, caption: c.caption ?? c.name, transparent: c.transparent }} alt="" sizes="200px" />
                  ) : (
                    <span className="flex h-full items-end p-3 text-xs text-muted" aria-hidden="true">No image on record</span>
                  )}
                </span>
                <span className="mt-2 block font-serif text-lg leading-tight group-hover:underline group-hover:decoration-thread group-hover:underline-offset-4">{c.name}</span>
                <span className="block text-xs text-muted tabular">{c.dateLabel}</span>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      {/* People ---------------------------------------------------------- */}
      <section aria-labelledby="people-h" className="container-page mt-20">
        <SectionHeading id="people-h" title="People who appear most often" deck="Ranked by the number of events they are linked to in the record." href="/explore#people" hrefLabel="More people" />
        <ul className="grid grid-cols-2 gap-x-5 gap-y-6 sm:grid-cols-3 lg:grid-cols-5">
          {people.map((p) => (
            <li key={p.slug}>
              <Link href={`/person/${p.slug}`} className="group flex items-center gap-3">
                <span className="h-16 w-16 shrink-0 overflow-hidden rounded-full bg-sunken">
                  {p.thumb ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img src={p.thumb} alt="" className="h-full w-full object-cover object-top" loading="lazy" />
                  ) : null}
                </span>
                <span className="min-w-0">
                  <span className="block font-medium leading-snug group-hover:underline">{p.name}</span>
                  <span className="block text-xs text-muted tabular">
                    {p.birthYear != null ? formatYear(p.birthYear) : "?"}
                    {p.deathYear != null ? `–${formatYear(p.deathYear, { era: p.birthYear != null && p.birthYear < 0 ? "always" : "auto" })}` : ""}
                    {" · "}
                    {p.count} events
                  </span>
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      {/* By theme -------------------------------------------------------- */}
      <section aria-labelledby="themes-h" className="container-page mt-20">
        <SectionHeading id="themes-h" title="Browse by theme" href="/explore" hrefLabel="All themes" />
        <div className="grid gap-10 lg:grid-cols-3">
          {[
            { title: "Wars and conflicts", slug: "conflict", items: conflicts },
            { title: "Scientific discoveries", slug: "science", items: science },
            { title: "Political developments", slug: "politics", items: politics },
          ].map((col) => (
            <div key={col.slug}>
              <h3 className="flex items-baseline justify-between border-b border-ink pb-2 text-xl">
                {col.title}
                <Link href={`/category/${col.slug}`} className="link font-sans text-sm font-medium">
                  More
                </Link>
              </h3>
              <ul className="mt-3 grid gap-3">
                {col.items.map((e) => (
                  <li key={e.slug}>
                    <EventRow event={e} />
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Discoveries ----------------------------------------------------- */}
      <section aria-labelledby="disc-h" className="mt-20 border-y border-line bg-surface py-16">
        <div className="container-page">
          <SectionHeading
            id="disc-h"
            title="Less familiar chapters"
            deck="Events that rarely make the textbook summary: a solar storm that set telegraphs alight, a Ming fleet in East Africa, a Christmas ceasefire in 1914."
          />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {discoveries.map((e) => (
              <EventCard key={e.slug} event={e} sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw" />
            ))}
          </div>
          <p className="mt-6 text-sm">
            <Link href="/random" prefetch={false} className="link font-medium">
              Open a random event
            </Link>
          </p>
        </div>
      </section>

      {/* How the record works -------------------------------------------- */}
      <section aria-labelledby="how-h" className="container-page mt-20">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr]">
          <div>
            <h2 id="how-h" className="text-2xl">How the record is built</h2>
            <div className="mt-4 max-w-prose space-y-4 text-ink-2">
              <p>
                Every event is written by hand and anchored to the matching Wikidata item and encyclopedia article. An automated check
                compares each date with Wikidata. {stats.verified} of {stats.events} published events match exactly; the rest are marked as
                partially verified, with the reason shown on the page.
              </p>
              <p>
                Images are matched to the exact subject, not found by keyword. A portrait comes from the image Wikidata attaches to that person; an
                event&apos;s lead image is the one editors chose for its article. Each image carries its creator, date and licence.
              </p>
              <p>
                {stats.relations} connections link the events together. They are classified by strength, so a sequence of events is never
                presented as cause and effect.
              </p>
            </div>
            <Link href="/about" className="link mt-5 inline-block font-medium">
              Read the full methodology
            </Link>
          </div>
          <div className="rounded-sm border border-line bg-surface p-6">
            <h3 className="font-sans text-base font-semibold">Reading a connection</h3>
            <RelationLegend className="mt-4" />
          </div>
        </div>
      </section>

      <RecentlyViewed />
    </>
  );
}
