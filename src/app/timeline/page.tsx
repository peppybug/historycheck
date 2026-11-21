import type { Metadata } from "next";
import { Suspense } from "react";
import { Timeline } from "@/components/timeline";
import { getCategoriesWithCounts, getRegionsWithCounts, getTimelineEvents } from "@/lib/queries";

export const metadata: Metadata = {
  title: "Interactive timeline",
  description: "Every event in the record on one zoomable timeline, by region — see what happened at the same time across the world.",
  alternates: { canonical: "/timeline" },
};

export default async function TimelinePage() {
  const [events, regions, categories] = await Promise.all([getTimelineEvents(), getRegionsWithCounts(), getCategoriesWithCounts()]);
  return (
    <div className="container-page pt-10">
      <h1 className="text-3xl">Timeline</h1>
      <p className="mt-3 max-w-2xl text-lg text-ink-2">
        All {events.length} events on a single scale, one row per region, so you can see what was happening in different parts of the world at the same moment.
      </p>
      <div className="mt-8">
        <Suspense fallback={<p className="text-muted">Loading the timeline…</p>}>
          <Timeline
            events={events}
            regions={regions.filter((r) => r.count > 0).map((r) => ({ slug: r.slug, name: r.name }))}
            categories={categories.map((c) => ({ slug: c.slug, name: c.name }))}
          />
        </Suspense>
      </div>
    </div>
  );
}
