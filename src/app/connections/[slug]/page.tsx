import type { Metadata } from "next";
import { ConnectionsView } from "@/components/connections-view";
import { getEvent, staticSlugs } from "@/lib/queries";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return staticSlugs("event");
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const ev = await getEvent((await params).slug);
  return ev
    ? { title: `Connections: ${ev.title}`, description: `What led to ${ev.title} and what followed, with causal links separated from sequence.`, alternates: { canonical: `/connections/${ev.slug}/` } }
    : { title: "Connections" };
}

export default async function ConnectionsForEvent({ params }: Props) {
  return <ConnectionsView slug={(await params).slug} />;
}
