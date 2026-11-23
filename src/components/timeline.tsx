"use client";

import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useCallback, useEffect, useLayoutEffect, useMemo, useRef, useState } from "react";
import { centuryLabel, formatRange, formatYear, yearLabel } from "@/lib/dates";
import type { TimelineEvent } from "@/lib/queries";

/* ------------------------------------------------------------------ */
/* Scale                                                               */
/* ------------------------------------------------------------------ */

const MIN_YEAR = -3400;
const MAX_YEAR = 2030;
const SPAN = MAX_YEAR - MIN_YEAR;
const LABEL_COL = 168;
const ROW_H = 30;
const LANE_PAD = 10;

const LEVELS = [
  { id: "all", label: "All history", ppy: 0 }, // fit to width
  { id: "millennia", label: "Millennia", ppy: 0.9 },
  { id: "centuries", label: "Centuries", ppy: 6 },
  { id: "decades", label: "Decades", ppy: 40 },
  { id: "years", label: "Years", ppy: 260 },
] as const;

function tickStep(ppy: number) {
  const steps = [1, 2, 5, 10, 25, 50, 100, 250, 500, 1000];
  return steps.find((s) => s * ppy >= 90) ?? 1000;
}

const yearOfKey = (k: number) => Math.floor(k);

/* ------------------------------------------------------------------ */

