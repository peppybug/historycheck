"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import { highlightParts, loadEngine, PAGE_SIZE, runSearch, type Engine, type Params } from "@/lib/client-search";
import { formatRange, formatYear } from "@/lib/dates";
import { SearchBox } from "./search-box";
import { SearchFilters, SortSelect } from "./search-filters";

const SUGGESTED = ["Roman Empire", "Napoleon", "1914", "Black Death", "Gandhi", "15th century", "Berlin", "Apollo 11"];
const TAX_HREF = { period: "/period/", civilization: "/civilization/", category: "/category/" } as const;

function Marked({ text, terms }: { text: string; terms: string[] }) {
  return (
    <>
      {highlightParts(text, terms).map((p, i) => (p.mark ? <mark key={i}>{p.text}</mark> : <span key={i}>{p.text}</span>))}
    </>
  );
}

function readParams(sp: URLSearchParams): Params {
  const num = (k: string) => {
    const v = sp.get(k);
    return v && /^-?\d{1,4}$/.test(v) ? Number(v) : undefined;
  };
  const type = sp.get("type");
  const sort = sp.get("sort");
  const page = Number(sp.get("page"));
  return {
    q: (sp.get("q") ?? "").slice(0, 120),
    type: type === "events" || type === "people" || type === "places" ? type : "all",
    period: sp.get("period") || undefined,
    category: sp.get("category") || undefined,
    region: sp.get("region") || undefined,
    from: num("from"),
    to: num("to"),
    sort: sort === "oldest" || sort === "newest" ? sort : "relevance",
    page: Number.isInteger(page) && page > 0 && page <= 50 ? page : 1,
  };
}

