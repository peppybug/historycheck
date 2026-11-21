import type { Metadata } from "next";
import Link from "next/link";
import { requireAdmin } from "@/lib/admin-auth";
import { logoutAction } from "../actions";

export const metadata: Metadata = { title: { default: "Editorial workspace", template: "%s · Editorial workspace" }, robots: { index: false, follow: false } };
export const dynamic = "force-dynamic";

const NAV = [
  ["/admin", "Overview"],
  ["/admin/events?status=review", "Review queue"],
  ["/admin/events", "Events"],
  ["/admin/events/new", "New event"],
  ["/admin/people", "People"],
  ["/admin/places", "Places"],
  ["/admin/sources", "Sources"],
];

export default async function PanelLayout({ children }: { children: React.ReactNode }) {
  await requireAdmin();
  return (
    <div className="container-page grid gap-8 py-8 lg:grid-cols-[190px_1fr]">
      <aside>
        <p className="text-xs font-semibold text-muted">Editorial workspace</p>
        <nav aria-label="Workspace" className="mt-2">
          <ul className="flex flex-wrap gap-1 lg:flex-col">
            {NAV.map(([href, label]) => (
              <li key={href}><Link href={href} className="block rounded-sm px-2.5 py-1.5 text-sm text-ink-2 hover:bg-sunken hover:text-ink">{label}</Link></li>
            ))}
          </ul>
        </nav>
        <form action={logoutAction} className="mt-4">
          <button className="rounded-sm px-2.5 py-1.5 text-sm text-ink-2 hover:bg-sunken hover:text-ink">Sign out</button>
        </form>
      </aside>
      <div className="min-w-0">{children}</div>
    </div>
  );
}
