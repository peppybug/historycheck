import type { Metadata } from "next";
import { RandomRedirect } from "@/components/random-redirect";
import { staticSlugs } from "@/lib/queries";

export const metadata: Metadata = { title: "Random event", robots: { index: false, follow: true } };

export default async function RandomPage() {
  const slugs = (await staticSlugs("event")).map((s) => s.slug);
  return (
    <div className="container-page max-w-xl py-20">
      <RandomRedirect slugs={slugs} />
    </div>
  );
}
