import Link from "next/link";
import { notFound } from "next/navigation";
import { getConnectionGraph, listEventOptions } from "@/lib/queries";
import { ConnectionGraph } from "./connection-graph";
import { EventPicker } from "./event-picker";
import { RelationLegend } from "./relation-legend";

const STARTS = [
  ["world-war-i", "First World War"],
  ["storming-of-the-bastille", "French Revolution"],
  ["industrial-revolution", "Industrial Revolution"],
  ["fall-of-constantinople", "Fall of Constantinople"],
  ["sputnik", "Sputnik"],
  ["crossing-the-rubicon", "Caesar crosses the Rubicon"],
];

export async function ConnectionsView({ slug }: { slug: string }) {
  const [graph, options] = await Promise.all([getConnectionGraph(slug, 3), listEventOptions()]);
  if (!graph) notFound();
  const root = graph.nodes.find((n) => n.id === graph.rootId);
  return (
    <div className="container-page pt-10">
      <h1 className="text-3xl">Historical connections{root && slug !== "world-war-i" ? <span className="block text-xl text-ink-2 sm:text-2xl">around {root.title}</span> : null}</h1>
      <div className="mt-3 grid gap-8 lg:grid-cols-[1.3fr_1fr]">
        <p className="max-w-2xl text-lg text-ink-2">
          Choose an event to see what led to it and what followed, up to three steps away. Select any card to re-centre the map on that event.
          A sequence of events is never drawn as cause and effect unless the sources support it.
        </p>
        <RelationLegend />
      </div>
      <div className="mt-8 flex flex-wrap items-end gap-x-8 gap-y-4">
        <EventPicker options={options} value={slug} />
        <div className="text-sm">
          <span className="text-muted">Good starting points: </span>
          {STARTS.map(([s, l], i) => (
            <span key={s}>
              {i ? ", " : ""}
              <Link className="link" href={`/connections/${s}`}>{l}</Link>
            </span>
          ))}
        </div>
      </div>
      <div className="mt-8">
        <ConnectionGraph
          key={slug}
          // Only what the cards display is sent to the browser.
          nodes={graph.nodes.map((n) => ({
            id: n.id,
            slug: n.slug,
            title: n.title,
            sortKey: n.sortKey,
            startYear: n.startYear,
            endYear: n.endYear,
            datePrecision: n.datePrecision,
            thumb: n.image ? n.image.smallUrl ?? n.image.thumbUrl : null,
          }))}
          edges={graph.edges.map((e) => ({ from_event_id: e.from_event_id, to_event_id: e.to_event_id, type: e.type, note: e.note }))}
          rootId={graph.rootId}
        />
      </div>
    </div>
  );
}
