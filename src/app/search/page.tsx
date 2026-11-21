import type { Metadata } from "next";
import Link from "next/link";
import { Suspense } from "react";
import { ArchiveImage } from "@/components/archive-image";
import { Highlighted, HighlightTerms } from "@/components/highlight";
import { SearchBox } from "@/components/search-box";
import { SearchFilters, SortSelect } from "@/components/search-filters";
import { formatRange, formatYear } from "@/lib/dates";
import { getCategoriesWithCounts, getPeriodsWithCounts, getRegionsWithCounts } from "@/lib/queries";
import { search, searchParamsSchema } from "@/lib/search";

export const dynamic = "force-dynamic";

type Props = { searchParams: Promise<Record<string, string | string[] | undefined>> };

export async function generateMetadata({ searchParams }: Props): Promise<Metadata> {
  const q = String((await searchParams).q ?? "").slice(0, 80);
  return {
    title: q ? `“${q}” in the record` : "Search the record",
    robots: q ? { index: false, follow: true } : undefined,
    alternates: { canonical: "/search" },
  };
}

const SUGGESTED = ["Roman Empire", "Napoleon", "1914", "Black Death", "Gandhi", "15th century", "Berlin", "Apollo 11"];
const TAX_HREF: Record<string, string> = { period: "/period/", civilization: "/civilization/", category: "/category/" };

