import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CollectionHeader, EventsByCentury } from "@/components/collection";
import { getCategory, staticSlugs } from "@/lib/queries";

export async function generateStaticParams() {
  return staticSlugs("category");
}
type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const d = await getCategory((await params).slug);
  return d ? { title: d.category.name, description: d.category.description, alternates: { canonical: `/category/${d.category.slug}` } } : { title: "Category not found" };
}

export default async function CategoryPage({ params }: Props) {
  const d = await getCategory((await params).slug);
  if (!d) notFound();
  return (
    <>
      <CollectionHeader crumbs={[{ href: "/", label: "Home" }, { href: "/explore", label: "Explore" }]} title={d.category.name} description={d.category.description} count={d.events.length} />
      <div className="container-page mt-10"><EventsByCentury events={d.events} /></div>
    </>
  );
}
