import Link from "next/link";
import { Wordmark } from "./logo";
import { DesktopNav, MobileNav } from "./site-nav";
import { ThemeToggle } from "./theme-toggle";

export function SiteHeader() {
  return (
    <header className="relative z-30 border-b border-line bg-paper">
      <div className="container-page flex h-16 items-center justify-between gap-4">
        <Link href="/" aria-label="Historycheck home" className="shrink-0">
          <Wordmark />
        </Link>
        <DesktopNav />
        <div className="flex items-center gap-1">
          <Link
            href="/saved"
            className="hidden h-10 items-center rounded-sm px-3 text-sm font-medium text-ink-2 hover:bg-sunken hover:text-ink sm:inline-flex"
          >
            Saved
          </Link>
          <Link
            href="/random"
            prefetch={false}
            className="hidden h-10 items-center rounded-sm px-3 text-sm font-medium text-ink-2 hover:bg-sunken hover:text-ink sm:inline-flex"
          >
            Random event
          </Link>
          <ThemeToggle />
          <MobileNav />
        </div>
      </div>
    </header>
  );
}
