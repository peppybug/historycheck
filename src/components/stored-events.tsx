"use client";

import Link from "next/link";
import { useStoredEvents } from "@/lib/local-store";

export function RecentlyViewed() {
  const { items, clear } = useStoredEvents("recent");
  if (!items || items.length === 0) return null;
  return (
    <section aria-labelledby="recent-h" className="container-page mt-20">
      <div className="mb-4 flex items-end justify-between gap-4">
        <h2 id="recent-h" className="text-xl">Recently viewed</h2>
        <button type="button" onClick={clear} className="link text-sm text-ink-2">
          Clear history
        </button>
      </div>
      <ul className="flex gap-3 overflow-x-auto pb-2">
        {items.map((e) => (
          <li key={e.slug} className="w-56 shrink-0">
            <Link href={`/event/${e.slug}`} className="card-link group flex items-center gap-3 rounded-sm border border-line bg-surface p-2">
              <span className="h-12 w-12 shrink-0 overflow-hidden rounded-xs bg-sunken">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                {e.thumb ? <img src={e.thumb} alt="" className="h-full w-full object-cover" loading="lazy" /> : null}
              </span>
              <span className="min-w-0">
                <span className="block text-xs text-muted tabular">{e.year}</span>
                <span className="card-title line-clamp-2 text-sm font-medium leading-snug">{e.title}</span>
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}

export function SavedList() {
  const { items, remove } = useStoredEvents("saved");
  if (items === null) return <p className="text-muted" aria-busy="true">Loading your saved events…</p>;
  if (!items.length)
    return (
      <div className="rounded-sm border border-dashed border-line-strong p-8">
        <p className="font-serif text-xl">Nothing saved yet</p>
        <p className="mt-2 max-w-prose text-ink-2">
          Use the Save button on any event page to keep it here. Saved events stay in this browser only; no account is needed and nothing
          is sent to a server.
        </p>
        <Link href="/explore" className="link mt-4 inline-block font-medium">
          Explore the record
        </Link>
      </div>
    );
  return (
    <ul className="grid gap-3 sm:grid-cols-2">
      {items.map((e) => (
        <li key={e.slug} className="flex items-center gap-3 rounded-sm border border-line bg-surface p-3">
          <span className="h-16 w-16 shrink-0 overflow-hidden rounded-xs bg-sunken">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            {e.thumb ? <img src={e.thumb} alt="" className="h-full w-full object-cover" loading="lazy" /> : null}
          </span>
          <Link href={`/event/${e.slug}`} className="min-w-0 flex-1">
            <span className="block text-xs text-muted tabular">{e.year}</span>
            <span className="block font-serif text-lg leading-snug hover:underline">{e.title}</span>
          </Link>
          <button type="button" onClick={() => remove(e.slug)} className="shrink-0 rounded-sm px-2 py-2 text-sm text-ink-2 hover:bg-sunken hover:text-ink">
            Remove<span className="sr-only"> {e.title}</span>
          </button>
        </li>
      ))}
    </ul>
  );
}
