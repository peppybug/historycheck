import type { Metadata } from "next";
import Link from "next/link";
import { PortraitCard } from "@/components/belief-cards";
import { SectionHeading } from "@/components/section-heading";
import { getBeliefs, getDeities } from "@/lib/queries";

export const metadata: Metadata = {
  title: "Beliefs and mythology",
  description: "World religions, their major branches and the gods of ancient Greece, linked to the events in which they played a part.",
  alternates: { canonical: "/beliefs" },
};

export default async function BeliefsPage() {
  const [beliefs, deities] = await Promise.all([getBeliefs(), getDeities()]);
  const religions = beliefs.filter((b) => b.kind === "religion");
  const ancient = beliefs.filter((b) => b.kind === "ancient-religion");
  const branchesOf = (id: number) => beliefs.filter((b) => b.parentId === id);

  return (
    <>
      <header className="border-b border-line bg-surface">
        <div className="container-page py-10">
          <nav aria-label="Breadcrumb" className="text-sm text-muted">
            <Link className="hover:text-ink" href="/">Home</Link>
          </nav>
          <h1 className="mt-6 text-[2.25rem] leading-tight sm:text-3xl">Beliefs and mythology</h1>
          <p className="mt-4 max-w-2xl text-lg text-ink-2">
            Religions and the stories people told about the gods. Each is described as historians and its own tradition describe it, and linked to events in the record. Where a date comes from tradition rather than evidence, the page says so.
          </p>
        </div>
      </header>

      <div className="container-page">
        <section aria-labelledby="rel-h" className="mt-12">
          <SectionHeading id="rel-h" title="World religions" deck="Ordered by when they emerged. Origins are often approximate." />
          <ul className="grid grid-cols-2 gap-x-5 gap-y-8 sm:grid-cols-3 lg:grid-cols-6">
            {religions.map((b) => (
              <li key={b.slug}>
                <PortraitCard href={`/belief/${b.slug}`} title={b.name} detail={`${b.eventCount} event${b.eventCount === 1 ? "" : "s"}`} image={b.image} />
                {branchesOf(b.id).length ? (
                  <p className="mt-1.5 text-xs text-ink-2">
                    Branches:{" "}
                    {branchesOf(b.id).map((x, i) => (
                      <span key={x.slug}>
                        {i ? ", " : ""}
                        <Link className="link" href={`/belief/${x.slug}`}>{x.name}</Link>
                      </span>
                    ))}
                  </p>
                ) : null}
              </li>
            ))}
          </ul>
        </section>

        <section aria-labelledby="anc-h" className="mt-16">
          <SectionHeading id="anc-h" title="Ancient religions" />
          <ul className="grid grid-cols-2 gap-x-5 gap-y-8 sm:grid-cols-3 lg:grid-cols-6">
            {ancient.map((b) => (
              <li key={b.slug}>
                <PortraitCard href={`/belief/${b.slug}`} title={b.name} detail={b.origin} image={b.image} />
              </li>
            ))}
          </ul>
        </section>

        <section aria-labelledby="gods-h" className="mt-16">
          <SectionHeading
            id="gods-h"
            title="Gods of ancient Greece"
            deck="Figures of myth and worship, not historical people. Roman names in brackets."
            href="/belief/ancient-greek-religion"
            hrefLabel="About Greek religion"
          />
          <ul className="grid grid-cols-2 gap-x-5 gap-y-8 sm:grid-cols-4 lg:grid-cols-7">
            {deities.map((d) => (
              <li key={d.slug}>
                <PortraitCard href={`/deity/${d.slug}`} title={d.romanName && d.romanName !== d.name ? `${d.name} (${d.romanName})` : d.name} detail={d.domain} image={d.image} />
              </li>
            ))}
          </ul>
        </section>
      </div>
    </>
  );
}
