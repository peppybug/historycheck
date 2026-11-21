import type { Metadata } from "next";
import Link from "next/link";
import { RelationLegend } from "@/components/relation-legend";
import { getStats } from "@/lib/queries";

export const dynamic = "force-dynamic";
export const metadata: Metadata = {
  title: "About and methodology",
  description: "How Historycheck records are written, verified, illustrated and connected.",
  alternates: { canonical: "/about" },
};

export default async function AboutPage() {
  const s = await getStats();
  return (
    <div className="container-page grid gap-12 pt-10 lg:grid-cols-[200px_1fr]">
      <nav aria-label="On this page" className="hidden lg:block">
        <ol className="sticky top-6 grid gap-2 border-l border-line text-sm">
          {[["what", "What this is"], ["records", "How records are written"], ["verification", "Verification"], ["images", "Images"], ["connections", "Connections"], ["sources", "Sources"], ["corrections", "Corrections"], ["limits", "Limitations"]].map(([id, l]) => (
            <li key={id}><a href={`#${id}`} className="-ml-px block border-l border-transparent pl-3 text-ink-2 hover:border-thread hover:text-ink">{l}</a></li>
          ))}
        </ol>
      </nav>
      <div className="max-w-[70ch]">
        <h1 className="text-3xl">About Historycheck</h1>
        <p className="mt-4 font-serif text-xl leading-relaxed text-ink-2">
          Historycheck is a searchable record of {s.events} historical events, {s.people} people and {s.places} places, connected by {s.relations} documented links.
          It is built to answer three questions about any event: what happened, why, and what happened next.
        </p>

        <section aria-labelledby="what" className="mt-12 scroll-mt-6">
          <h2 id="what" className="text-xl">What this is</h2>
          <div className="prose-history mt-3">
            <p>An encyclopedia tells you about one subject at a time. Historycheck focuses on the links between subjects: each event page shows its causes, its consequences and the events taking place elsewhere in the world at the same moment. Everything is stored in a relational database, so search, the timeline and the connections explorer all work from the same records.</p>
          </div>
        </section>

        <section aria-labelledby="records" className="mt-12 scroll-mt-6">
          <h2 id="records" className="text-xl">How records are written</h2>
          <div className="prose-history mt-3">
            <p>Event descriptions, context, causes, consequences and timelines are written by Historycheck editors and drawn from the cited sources. Each event is anchored to a specific Wikidata item and encyclopedia article, which identifies exactly which event is meant.</p>
            <p>Biographies of people and descriptions of places are short extracts from Wikipedia, credited on each page under the CC BY-SA licence. Birth and death dates, coordinates and nationalities come from Wikidata and are shown only as precisely as Wikidata records them.</p>
            <p>Dates carry an explicit precision: exact day, month, year, approximate, decade or century. A date known only to the year is never shown with a day, and traditional or disputed dates carry a note explaining the uncertainty.</p>
          </div>
        </section>

        <section aria-labelledby="verification" className="mt-12 scroll-mt-6">
          <h2 id="verification" className="text-xl">Verification</h2>
          <div className="prose-history mt-3">
            <p>An automated check compares every event&apos;s start and end dates with Wikidata&apos;s &ldquo;point in time&rdquo;, &ldquo;start time&rdquo; and &ldquo;end time&rdquo;, allowing for calendar conventions (Julian and Gregorian dates, and the absence of a year zero).</p>
          </div>
          <ul className="mt-4 grid gap-3 text-[0.98rem]">
            <li><strong className="font-semibold">Dates verified</strong> means the dates match. {s.verified} of {s.events} published events currently have this status.</li>
            <li><strong className="font-semibold">Partially verified</strong> means Wikidata has no comparable date, or an editor has reviewed a difference and recorded why the stated date stands. The reason is shown on the event page.</li>
            <li><strong className="font-semibold">Under review</strong>: events with an unexplained difference are held back and are not published until an editor resolves them.</li>
          </ul>
        </section>

        <section aria-labelledby="images" className="mt-12 scroll-mt-6">
          <h2 id="images" className="text-xl">Images</h2>
          <div className="prose-history mt-3">
            <p>Images are matched to the subject itself rather than found by keyword search, in this order of preference:</p>
          </div>
          <ol className="mt-4 grid list-decimal gap-3 pl-5 text-[0.98rem]">
            <li><strong className="font-semibold">People and places:</strong> the image that Wikidata editors attached to that exact person or place.</li>
            <li><strong className="font-semibold">Events:</strong> the lead image that encyclopedia editors chose for the event&apos;s own article, such as the Apollo 11 photograph of Buzz Aldrin on the Moon.</li>
            <li><strong className="font-semibold">Galleries:</strong> paintings, photographs, maps and objects used inside the event&apos;s article, shown with that article&apos;s own captions.</li>
          </ol>
          <div className="prose-history mt-4">
            <p>Every image comes from Wikimedia Commons, which accepts only freely licensed and public-domain files. Its creator, date, licence and file page are stored and shown next to it. Before publication, each image link is checked; any image that cannot be loaded is removed rather than shown broken. When no image can be verified, the page says so instead of using a substitute. No image on this site is AI-generated.</p>
          </div>
        </section>

        <section aria-labelledby="connections" className="mt-12 scroll-mt-6">
          <h2 id="connections" className="text-xl">Connections</h2>
          <div className="prose-history mt-3">
            <p>Links between events are typed. Only &ldquo;led to&rdquo; and &ldquo;contributed to&rdquo; claim causation. &ldquo;Followed by&rdquo;, &ldquo;part of&rdquo;, &ldquo;occurred during&rdquo; and &ldquo;related to&rdquo; describe sequence or theme, and are drawn differently so that coming earlier is never confused with causing.</p>
          </div>
          <RelationLegend className="mt-5 rounded-sm border border-line bg-surface p-5" />
        </section>

        <section aria-labelledby="sources" className="mt-12 scroll-mt-6">
          <h2 id="sources" className="text-xl">Sources</h2>
          <div className="prose-history mt-3">
            <p>Each event lists the encyclopedia article and Wikidata item it is anchored to, institutional sources selected by editors (such as the Avalon Project at Yale Law School, the U.S. Office of the Historian, NASA and CERN), and references to museums, archives, libraries and universities cited in the event&apos;s article. Every source link is checked; links that no longer work are removed. Some publishers block automated checks, so a few links could only be kept because the citing article vouches for them.</p>
          </div>
        </section>

        <section aria-labelledby="corrections" className="mt-12 scroll-mt-6">
          <h2 id="corrections" className="text-xl">Corrections</h2>
          <div className="prose-history mt-3">
            <p>Edits are made through a protected editorial workspace. Every change to a record is reviewed before it is published, and records with open questions stay unpublished until they are resolved.</p>
          </div>
        </section>

        <section aria-labelledby="limits" className="mt-12 scroll-mt-6">
          <h2 id="limits" className="text-xl">Limitations</h2>
          <div className="prose-history mt-3">
            <p>The record is selective. It covers every continent and five thousand years, but it cannot include everything, and coverage of some regions is still thinner than others. Interpretations of causes are simplified for readability; follow the sources for the full scholarly debate.</p>
          </div>
          <p className="mt-6"><Link className="link font-medium" href="/explore">Start exploring</Link></p>
        </section>
      </div>
    </div>
  );
}
