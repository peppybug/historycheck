import Link from "next/link";
import { LogoMark } from "./logo";

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-line bg-surface">
      <div className="container-page grid gap-10 py-12 md:grid-cols-[1.4fr_1fr_1fr]">
        <div className="max-w-sm">
          <p className="flex items-center gap-2 font-serif text-lg font-semibold">
            <LogoMark className="h-5 w-5" /> Historycheck
          </p>
          <p className="mt-3 text-sm text-ink-2">
            A searchable record of historical events, the people and places involved, and how they connect. Facts are checked
            against Wikidata; images come from Wikimedia Commons with their licences.
          </p>
        </div>
        <nav aria-label="Browse">
          <h2 className="font-sans text-sm font-semibold text-ink">Browse</h2>
          <ul className="mt-3 grid gap-2 text-sm text-ink-2">
            <li><Link className="hover:text-ink" href="/explore">Explore by theme</Link></li>
            <li><Link className="hover:text-ink" href="/timeline">Interactive timeline</Link></li>
            <li><Link className="hover:text-ink" href="/periods">Historical periods</Link></li>
            <li><Link className="hover:text-ink" href="/connections">Historical connections</Link></li>
            <li><Link className="hover:text-ink" href="/explore#map">Map of places</Link></li>
          </ul>
        </nav>
        <nav aria-label="About the record">
          <h2 className="font-sans text-sm font-semibold text-ink">The record</h2>
          <ul className="mt-3 grid gap-2 text-sm text-ink-2">
            <li><Link className="hover:text-ink" href="/about">How records are verified</Link></li>
            <li><Link className="hover:text-ink" href="/about#images">Image sourcing and licences</Link></li>
            <li><Link className="hover:text-ink" href="/about#connections">How connections are classified</Link></li>
            <li><Link className="hover:text-ink" href="/saved">Your saved events</Link></li>
          </ul>
        </nav>
      </div>
      <div className="border-t border-line">
        <p className="container-page py-5 text-xs text-muted">
          Text by Historycheck editors unless marked. Biographies and place descriptions quoted from Wikipedia are available under{" "}
          <a className="link" href="https://creativecommons.org/licenses/by-sa/4.0/" rel="license noopener" target="_blank">CC BY-SA 4.0</a>.
          Each image carries its own licence and attribution.
        </p>
      </div>
    </footer>
  );
}
