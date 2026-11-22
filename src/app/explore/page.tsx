import type { Metadata } from "next";
import Link from "next/link";
import { ArchiveImage } from "@/components/archive-image";
import { PeriodStrip } from "@/components/period-strip";
import { SectionHeading } from "@/components/section-heading";
import { WorldMap } from "@/components/world-map";
import { formatYear } from "@/lib/dates";
import { getCategoriesWithCounts, getCivilizations, getMapPlaces, getNotablePeople, getPeriodsWithCounts, getRegionsWithCounts } from "@/lib/queries";

export const metadata: Metadata = {
  title: "Explore history",
  description: "Browse the historical record by period, theme, region, civilization, people and places.",
  alternates: { canonical: "/explore" },
};

export default async function ExplorePage() {
  const [periods, categories, regions, civs, people, places] = await Promise.all([
    getPeriodsWithCounts(),
    getCategoriesWithCounts(),
    getRegionsWithCounts(),
    getCivilizations(),
    getNotablePeople(30),
    getMapPlaces(),
  ]);
  const points = places.map((p) => ({ slug: p.slug, name: p.name, lat: p.lat!, lng: p.lng!, weight: p.count }));

  return (
    <div className="container-page pt-10">
      <h1 className="text-3xl">Explore history</h1>
      <p className="mt-3 max-w-2xl text-lg text-ink-2">
        No search term needed. Pick a period, a theme, a part of the world or a person, and follow the links from there.
      </p>
      <nav aria-label="Sections on this page" className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-sm">
        {[["#periods", "Periods"], ["#themes", "Themes"], ["#map", "Map"], ["#regions", "Regions"], ["#civilizations", "Civilizations"], ["#people", "People"]].map(([h, l]) => (
          <a key={h} href={h} className="link font-medium">{l}</a>
        ))}
        <Link href="/random" prefetch={false} className="link font-medium">Random event</Link>
      </nav>

      <section className="mt-12 scroll-mt-6" aria-labelledby="periods">
        <SectionHeading id="periods" title="By period" href="/periods" hrefLabel="About the periods" />
        <PeriodStrip periods={periods} />
      </section>

      <section className="mt-16 scroll-mt-6" aria-labelledby="themes">
        <SectionHeading id="themes" title="By theme" />
        <ul className="grid gap-px overflow-hidden rounded-sm border border-line bg-line sm:grid-cols-2 lg:grid-cols-5">
          {categories.map((c) => (
            <li key={c.slug} className="bg-surface">
              <Link href={`/category/${c.slug}`} className="group flex h-full flex-col p-5 hover:bg-sunken">
                <span className="font-serif text-lg leading-tight group-hover:underline group-hover:decoration-thread group-hover:underline-offset-4">{c.name}</span>
                <span className="mt-1.5 text-sm text-ink-2">{c.description}</span>
                <span className="mt-auto pt-3 text-xs text-muted tabular">{c.count} events</span>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-16 scroll-mt-6" aria-labelledby="map">
        <SectionHeading id="map" title="On the map" deck={`${points.length} places where events in the record took place. Larger markers mean more events. Select a marker to open the place.`} />
        <WorldMap points={points} label={`World map of ${points.length} historical places`} />
        <details className="mt-4">
          <summary className="cursor-pointer text-sm font-medium">List all places</summary>
          <ul className="mt-3 columns-2 gap-6 text-sm sm:columns-3 lg:columns-5">
            {[...places].sort((a, b) => a.name.localeCompare(b.name)).map((p) => (
              <li key={p.slug} className="py-0.5"><Link className="link" href={`/place/${p.slug}`}>{p.name}</Link> <span className="text-muted tabular">{p.count}</span></li>
            ))}
          </ul>
        </details>
      </section>

      <section className="mt-16 scroll-mt-6" aria-labelledby="regions">
        <SectionHeading id="regions" title="By region" deck="Each event is assigned the region where it mainly took place; worldwide events are listed under Global." />
        <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
          {regions.map((r) => (
            <li key={r.slug}>
              <Link href={`/region/${r.slug}`} className="card-link group flex items-baseline justify-between gap-2 rounded-sm border border-line bg-surface px-4 py-3">
                <span className="card-title font-medium">{r.name}</span>
                <span className="text-sm text-muted tabular">{r.count}</span>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-16 scroll-mt-6" aria-labelledby="civilizations">
        <SectionHeading id="civilizations" title="Civilizations" />
        <ul className="grid grid-cols-2 gap-x-5 gap-y-8 sm:grid-cols-3 lg:grid-cols-6">
          {civs.map((c) => (
            <li key={c.slug}>
              <Link href={`/civilization/${c.slug}`} className="group block">
                <span className="img-zoom block aspect-[4/5] overflow-hidden rounded-xs bg-sunken">
                  {c.thumb ? <ArchiveImage image={{ thumbUrl: c.thumb, smallUrl: c.thumb, thumbWidth: c.w ?? 500, thumbHeight: c.h ?? 600, caption: c.caption ?? c.name }} alt="" sizes="200px" /> : <span className="flex h-full items-end p-3 text-xs text-muted" aria-hidden="true">No image on record</span>}
                </span>
                <span className="mt-2 block font-serif text-lg leading-tight group-hover:underline group-hover:decoration-thread group-hover:underline-offset-4">{c.name}</span>
                <span className="block text-xs text-muted tabular">{c.dateLabel} · {c.count} events</span>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-16 scroll-mt-6" aria-labelledby="people">
        <SectionHeading id="people" title="Historical figures" deck="The people linked to the most events in the record." />
        <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {people.map((p) => (
            <li key={p.slug}>
              <Link href={`/person/${p.slug}`} className="card-link group flex items-center gap-3 rounded-sm border border-line bg-surface p-2.5">
                <span className="h-14 w-14 shrink-0 overflow-hidden rounded-full bg-sunken">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  {p.thumb ? <img src={p.thumb} alt="" className="h-full w-full object-cover object-top" loading="lazy" /> : null}
                </span>
                <span className="min-w-0">
                  <span className="card-title block font-medium">{p.name}</span>
                  <span className="block truncate text-xs text-muted">
                    {p.birthYear != null ? `${formatYear(p.birthYear)}–${p.deathYear != null ? formatYear(p.deathYear) : ""} · ` : ""}
                    {p.shortDescription}
                  </span>
                </span>
              </Link>
            </li>
          ))}
        </ul>
        <p className="mt-4 text-sm text-ink-2">Looking for someone else? <Link className="link" href="/search?type=people">Search all people</Link>.</p>
      </section>
    </div>
  );
}