export function SearchView() {
  const sp = useSearchParams();
  const p = useMemo(() => readParams(new URLSearchParams(sp.toString())), [sp]);
  const [engine, setEngine] = useState<Engine | null>(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    loadEngine().then(setEngine).catch(() => setError(true));
  }, []);

  useEffect(() => {
    document.title = p.q ? `“${p.q}” in the record · Historycheck` : "Search the record · Historycheck";
  }, [p.q, engine]);

  const res = useMemo(() => (engine ? runSearch(engine, p) : null), [engine, p]);
  const anyFilter = !!(p.period || p.category || p.region || p.from !== undefined || p.to !== undefined);
  const totalPages = res ? Math.ceil(res.total / PAGE_SIZE) : 0;
  const pageHref = (n: number) => {
    const next = new URLSearchParams(sp.toString());
    next.set("page", String(n));
    return `/search?${next.toString()}`;
  };
  const nothing = res && !res.events.length && !res.people.length && !res.places.length && !res.beliefs.length;

  return (
    <div className="container-page pt-8">
      <h1 className="sr-only">Search</h1>
      <div className="max-w-3xl">
        <SearchBox defaultValue={p.q} size="lg" autoFocus={!p.q} />
      </div>

      <div className="mt-8 grid gap-10 lg:grid-cols-[250px_1fr]">
        <aside aria-label="Filters" className="lg:sticky lg:top-6 lg:self-start">
          <details open>
            <summary className="mb-4 cursor-pointer list-none text-sm font-semibold lg:hidden">Filters {anyFilter ? "(active)" : ""}</summary>
            {engine && res ? (
              <SearchFilters
                periods={engine.index.periods.map((x) => ({ slug: x.slug, name: x.name, n: res.facets.period.get(x.slug) ?? 0 }))}
                categories={engine.index.categories.map((x) => ({ slug: x.slug, name: x.name, n: res.facets.category.get(x.slug) ?? 0 }))}
                regions={engine.index.regions.map((x) => ({ slug: x.slug, name: x.name, n: res.facets.region.get(x.slug) ?? 0 }))}
              />
            ) : null}
          </details>
        </aside>

        <div className="min-w-0" aria-busy={!res && !error}>
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-line pb-3">
            <p className="text-sm text-ink-2" role="status">
              {error ? (
                "Search could not load. Check your connection and reload the page."
              ) : !res ? (
                "Loading the record…"
              ) : p.q ? (
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
            <SortSelect />
          </div>

          {res?.taxonomy.length ? (
            <div className="mt-5 flex flex-wrap gap-2 text-sm">
              <span className="py-1.5 text-muted">Go to</span>
              {res.taxonomy.map((t) => (
                <Link key={t.kind + t.slug} href={TAX_HREF[t.kind] + t.slug} className="rounded-sm border border-line-strong bg-surface px-3 py-1.5 font-medium hover:border-ink">
                  {t.name} <span className="font-normal text-muted">· {t.kind}</span>
                </Link>
              ))}
            </div>
          ) : null}

          {res && (res.people.length || res.places.length || res.beliefs.length) ? (
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
                            <span className="card-title block font-medium"><Marked text={x.name} terms={x.terms} /></span>
                            <span className="block truncate text-xs text-muted">
                              {x.by != null ? `${formatYear(x.by)}${x.dy != null ? `–${formatYear(x.dy)}` : ""} · ` : ""}
                              {x.desc}
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
                            <span className="card-title block font-medium"><Marked text={x.name} terms={x.terms} /></span>
                            <span className="block truncate text-xs text-muted">{[x.country, x.sig].filter(Boolean).join(" · ")}</span>
                            <span className="block text-xs text-ink-2">{x.events} event{x.events === 1 ? "" : "s"} here</span>
                          </span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </section>
              ) : null}
              {res.beliefs.length ? (
                <section aria-labelledby="r-beliefs">
                  <h2 id="r-beliefs" className="font-sans text-sm font-semibold">Beliefs and mythology</h2>
                  <ul className="mt-2 grid gap-2">
                    {res.beliefs.map((x) => (
                      <li key={x.kind + x.slug}>
                        <Link href={`/${x.kind}/${x.slug}`} className="card-link group flex items-center gap-3 rounded-sm border border-line bg-surface p-2.5">
                          <span className="h-14 w-14 shrink-0 overflow-hidden rounded-xs bg-sunken">
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            {x.thumb ? <img src={x.thumb} alt="" className="h-full w-full object-cover object-top" loading="lazy" /> : null}
                          </span>
                          <span className="min-w-0">
                            <span className="card-title block font-medium"><Marked text={x.name} terms={x.terms} /></span>
                            <span className="block truncate text-xs text-muted">{x.detail}</span>
                          </span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </section>
              ) : null}
            </div>
          ) : null}

          {res?.events.length ? (
            <section aria-labelledby="r-events" className="mt-8">
              <h2 id="r-events" className="font-sans text-sm font-semibold">Events</h2>
              <ol className="mt-2 grid gap-3">
                {res.events.map((e) => (
                  <li key={e.slug}>
                    <Link href={`/event/${e.slug}`} className="card-link group flex gap-4 rounded-sm border border-line bg-surface p-3 sm:p-4">
                      <span className="h-20 w-24 shrink-0 overflow-hidden rounded-xs bg-sunken sm:h-28 sm:w-40">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        {e.thumb ? <img src={e.thumb} alt="" width={e.w ?? undefined} height={e.h ?? undefined} className="h-full w-full object-cover" loading="lazy" /> : null}
                      </span>
                      <span className="min-w-0 flex-1">
                        <span className="block text-xs text-muted tabular">
                          {formatRange({ year: e.sy, month: e.sm, day: e.sd, precision: e.precision }, e.ey != null ? { year: e.ey, month: e.em, day: e.ed } : null, { short: true })} · {e.location}
                        </span>
                        <span className="card-title mt-0.5 block font-serif text-xl leading-snug"><Marked text={e.title} terms={e.terms} /></span>
                        <span className="mt-1 line-clamp-3 block text-sm text-ink-2"><Marked text={e.summary} terms={e.terms} /></span>
                        <span className="mt-1.5 block text-xs text-muted">
                          {engine!.periodName.get(e.period)} · {engine!.categoryName.get(e.category)}
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

          {nothing && p.q ? (
            <div className="mt-10 max-w-xl">
              <p className="font-serif text-2xl">Nothing in the record matches “{p.q}”{anyFilter ? " with these filters" : ""}.</p>
              <ul className="mt-4 grid gap-2 text-ink-2">
                {res?.suggestion ? (
                  <li>
                    Did you mean <Link className="link font-medium text-ink" href={`/search?q=${encodeURIComponent(res.suggestion)}`}>{res.suggestion}</Link>?
                  </li>
                ) : null}
                {anyFilter ? <li><Link className="link" href={`/search?q=${encodeURIComponent(p.q)}`}>Search again without filters</Link>.</li> : null}
                <li>Try a broader term (“Rome” rather than “Roman aqueduct engineers”) or a year such as “1066” or “44 BC”.</li>
                <li>The record holds {engine?.index.events.length} events. You can also <Link className="link" href="/timeline">browse them on the timeline</Link>.</li>
              </ul>
            </div>
          ) : null}
          {nothing && !p.q ? <p className="mt-10 text-ink-2">No events match these filters. <Link className="link" href="/search">Clear the filters</Link>.</p> : null}

          {res && !p.q && !anyFilter ? (
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
