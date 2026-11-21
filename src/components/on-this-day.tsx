"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import type { EventCardData } from "@/lib/queries";
import { formatYear, monthName } from "@/lib/dates";
import { EventCardFeature, EventRow } from "./event-card";

interface Data {
  exact: EventCardData[];
  milestones: { label: string; description: string | null; year: number; slug: string; title: string }[];
  people: { slug: string; name: string; year: number | null; kind: string }[];
  nearby: EventCardData[];
  daily: EventCardData | null;
}

/** Uses the visitor's own calendar date, so it is fetched in the browser. */
export function OnThisDay() {
  const [date, setDate] = useState<{ m: number; d: number } | null>(null);
  const [data, setData] = useState<Data | null>(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    const now = new Date();
    const m = now.getMonth() + 1;
    const d = now.getDate();
    setDate({ m, d });
    fetch(`/api/on-this-day?m=${m}&d=${d}`)
      .then((r) => (r.ok ? r.json() : Promise.reject(r.status)))
      .then(setData)
      .catch(() => setError(true));
  }, []);

  const heading = date ? `On this day: ${date.d} ${monthName(date.m)}` : "On this day";

  return (
    <section aria-labelledby="otd-h" className="container-page mt-20" aria-busy={!data && !error}>
      <div className="grid gap-10 lg:grid-cols-[1fr_1.15fr]">
        <div>
          <h2 id="otd-h" className="text-2xl">{heading}</h2>
          <p className="mt-2 text-ink-2">What happened on today&apos;s date, in your time zone, across the whole record.</p>

          {error ? (
            <p className="mt-6 text-ink-2">This section could not load. <Link className="link" href="/timeline">Browse the timeline</Link> instead.</p>
          ) : !data ? (
            <ul className="mt-6 grid gap-3" aria-hidden="true">
              {[0, 1, 2].map((i) => (
                <li key={i} className="flex gap-4 rounded-sm border border-line bg-surface p-3">
                  <span className="h-20 w-24 rounded-xs bg-sunken" />
                  <span className="flex-1 space-y-2 py-1">
                    <span className="block h-3 w-24 rounded-xs bg-sunken" />
                    <span className="block h-4 w-3/4 rounded-xs bg-sunken" />
                    <span className="block h-3 w-1/2 rounded-xs bg-sunken" />
                  </span>
                </li>
              ))}
            </ul>
          ) : (
            <div className="mt-6 grid gap-6">
              {data.exact.length > 0 ? (
                <ul className="grid gap-3">
                  {data.exact.map((e) => (
                    <li key={e.slug}><EventRow event={e} /></li>
                  ))}
                </ul>
              ) : null}

              {data.milestones.length > 0 ? (
                <div>
                  <h3 className="font-sans text-sm font-semibold">Moments within larger events</h3>
                  <ul className="mt-2 divide-y divide-line border-y border-line">
                    {data.milestones.slice(0, 6).map((m, i) => (
                      <li key={i} className="flex gap-4 py-2.5">
                        <span className="w-20 shrink-0 text-sm text-muted tabular">{formatYear(m.year)}</span>
                        <span className="text-sm">
                          <span className="font-medium">{m.label}</span>{" "}
                          <span className="text-ink-2">
                            during <Link className="link" href={`/event/${m.slug}`}>{m.title}</Link>
                          </span>
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null}

              {data.people.length > 0 ? (
                <div>
                  <h3 className="font-sans text-sm font-semibold">Born and died on this date</h3>
                  <ul className="mt-2 divide-y divide-line border-y border-line">
                    {data.people.slice(0, 6).map((p) => (
                      <li key={p.slug + p.kind} className="flex gap-4 py-2.5 text-sm">
                        <span className="w-20 shrink-0 text-muted tabular">{p.year != null ? formatYear(p.year) : ""}</span>
                        <span>
                          <Link className="link font-medium" href={`/person/${p.slug}`}>{p.name}</Link>{" "}
                          <span className="text-ink-2">{p.kind}</span>
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null}

              {data.exact.length === 0 && data.nearby.length > 0 ? (
                <div>
                  <p className="text-sm text-ink-2">
                    No event in the record began on exactly this date. These are the closest dated events in the calendar year:
                  </p>
                  <ul className="mt-3 grid gap-3">
                    {data.nearby.slice(0, 3).map((e) => (
                      <li key={e.slug}><EventRow event={e} /></li>
                    ))}
                  </ul>
                </div>
              ) : null}
            </div>
          )}
        </div>

        <div>
          <h3 className="mb-3 font-sans text-sm font-semibold text-ink">Event of the day</h3>
          {data?.daily ? (
            <EventCardFeature event={data.daily} sizes="(min-width: 1024px) 45vw, 100vw" />
          ) : (
            <div className="aspect-[3/2] rounded-sm border border-line bg-sunken" aria-hidden="true" />
          )}
          <p className="mt-3 text-xs text-muted">A different record is chosen every day.</p>
        </div>
      </div>
    </section>
  );
}
