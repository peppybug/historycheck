import type { Metadata } from "next";
import { Suspense } from "react";
import { SearchView } from "@/components/search-view";

export const metadata: Metadata = {
  title: "Search the record",
  description: "Search historical events, people, places, civilizations and years.",
  alternates: { canonical: "/search/" },
};

export default function SearchPage() {
  return (
    <Suspense fallback={<p className="container-page pt-8 text-muted">Loading search…</p>}>
      <SearchView />
    </Suspense>
  );
}
