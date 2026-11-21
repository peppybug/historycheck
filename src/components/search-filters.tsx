"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useTransition } from "react";

interface Option {
  slug: string;
  name: string;
  n?: number;
}

/** Filter controls that update the URL (so results are shareable and bookmarkable). */
export function SearchFilters({ periods, categories, regions }: { periods: Option[]; categories: Option[]; regions: Option[] }) {
  const router = useRouter();
  const path = usePathname();
  const params = useSearchParams();
  const [pending, start] = useTransition();

  const set = (key: string, value: string) => {
    const next = new URLSearchParams(params.toString());
    if (value) next.set(key, value);
    else next.delete(key);
    next.delete("page");
    start(() => router.push(`${path}?${next.toString()}`, { scroll: false }));
  };

  const select = (key: string, label: string, opts: Option[]) => (
    <div>
      <label htmlFor={`f-${key}`} className="text-xs font-semibold text-ink">
        {label}
      </label>
      <select
        id={`f-${key}`}
        value={params.get(key) ?? ""}
        onChange={(e) => set(key, e.target.value)}
        className="mt-1 w-full rounded-sm border border-line-strong bg-surface px-2.5 py-2 text-base text-ink"
      >
        <option value="">Any</option>
        {opts.map((o) => (
          <option key={o.slug} value={o.slug}>
            {o.name}
            {o.n !== undefined ? ` (${o.n})` : ""}
          </option>
        ))}
      </select>
    </div>
  );

  const hasFilters = ["period", "category", "region", "from", "to", "type"].some((k) => params.get(k));

  return (
    <div className="grid gap-4" aria-busy={pending}>
      <div>
        <span className="text-xs font-semibold text-ink" id="f-type-label">Show</span>
        <div role="radiogroup" aria-labelledby="f-type-label" className="mt-1 grid grid-cols-2 gap-1 rounded-sm border border-line-strong bg-surface p-1 text-sm">
          {[
            ["all", "Everything"],
            ["events", "Events"],
            ["people", "People"],
            ["places", "Places"],
          ].map(([v, l]) => {
            const on = (params.get("type") ?? "all") === v;
            return (
              <button
                key={v}
                type="button"
                role="radio"
                aria-checked={on}
                onClick={() => set("type", v === "all" ? "" : v)}
                className={`rounded-xs px-2 py-1.5 ${on ? "bg-ink text-paper" : "text-ink-2 hover:bg-sunken"}`}
              >
                {l}
              </button>
            );
          })}
        </div>
      </div>
      {select("period", "Historical period", periods)}
      {select("category", "Category", categories)}
      {select("region", "Region", regions)}
      <fieldset>
        <legend className="text-xs font-semibold text-ink">Date range</legend>
        <p className="text-xs text-muted">Use negative numbers for BCE.</p>
        <form
          className="mt-1 grid grid-cols-[1fr_1fr_auto] gap-2"
          onSubmit={(e) => {
            e.preventDefault();
            const f = new FormData(e.currentTarget);
            const next = new URLSearchParams(params.toString());
            for (const k of ["from", "to"]) {
              const v = String(f.get(k) ?? "").trim();
              if (v && /^-?\d{1,4}$/.test(v)) next.set(k, v);
              else next.delete(k);
            }
            next.delete("page");
            start(() => router.push(`${path}?${next.toString()}`, { scroll: false }));
          }}
        >
          <label className="sr-only" htmlFor="f-from">From year</label>
          <input id="f-from" name="from" inputMode="numeric" placeholder="From" defaultValue={params.get("from") ?? ""} className="w-full rounded-sm border border-line-strong bg-surface px-2.5 py-2 text-base" />
          <label className="sr-only" htmlFor="f-to">To year</label>
          <input id="f-to" name="to" inputMode="numeric" placeholder="To" defaultValue={params.get("to") ?? ""} className="w-full rounded-sm border border-line-strong bg-surface px-2.5 py-2 text-base" />
          <button type="submit" className="rounded-sm border border-line-strong px-3 text-sm font-medium hover:border-ink">Apply</button>
        </form>
      </fieldset>
      {hasFilters ? (
        <button
          type="button"
          onClick={() => start(() => router.push(`${path}?${params.get("q") ? `q=${encodeURIComponent(params.get("q")!)}` : ""}`))}
          className="link justify-self-start text-sm"
        >
          Clear all filters
        </button>
      ) : null}
    </div>
  );
}

export function SortSelect() {
  const router = useRouter();
  const path = usePathname();
  const params = useSearchParams();
  return (
    <div className="flex items-center gap-2">
      <label htmlFor="sort" className="text-sm text-muted">Sort</label>
      <select
        id="sort"
        value={params.get("sort") ?? "relevance"}
        onChange={(e) => {
          const next = new URLSearchParams(params.toString());
          if (e.target.value === "relevance") next.delete("sort");
          else next.set("sort", e.target.value);
          next.delete("page");
          router.push(`${path}?${next.toString()}`, { scroll: false });
        }}
        className="rounded-sm border border-line-strong bg-surface px-2 py-1.5 text-sm"
      >
        <option value="relevance">Relevance</option>
        <option value="oldest">Oldest first</option>
        <option value="newest">Newest first</option>
      </select>
    </div>
  );
}
