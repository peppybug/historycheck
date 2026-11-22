"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export const NAV = [
  { href: "/search", label: "Search" },
  { href: "/explore", label: "Explore" },
  { href: "/timeline", label: "Timeline" },
  { href: "/periods", label: "Periods" },
  { href: "/connections", label: "Connections" },
  { href: "/beliefs", label: "Beliefs" },
  { href: "/about", label: "About" },
];

export function DesktopNav() {
  const path = usePathname();
  return (
    <nav aria-label="Main" className="hidden lg:block">
      <ul className="flex items-center gap-1">
        {NAV.map((n) => {
          const current = path === n.href || path.startsWith(n.href + "/") || (n.href === "/periods" && path.startsWith("/period/")) || (n.href === "/beliefs" && (path.startsWith("/belief/") || path.startsWith("/deity/")));
          return (
            <li key={n.href}>
              <Link
                href={n.href}
                aria-current={current ? "page" : undefined}
                className={`rounded-sm px-3 py-2 text-[0.95rem] font-medium transition-colors duration-150 hover:text-ink ${
                  current ? "text-ink underline decoration-thread decoration-2 underline-offset-[10px]" : "text-ink-2"
                }`}
              >
                {n.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export function MobileNav() {
  const [open, setOpen] = useState(false);
  const path = usePathname();
  useEffect(() => setOpen(false), [path]);
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);
  return (
    <div className="lg:hidden">
      <button
        type="button"
        aria-expanded={open}
        aria-controls="mobile-nav"
        onClick={() => setOpen((o) => !o)}
        className="inline-flex h-10 items-center gap-2 rounded-sm px-2.5 text-sm font-medium text-ink hover:bg-sunken"
      >
        <svg viewBox="0 0 20 20" className="h-5 w-5" aria-hidden="true">
          {open ? (
            <path d="M5 5l10 10M15 5 5 15" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
          ) : (
            <path d="M3 6h14M3 10h14M3 14h14" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
          )}
        </svg>
        Menu
      </button>
      {open ? (
        <nav id="mobile-nav" aria-label="Main" className="absolute inset-x-0 top-full z-50 border-b border-line bg-paper shadow-lift">
          <ul className="container-page grid gap-1 py-3">
            {NAV.map((n) => (
              <li key={n.href}>
                <Link href={n.href} className="block rounded-sm px-2 py-3 text-lg font-medium text-ink hover:bg-sunken">
                  {n.label}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/saved" className="block rounded-sm px-2 py-3 text-lg font-medium text-ink hover:bg-sunken">
                Saved events
              </Link>
            </li>
          </ul>
        </nav>
      ) : null}
    </div>
  );
}
