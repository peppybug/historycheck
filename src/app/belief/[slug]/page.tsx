import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArchiveImage, ImageCredit } from "@/components/archive-image";
import { PortraitCard, WikiSources } from "@/components/belief-cards";
import { EventsByCentury } from "@/components/collection";
import { getBelief, staticSlugs } from "@/lib/queries";

export async function generateStaticParams() {
  return staticSlugs("belief");
}
type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const b = await getBelief((await params).slug);
  return b
    ? { title: b.name, description: b.summary, alternates: { canonical: `/belief/${b.slug}` }, openGraph: { images: b.image ? [{ url: b.image.thumbUrl }] : undefined } }
    : { title: "Belief not found" };
}

export default async function BeliefPage({ params }: Props) {
  const b = await getBelief((await params).slug);
  if (!b) notFound();
  return (
    <>
      <header className="border-b border-line bg-surface">
        <div className="container-page grid gap-10 py-10 lg:grid-cols-[1fr_minmax(0,380px)] lg:gap-16">
          <div>
            <nav aria-label="Breadcrumb" className="text-sm text-muted">
              <Link className="hover:text-ink" href="/">Home</Link> / <Link className="hover:text-ink" href="/beliefs">Beliefs</Link>
              {b.parent ? (
                <>
                  {" "}/ <Link className="hover:text-ink" href={`/belief/${b.parent.slug}`}>{b.parent.name}</Link>
                </>
              ) : null}
            </nav>
            <p className="mt-6 text-sm text-ink-2">{b.origin}</p>
            <h1 className="mt-1 text-[2.25rem] leading-tight sm:text-3xl">{b.name}</h1>
            <p className="mt-4 max-w-2xl text-lg text-ink-2">{b.summary}</p>
            <dl className="mt-6 grid max-w-2xl grid-cols-[auto_1fr] gap-x-6 gap-y-2 text-sm">
              {b.facts.map(([k, v]) => (
                <div key={k} className="contents">
                  <dt className="text-muted">{k}</dt>
                  <dd>{v}</dd>
                </div>
              ))}
              {b.parent ? (
                <>
                  <dt className="text-muted">Part of</dt>
                  <dd><Link className="link" href={`/belief/${b.parent.slug}`}>{b.parent.name}</Link></dd>
                </>
              ) : null}
              {b.branches.length ? (
                <>
                  <dt className="text-muted">Branches here</dt>
                  <dd>
                    {b.branches.map((x, i) => (
                      <span key={x.slug}>
                        {i ? ", " : ""}
                        <Link className="link" href={`/belief/${x.slug}`}>{x.name}</Link>
                      </span>
                    ))}
                  </dd>
                </>
              ) : null}
            </dl>
          </div>
          {b.image ? (
            <figure>
              <div className="max-h-[440px] overflow-hidden rounded-xs bg-sunken" style={{ aspectRatio: `${b.image.thumbWidth} / ${b.image.thumbHeight}` }}>
                <ArchiveImage image={b.image} priority sizes="380px" fit="contain" />
              </div>
              <figcaption className="mt-2 text-xs text-muted">
                <span className="block text-ink-2">{b.image.caption}</span>
                <ImageCredit image={b.image} />
              </figcaption>
            </figure>
          ) : null}
        </div>
      </header>

      <div className="container-page">
        <section aria-labelledby="ov-h" className="mt-10 max-w-3xl">
          <h2 id="ov-h" className="text-xl">Overview</h2>
          <div className="prose-history mt-3"><p>{b.overview}</p></div>
        </section>

        {b.figures.length ? (
          <section aria-labelledby="fig-h" className="mt-12">
            <h2 id="fig-h" className="text-xl">Gods and figures</h2>
            <p className="mt-1 text-sm text-ink-2">Figures of myth and worship, not historical people.</p>
            <ul className="mt-4 grid grid-cols-2 gap-x-5 gap-y-8 sm:grid-cols-4 lg:grid-cols-7">
              {b.figures.map((d) => (
                <li key={d.slug}>
                  <PortraitCard href={`/deity/${d.slug}`} title={d.name} detail={d.domain} image={d.image} />
                </li>
              ))}
            </ul>
          </section>
        ) : null}

        <section aria-labelledby="ev-h" className="mt-12">
          <h2 id="ev-h" className="mb-6 text-xl">In the historical record</h2>
          <EventsByCentury events={b.events} />
        </section>

        <WikiSources title={b.wikipediaTitle} qid={b.wikidataId} />
      </div>
    </>
  );
}
