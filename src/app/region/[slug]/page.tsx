import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CollectionHeader, EventsByCentury } from "@/components/collection";
import { getRegion, staticSlugs } from "@/lib/queries";

export async function generateStaticParams() {
  return staticSlugs("region");
}
type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const d = await getRegion((await params).slug);
  return d ? { title: `History of ${d.region.name}`, alternates: { canonical: `/region/${d.region.slug}` } } : { title: "Region not found" };
}

export default async function RegionPage({ params }: Props) {
  const d = await getRegion((await params).slug);
  if (!d) notFound();
  return (
    <>
      <CollectionHeader crumbs={[{ href: "/", label: "Home" }, { href: "/explore#regions", label: "Regions" }]} title={d.region.name} description={`Events in the record whose main setting is ${d.region.name}.`} count={d.events.length} />
      <div className="container-page mt-10"><EventsByCentury events={d.events} /></div>
    </>
  );
}