export function Timeline({ events, regions, categories }: { events: TimelineEvent[]; regions: { slug: string; name: string }[]; categories: { slug: string; name: string }[] }) {
  const router = useRouter();
  const params = useSearchParams();
  const scroller = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(1000);
  const [ppy, setPpy] = useState(6);
  const [view, setView] = useState<"chart" | "list">("chart");
  const [cursor, setCursor] = useState<number | null>(null);
  // Tooltip position in viewport coordinates, computed in the event handler (never during render).
  const [hover, setHover] = useState<{ e: TimelineEvent; left: number; top: number } | null>(null);
  const tipAt = (e: TimelineEvent, x: number, y: number) => setHover({ e, left: Math.min(x + 14, window.innerWidth - 300), top: y + 14 });
  const [scrollLeft, setScrollLeft] = useState(0);
  const pendingCenter = useRef<number | null>(null);

  const activeRegions = useMemo(() => new Set((params.get("regions") ?? "").split(",").filter(Boolean)), [params]);
  const category = params.get("category") ?? "";

  const setParam = (k: string, v: string) => {
    const next = new URLSearchParams(params.toString());
    if (v) next.set(k, v);
    else next.delete(k);
    router.replace(`/timeline?${next.toString()}`, { scroll: false });
  };

  const filtered = useMemo(
    () => events.filter((e) => (activeRegions.size === 0 || activeRegions.has(e.region)) && (!category || e.category === category)),
    [events, activeRegions, category],
  );

  // Phones get the list by default; the chart is still available.
  useEffect(() => {
    // Screen size is only known after hydration.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    if (window.matchMedia("(max-width: 767px)").matches) setView("list");
  }, []);

  useLayoutEffect(() => {
    const el = scroller.current;
    if (!el) return;
    const ro = new ResizeObserver(() => setWidth(el.clientWidth));
    ro.observe(el);
    setWidth(el.clientWidth);
    return () => ro.disconnect();
  }, [view]);

  const fitPpy = Math.max(0.05, (width - LABEL_COL - 24) / SPAN);
  const effPpy = Math.max(ppy, fitPpy);
  const x = useCallback((year: number) => LABEL_COL + (year - MIN_YEAR) * effPpy, [effPpy]);
  const totalW = LABEL_COL + SPAN * effPpy + 24;

  const centerYear = () => {
    const el = scroller.current;
    if (!el) return 1500;
    return MIN_YEAR + (el.scrollLeft + (el.clientWidth - LABEL_COL) / 2) / effPpy;
  };
  const zoomTo = (next: number, aroundYear?: number) => {
    pendingCenter.current = aroundYear ?? centerYear();
    setPpy(Math.min(400, Math.max(fitPpy, next)));
  };
  useLayoutEffect(() => {
    const el = scroller.current;
    if (el && pendingCenter.current !== null) {
      el.scrollLeft = (pendingCenter.current - MIN_YEAR) * effPpy - (el.clientWidth - LABEL_COL) / 2;
      pendingCenter.current = null;
      setScrollLeft(el.scrollLeft);
    }
  }, [effPpy]);

  // Initial position: a range from the URL (?from&to), otherwise the last 600 years.
  const didInit = useRef(false);
  useEffect(() => {
    if (didInit.current || view !== "chart" || width < 200) return;
    didInit.current = true;
    // Runs once, after the chart has been measured; zoomTo sets scroll and zoom state.
    /* eslint-disable react-hooks/set-state-in-effect */
    const from = Number(params.get("from"));
    const to = Number(params.get("to"));
    if (Number.isFinite(from) && Number.isFinite(to) && params.get("from") && to > from) {
      const p = (width - LABEL_COL - 40) / (to - from);
      zoomTo(p, (from + to) / 2);
    } else {
      zoomTo(Math.max(1.4, (width - LABEL_COL) / 650), 1700);
    }
    /* eslint-enable react-hooks/set-state-in-effect */
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [view, width]);

  // Ctrl/⌘ + wheel (and trackpad pinch) zooms around the pointer.
  useEffect(() => {
    const el = scroller.current;
    if (!el) return;
    const onWheel = (ev: WheelEvent) => {
      if (!ev.ctrlKey && !ev.metaKey) return;
      ev.preventDefault();
      const rect = el.getBoundingClientRect();
      const year = MIN_YEAR + (el.scrollLeft + ev.clientX - rect.left - LABEL_COL) / effPpy;
      const factor = Math.exp(-ev.deltaY * 0.0025);
      const nextPpy = Math.min(400, Math.max(fitPpy, effPpy * factor));
      const offset = ev.clientX - rect.left - LABEL_COL;
      setPpy(nextPpy);
      requestAnimationFrame(() => {
        el.scrollLeft = (year - MIN_YEAR) * nextPpy - offset;
      });
    };
    el.addEventListener("wheel", onWheel, { passive: false });
    return () => el.removeEventListener("wheel", onWheel);
  }, [effPpy, fitPpy]);

  /* Lanes and row packing ------------------------------------------ */
  const showLabels = effPpy >= 1.2;
  const lanes = useMemo(() => {
    const regionsInUse = regions.filter((r) => filtered.some((e) => e.region === r.slug));
    return regionsInUse.map((r) => {
      const list = filtered.filter((e) => e.region === r.slug).sort((a, b) => a.sortKey - b.sortKey);
      const rowsEnd: number[] = [];
      const placed = list.map((e) => {
        const x0 = x(e.sortKey);
        const x1 = e.endYear != null && e.endYear > e.startYear ? Math.max(x(e.endYear + 1), x0 + 8) : x0 + 8;
        const labelEnd = showLabels ? x0 + 14 + Math.min(e.title.length * 6.8, 240) : x1;
        const end = Math.max(x1, labelEnd) + 8;
        let row = rowsEnd.findIndex((r) => r <= x0);
        if (row === -1) {
          row = rowsEnd.length;
          rowsEnd.push(end);
        } else rowsEnd[row] = end;
        return { e, x0, x1, row };
      });
      return { region: r, placed, rows: Math.max(1, rowsEnd.length) };
    });
  }, [filtered, regions, x, showLabels]);

  const laneTops = useMemo(() => {
    const tops: number[] = [];
    for (let i = 0, y = 0; i < lanes.length; i++) {
      tops.push(y);
      y += lanes[i].rows * ROW_H + LANE_PAD * 2;
    }
    return tops;
  }, [lanes]);
  const chartH = laneTops.length ? laneTops[laneTops.length - 1] + lanes[lanes.length - 1].rows * ROW_H + LANE_PAD * 2 : 120;

  /* Axis ticks (only the visible ones are rendered) ----------------- */
  const step = tickStep(effPpy);
  const visFrom = MIN_YEAR + (scrollLeft - 200) / effPpy;
  const visTo = MIN_YEAR + (scrollLeft + width + 200) / effPpy;
  const ticks: number[] = [];
  for (let t = Math.ceil(Math.max(MIN_YEAR, visFrom) / step) * step; t <= Math.min(MAX_YEAR, visTo); t += step) if (t !== 0) ticks.push(t);

  /* Simultaneity at the cursor ------------------------------------- */
  const atCursor = useMemo(() => {
    if (cursor === null) return [];
    const tol = Math.max(0.5, 6 / effPpy);
    return filtered.filter((e) => e.sortKey - tol <= cursor && (e.endYear ?? yearOfKey(e.sortKey)) + 1 + tol >= cursor);
  }, [cursor, filtered, effPpy]);

  const levelId = LEVELS.slice()
    .reverse()
    .find((l) => (l.ppy === 0 ? true : effPpy >= l.ppy * 0.8))?.id;

  const jump = (form: HTMLFormElement) => {
    const raw = String(new FormData(form).get("year") ?? "").trim().toLowerCase();
    const m = /^(-?\d{1,4})\s*(bc|bce)?$/.exec(raw);
    if (!m) return;
    const y = m[2] ? -Number(m[1]) : Number(m[1]);
    zoomTo(Math.max(effPpy, 40), y);
  };

  /* ---------------------------------------------------------------- */
  return (
    <div>
      {/* Controls */}
      <div className="flex flex-wrap items-end gap-x-6 gap-y-4 border-b border-line pb-5">
        <div>
          <span className="text-xs font-semibold" id="view-label">View</span>
          <div role="radiogroup" aria-labelledby="view-label" className="mt-1 flex rounded-sm border border-line-strong bg-surface p-1 text-sm">
            {(["chart", "list"] as const).map((v) => (
              <button key={v} type="button" role="radio" aria-checked={view === v} onClick={() => setView(v)} className={`rounded-xs px-3 py-1.5 ${view === v ? "bg-ink text-paper" : "text-ink-2 hover:bg-sunken"}`}>
                {v === "chart" ? "Chart" : "List"}
              </button>
            ))}
          </div>
        </div>
        {view === "chart" ? (
          <div>
            <span className="text-xs font-semibold" id="zoom-label">Zoom</span>
            <div role="group" aria-labelledby="zoom-label" className="mt-1 flex flex-wrap rounded-sm border border-line-strong bg-surface p-1 text-sm">
              <button type="button" onClick={() => zoomTo(effPpy / 2)} className="rounded-xs px-2.5 py-1.5 text-ink-2 hover:bg-sunken" aria-label="Zoom out">−</button>
              {LEVELS.map((l) => (
                <button
                  key={l.id}
                  type="button"
                  aria-pressed={levelId === l.id}
                  onClick={() => zoomTo(l.ppy || fitPpy)}
                  className={`rounded-xs px-2.5 py-1.5 ${levelId === l.id ? "bg-ink text-paper" : "text-ink-2 hover:bg-sunken"}`}
                >
                  {l.label}
                </button>
              ))}
              <button type="button" onClick={() => zoomTo(effPpy * 2)} className="rounded-xs px-2.5 py-1.5 text-ink-2 hover:bg-sunken" aria-label="Zoom in">+</button>
            </div>
          </div>
        ) : null}
        <div>
          <label htmlFor="tl-cat" className="text-xs font-semibold">Category</label>
          <select id="tl-cat" value={category} onChange={(e) => setParam("category", e.target.value)} className="mt-1 block rounded-sm border border-line-strong bg-surface px-2.5 py-2 text-sm">
            <option value="">All categories</option>
            {categories.map((c) => <option key={c.slug} value={c.slug}>{c.name}</option>)}
          </select>
        </div>
        {view === "chart" ? (
          <form onSubmit={(e) => { e.preventDefault(); jump(e.currentTarget); }}>
            <label htmlFor="tl-year" className="text-xs font-semibold">Go to year</label>
            <div className="mt-1 flex gap-1">
              <input id="tl-year" name="year" placeholder="e.g. 1453 or 44 BC" className="w-36 rounded-sm border border-line-strong bg-surface px-2.5 py-2 text-sm" />
              <button className="rounded-sm border border-line-strong px-3 text-sm font-medium hover:border-ink">Go</button>
            </div>
          </form>
        ) : null}
        <p className="text-sm text-muted tabular" role="status">{filtered.length} of {events.length} events</p>
      </div>

      <fieldset className="mt-4">
        <legend className="text-xs font-semibold">Regions</legend>
        <div className="mt-1.5 flex flex-wrap gap-1.5">
          {regions.map((r) => {
            const on = activeRegions.has(r.slug);
            return (
              <button
                key={r.slug}
                type="button"
                aria-pressed={on}
                onClick={() => {
                  const next = new Set(activeRegions);
                  if (on) next.delete(r.slug);
                  else next.add(r.slug);
                  setParam("regions", [...next].join(","));
                }}
                className={`rounded-full border px-3 py-1 text-sm ${on ? "border-ink bg-ink text-paper" : "border-line-strong bg-surface text-ink-2 hover:border-ink"}`}
              >
                {r.name}
              </button>
            );
          })}
          {activeRegions.size ? <button type="button" onClick={() => setParam("regions", "")} className="link px-2 text-sm">Show all regions</button> : null}
        </div>
      </fieldset>

      {view === "chart" ? (
        <>
          <p className="mt-4 text-xs text-muted">
            Scroll sideways to move through time. Hold Ctrl (or ⌘) and scroll, or pinch, to zoom. Move the pointer over the chart to see everything happening in a given year.
          </p>
          <div
            ref={scroller}
            onScroll={(e) => setScrollLeft(e.currentTarget.scrollLeft)}
            onMouseMove={(e) => {
              const r = e.currentTarget.getBoundingClientRect();
              const px = e.clientX - r.left + e.currentTarget.scrollLeft;
              setCursor(px < LABEL_COL + e.currentTarget.scrollLeft ? null : MIN_YEAR + (px - LABEL_COL) / effPpy);
            }}
            onMouseLeave={() => { setCursor(null); setHover(null); }}
            className="relative mt-3 overflow-x-auto overflow-y-hidden rounded-sm border border-line bg-surface"
            tabIndex={0}
            aria-label="Timeline chart. Use the zoom controls or arrow keys to scroll."
            onKeyDown={(e) => {
              if (e.key === "ArrowRight") e.currentTarget.scrollLeft += 120;
              if (e.key === "ArrowLeft") e.currentTarget.scrollLeft -= 120;
              if (e.key === "+" || e.key === "=") zoomTo(effPpy * 1.6);
              if (e.key === "-") zoomTo(effPpy / 1.6);
            }}
          >
            <div style={{ width: totalW, height: chartH + 36 }} className="relative">
              {/* Axis */}
              <div className="sticky top-0 z-20 h-9 border-b border-line bg-surface" style={{ width: totalW }}>
                <span aria-hidden="true" className="sticky left-0 z-10 block h-full border-r border-line bg-surface" style={{ width: LABEL_COL }} />
                {ticks.map((t) => (
                  <span key={t} className="absolute top-0 h-full border-l border-line pl-1.5 pt-2 text-xs text-muted tabular" style={{ left: x(t) }}>
                    {formatYear(t, { era: step >= 100 || t < 0 ? "auto" : "never" })}
                  </span>
                ))}
              </div>
              {/* Grid lines */}
              {ticks.map((t) => <span key={`g${t}`} aria-hidden="true" className="absolute top-9 w-px bg-line/60" style={{ left: x(t), height: chartH }} />)}
              {/* Year 1 marker */}
              <span aria-hidden="true" className="absolute top-9 w-px bg-line-strong" style={{ left: x(1), height: chartH }} />

              {/* Lanes */}
              {lanes.map((lane, i) => (
                <div key={lane.region.slug} className={`absolute inset-x-0 ${i ? "border-t border-line" : ""}`} style={{ top: 36 + laneTops[i], height: lane.rows * ROW_H + LANE_PAD * 2 }}>
                  <div
                    className="sticky left-0 z-20 flex h-full items-start border-r border-line bg-surface px-3 pt-3 text-sm font-medium text-ink"
                    style={{ width: LABEL_COL }}
                  >
                    {lane.region.name}
                  </div>
                  {lane.placed.map(({ e, x0, x1, row }) => {
                    const isRange = x1 - x0 > 9;
                    const lit = cursor !== null && atCursor.includes(e);
                    return (
                      <Link
                        key={e.slug}
                        href={`/event/${e.slug}`}
                        className="group absolute flex items-center gap-1.5 focus-visible:z-30"
                        style={{ left: x0, top: LANE_PAD + row * ROW_H, height: ROW_H - 6 }}
                        aria-label={`${e.title}, ${yearLabel({ year: e.startYear, precision: e.datePrecision }, e.endYear != null ? { year: e.endYear } : null)}, ${e.regionName}`}
                        onMouseEnter={(ev) => tipAt(e, ev.clientX, ev.clientY)}
                        onFocus={(ev) => {
                          const b = ev.currentTarget.getBoundingClientRect();
                          tipAt(e, b.left + 10, b.bottom);
                        }}
                        onBlur={() => setHover(null)}
                      >
                        {isRange ? (
                          <span className={`block h-2 rounded-full ${lit ? "bg-thread" : "bg-ink-2/70 group-hover:bg-thread"}`} style={{ width: x1 - x0 }} />
                        ) : (
                          <span className={`block h-3 w-3 shrink-0 rounded-full border-2 border-surface ${lit ? "bg-thread" : "bg-ink group-hover:bg-thread"}`} />
                        )}
                        {showLabels ? (
                          <span
                            className={`whitespace-nowrap text-[0.8rem] leading-none ${lit ? "font-semibold text-ink" : "text-ink-2 group-hover:text-ink"} ${isRange ? "absolute left-0 top-[18px]" : ""}`}
                          >
                            {e.title}
                          </span>
                        ) : null}
                      </Link>
                    );
                  })}
                </div>
              ))}

              {/* Cursor */}
              {cursor !== null ? (
                <span aria-hidden="true" className="pointer-events-none absolute top-0 z-20 w-px bg-thread" style={{ left: x(cursor), height: chartH + 36 }}>
                  <span className="absolute left-1 top-1 rounded-xs bg-thread px-1.5 py-0.5 text-xs font-semibold text-white tabular">{formatYear(Math.floor(cursor))}</span>
                </span>
              ) : null}
            </div>

            {hover ? (
              <div
                className="pointer-events-none fixed z-40 w-72 rounded-sm border border-line bg-surface p-3 shadow-lift"
                style={{ left: hover.left, top: hover.top }}
                role="tooltip"
              >
                <div className="flex gap-3">
                  {hover.e.thumb ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img src={hover.e.thumb} alt="" className="h-14 w-14 shrink-0 rounded-xs object-cover" />
                  ) : null}
                  <div className="min-w-0">
                    <p className="text-xs text-muted tabular">
                      {formatRange({ year: hover.e.startYear, month: hover.e.startMonth, day: hover.e.startDay, precision: hover.e.datePrecision }, hover.e.endYear != null ? { year: hover.e.endYear, month: hover.e.endMonth, day: hover.e.endDay } : null, { short: true })}
                    </p>
                    <p className="font-serif text-base leading-snug">{hover.e.title}</p>
                    <p className="text-xs text-muted">{hover.e.location}</p>
                  </div>
                </div>
                <p className="mt-2 line-clamp-3 text-xs text-ink-2">{hover.e.summary}</p>
              </div>
            ) : null}
          </div>

          <div className="mt-4 min-h-[4.5rem] rounded-sm border border-line bg-surface p-4" aria-live="polite">
            {cursor !== null ? (
              atCursor.length ? (
                <>
                  <p className="text-sm font-semibold tabular">Around {formatYear(Math.floor(cursor))}: {atCursor.length} event{atCursor.length === 1 ? "" : "s"} under way</p>
                  <ul className="mt-2 flex flex-wrap gap-x-5 gap-y-1 text-sm">
                    {atCursor.slice(0, 10).map((e) => (
                      <li key={e.slug}><span className="font-medium">{e.title}</span> <span className="text-muted">· {e.regionName}</span></li>
                    ))}
                  </ul>
                </>
              ) : (
                <p className="text-sm text-muted">Nothing in the filtered record around {formatYear(Math.floor(cursor))}.</p>
              )
            ) : (
              <p className="text-sm text-muted">Point at the chart to see which events overlap in time. Long events are drawn as bars; single dates as dots.</p>
            )}
          </div>
        </>
      ) : (
        <ListView events={filtered} />
      )}
    </div>
  );
}