export default async function SearchPage({ searchParams }: Props) {
  const raw = await searchParams;
  const flat = Object.fromEntries(Object.entries(raw).map(([k, v]) => [k, Array.isArray(v) ? v[0] : v]));
  const p = searchParamsSchema.parse(flat);
  const [res, periods, categories, regions] = await Promise.all([search(p), getPeriodsWithCounts(), getCategoriesWithCounts(), getRegionsWithCounts()]);

  const facetCount = (kind: string) => new Map(res.facets.filter((f) => f.kind === kind).map((f) => [f.slug, f.n]));
  const pc = facetCount("period");
  const cc = facetCount("category");
  const rc = facetCount("region");
  const anyFilter = p.period || p.category || p.region || p.from !== undefined || p.to !== undefined;
  const totalPages = Math.ceil(res.total / res.pageSize);

  const pageHref = (n: number) => {
    const sp = new URLSearchParams(Object.entries(flat).filter(([, v]) => v) as [string, string][]);
    sp.set("page", String(n));
    return `/search?${sp.toString()}`;
  };

  const nothing = res.events.length === 0 && res.people.length === 0 && res.places.length === 0;

  return (
    <div className="container-page pt-8">
      <h1 className="sr-only">Search</h1>
      <div className="max-w-3xl">
        <SearchBox defaultValue={p.q} size="lg" autoFocus={!p.q} />
      </div>

      <div className="mt-8 grid gap-10 lg:grid-cols-[250px_1fr]">
        <aside aria-label="Filters" className="lg:sticky lg:top-6 lg:self-start">
          <details open>
            <summary className="mb-4 cursor-pointer list-none text-sm font-semibold lg:hidden">
              Filters {anyFilter ? "(active)" : ""}
            </summary>
            <Suspense>
              <SearchFilters
                periods={periods.map((x) => ({ slug: x.slug, name: x.name, n: p.q || anyFilter ? pc.get(x.slug) ?? 0 : x.count }))}
                categories={categories.map((x) => ({ slug: x.slug, name: x.name, n: p.q || anyFilter ? cc.get(x.slug) ?? 0 : x.count }))}
                regions={regions.map((x) => ({ slug: x.slug, name: x.name, n: p.q || anyFilter ? rc.get(x.slug) ?? 0 : x.count }))}
              />
            </Suspense>
          </details>
        </aside>

        <div className="min-w-0">
          {/* Status line */}
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-line pb-3">
            <p className="text-sm text-ink-2" role="status">
              {p.q ? (
                <>
                  <strong className="font-semibold text-ink tabular">{res.total}</strong> event{res.total === 1 ? "" : "s"} for “{p.q}”
                  {res.approximate ? <> · no exact matches, so these are <strong className="font-semibold text-ink">close spellings</strong></> : null}
                  {res.year ? <> · read as the year range <strong className="font-semibold text-ink">{res.year.label}</strong></> : null}
                </>
              ) : (
                <>
                  Browsing <strong className="font-semibold text-ink tabular">{res.total}</strong> events{anyFilter ? " matching your filters" : ""}
                </>
              )}
            </p>
            <Suspense>
              <SortSelect />
            </Suspense>
          </div>

          {/* Taxonomy matches */}
          {res.taxonomy.length ? (
            <div className="mt-5 flex flex-wrap gap-2 text-sm">
              <span className="py-1.5 text-muted">Go to</span>
              {res.taxonomy.map((t) => (
                <Link key={t.kind + t.slug} href={TAX_HREF[t.kind] + t.slug} className="rounded-sm border border-line-strong bg-surface px-3 py-1.5 font-medium hover:border-ink">
                  {t.name} <span className="font-normal text-muted">· {t.kind}</span>
                </Link>
              ))}
            </div>
          ) : null}

          {/* People & places */}
          {res.people.length || res.places.length ? (
            <div className="mt-6 grid gap-6 xl:grid-cols-2">
              {res.people.length ? (
                <section aria-labelledby="r-people">
                  <h2 id="r-people" className="font-sans text-sm font-semibold">People</h2>
                  <ul className="mt-2 grid gap-2">
                    {res.people.map((x) => (
                      <li key={x.slug}>
                        <Link href={`/person/${x.slug}`} className="card-link group flex items-center gap-3 rounded-sm border border-line bg-surface p-2.5">
                          <span className="h-14 w-14 shrink-0 overflow-hidden rounded-full bg-sunken">
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            {x.thumb ? <img src={x.thumb} alt="" className="h-full w-full object-cover object-top" loading="lazy" /> : null}
                          </span>
                          <span className="min-w-0">
                            <span className="card-title block font-medium"><HighlightTerms text={x.name} query={p.q} /></span>
                            <span className="block truncate text-xs text-muted">
                              {x.birth_year != null ? `${formatYear(x.birth_year)}${x.death_year != null ? `–${formatYear(x.death_year)}` : ""} · ` : ""}
                              {x.short_description}
                            </span>
                            <span className="block text-xs text-ink-2">Appears in {x.events} event{x.events === 1 ? "" : "s"}</span>
                          </span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </section>
              ) : null}
              {res.places.length ? (
                <section aria-labelledby="r-places">
                  <h2 id="r-places" className="font-sans text-sm font-semibold">Places</h2>
                  <ul className="mt-2 grid gap-2">
                    {res.places.map((x) => (
                      <li key={x.slug}>
                        <Link href={`/place/${x.slug}`} className="card-link group flex items-center gap-3 rounded-sm border border-line bg-surface p-2.5">
                          <span className="h-14 w-14 shrink-0 overflow-hidden rounded-xs bg-sunken">
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            {x.thumb ? <img src={x.thumb} alt="" className="h-full w-full object-cover" loading="lazy" /> : null}
                          </span>
                          <span className="min-w-0">
                            <span className="card-title block font-medium"><HighlightTerms text={x.name} query={p.q} /></span>
                            <span className="block truncate text-xs text-muted">{[x.modern_country, x.significance].filter(Boolean).join(" · ")}</span>
                            <span className="block text-xs text-ink-2">{x.events} event{x.events === 1 ? "" : "s"} here</span>
                          </span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </section>
              ) : null}
            </div>
          ) : null}

          {/* Events */}
          {res.events.length ? (
            <section aria-labelledby="r-events" className="mt-8">
              <h2 id="r-events" className="font-sans text-sm font-semibold">Events</h2>
              <ol className="mt-2 grid gap-3">
                {res.events.map((e) => (
                  <li key={e.slug}>
                    <Link href={`/event/${e.slug}`} className="card-link group flex gap-4 rounded-sm border border-line bg-surface p-3 sm:p-4">
                      <span className="h-20 w-24 shrink-0 overflow-hidden rounded-xs bg-sunken sm:h-28 sm:w-40">
                        {e.thumb ? (
                          <ArchiveImage image={{ thumbUrl: e.thumb, smallUrl: e.thumb, thumbWidth: e.thumbW ?? 500, thumbHeight: e.thumbH ?? 375, caption: "" }} alt="" sizes="160px" />
                        ) : null}
                      </span>
                      <span className="min-w-0 flex-1">
                        <span className="block text-xs text-muted tabular">
                          {formatRange(
                            { year: e.startYear, month: e.startMonth, day: e.startDay, precision: e.datePrecision },
                            e.endYear != null ? { year: e.endYear, month: e.endMonth, day: e.endDay } : null,
                            { short: true },
                          )}{" "}
                          · {e.locationLabel}
                        </span>
                        <span className="card-title mt-0.5 block font-serif text-xl leading-snug">
                          <HighlightTerms text={e.title} query={p.q} />
                        </span>
                        <span className="mt-1 line-clamp-3 block text-sm text-ink-2">
                          <Highlighted text={e.summaryHtml} />
                        </span>
                        <span className="mt-1.5 block text-xs text-muted">
                          {e.period} · {e.category}
                          {e.why ? <> · involves <span className="font-medium text-ink-2">{e.why}</span></> : null}
                        </span>
                      </span>
                    </Link>
                  </li>
                ))}
              </ol>
              {totalPages > 1 ? (
                <nav aria-label="Pagination" className="mt-8 flex items-center justify-between gap-3 text-sm">
                  {p.page > 1 ? <Link className="link font-medium" href={pageHref(p.page - 1)}>Previous page</Link> : <span />}
                  <span className="text-muted tabular">Page {p.page} of {totalPages}</span>
                  {p.page < totalPages ? <Link className="link font-medium" href={pageHref(p.page + 1)}>Next page</Link> : <span />}
                </nav>
              ) : null}
            </section>
          ) : null}

          {/* Empty states */}
          {nothing && p.q ? (
            <div className="mt-10 max-w-xl">
              <p className="font-serif text-2xl">Nothing in the record matches “{p.q}”{anyFilter ? " with these filters" : ""}.</p>
              <ul className="mt-4 grid gap-2 text-ink-2">
                {res.suggestion ? (
                  <li>
                    Did you mean{" "}
                    <Link className="link font-medium text-ink" href={`/search?q=${encodeURIComponent(res.suggestion)}`}>{res.suggestion}</Link>?
                  </li>
                ) : null}
                {anyFilter ? <li><Link className="link" href={`/search?q=${encodeURIComponent(p.q)}`}>Search again without filters</Link>.</li> : null}
                <li>Try a broader term (“Rome” rather than “Roman aqueduct engineers”) or a year such as “1066” or “44 BC”.</li>
                <li>The record holds {periods.reduce((a, x) => a + x.count, 0)} events. You can also <Link className="link" href="/timeline">browse them on the timeline</Link>.</li>
              </ul>
            </div>
          ) : null}
          {nothing && !p.q ? (
            <p className="mt-10 text-ink-2">No events match these filters. <Link className="link" href="/search">Clear the filters</Link>.</p>
          ) : null}

          {!p.q && !anyFilter ? (
            <div className="mt-8 rounded-sm border border-line bg-surface p-5">
              <h2 className="font-sans text-sm font-semibold">Things to search for</h2>
              <p className="mt-1 text-sm text-ink-2">Events, people, places, civilizations, periods, years (“1989”, “44 BC”, “1960s”, “15th century”) and alternative names.</p>
              <ul className="mt-3 flex flex-wrap gap-2 text-sm">
                {SUGGESTED.map((s) => (
                  <li key={s}>
                    <Link href={`/search?q=${encodeURIComponent(s)}`} className="block rounded-sm border border-line-strong px-3 py-1.5 hover:border-ink">{s}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}
