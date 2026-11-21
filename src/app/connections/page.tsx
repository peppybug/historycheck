import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ConnectionGraph } from "@/components/connection-graph";
import { EventPicker } from "@/components/event-picker";
import { RelationLegend } from "@/components/relation-legend";
import { getConnectionGraph, listEventOptions } from "@/lib/queries";

export const dynamic = "force-dynamic";
export const metadata: Metadata = {
  title: "Historical connections",
  description: "Follow how historical events caused, contributed to and followed one another, with causation clearly separated from sequence.",
  alternates: { canonical: "/connections" },
};

const STARTS = [
  ["world-war-i", "First World War"],
  ["storming-of-the-bastille", "French Revolution"],
  ["industrial-revolution", "Industrial Revolution"],
  ["fall-of-constantinople", "Fall of Constantinople"],
  ["sputnik", "Sputnik"],
  ["crossing-the-rubicon", "Caesar crosses the Rubicon"],
];

type Props = { searchParams: Promise<{ event?: string }> };

export default async function ConnectionsPage({ searchParams }: Props) {
  const slug = (await searchParams).event ?? "world-war-i";
  const [graph, options] = await Promise.all([getConnectionGraph(slug, 3), listEventOptions()]);
  if (!graph) notFound();

  return (
    <div className="container-page pt-10">
      <h1 className="text-3xl">Historical connections</h1>
      <div className="mt-3 grid gap-8 lg:grid-cols-[1.3fr_1fr]">
        <p className="max-w-2xl text-lg text-ink-2">
          Choose an event to see what led to it and what followed, up to three steps away. Select any card to re-centre the map on that event.
          A sequence of events is never drawn as cause and effect unless the sources support it.
        </p>
        <RelationLegend />
      </div>
      <div className="mt-8 flex flex-wrap items-end gap-x-8 gap-y-4">
        <EventPicker options={options.filter((o) => o.rels > 0)} value={slug} />
        <div className="text-sm">
          <span className="text-muted">Good starting points: </span>
          {STARTS.map(([s, l], i) => (
            <span key={s}>
              {i ? ", " : ""}
              <Link className="link" href={`/connections?event=${s}`}>{l}</Link>
            </span>
          ))}
        </div>
      </div>
      <div className="mt-8">
        <ConnectionGraph key={slug} nodes={graph.nodes} edges={graph.edges} rootId={graph.rootId} />
      </div>
    </div>
  );
}