function ListView({ events }: { events: TimelineEvent[] }) {
  const groups = new Map<string, TimelineEvent[]>();
  for (const e of events) {
    const k = centuryLabel(e.startYear);
    groups.set(k, [...(groups.get(k) ?? []), e]);
  }
  if (!events.length) return <p className="mt-8 text-ink-2">No events match these filters.</p>;
  return (
    <div className="mt-6">
      {[...groups].map(([label, list]) => (
        <section key={label} aria-label={label} className="relative">
          <h2 className="sticky top-0 z-10 border-b border-line bg-paper py-2 font-serif text-lg">
            {label[0].toUpperCase() + label.slice(1)} <span className="font-sans text-sm text-muted tabular">{list.length}</span>
          </h2>
          <ol className="border-l-2 border-line py-3 pl-5">
            {list.map((e) => (
              <li key={e.slug} className="relative py-2">
                <span aria-hidden="true" className="absolute -left-[27px] top-4 h-3 w-3 rounded-full border-2 border-paper bg-ink" />
                <Link href={`/event/${e.slug}`} className="group flex gap-3">
                  {e.thumb ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img src={e.thumb} alt="" className="h-14 w-14 shrink-0 rounded-xs object-cover" loading="lazy" />
                  ) : <span className="h-14 w-14 shrink-0 rounded-xs bg-sunken" />}
                  <span className="min-w-0">
                    <span className="block text-xs text-muted tabular">
                      {formatRange({ year: e.startYear, month: e.startMonth, day: e.startDay, precision: e.datePrecision }, e.endYear != null ? { year: e.endYear, month: e.endMonth, day: e.endDay } : null, { short: true })} · {e.regionName}
                    </span>
                    <span className="block font-serif text-lg leading-snug group-hover:underline group-hover:decoration-thread group-hover:underline-offset-4">{e.title}</span>
                  </span>
                </Link>
              </li>
            ))}
          </ol>
        </section>
      ))}
    </div>
  );
}
