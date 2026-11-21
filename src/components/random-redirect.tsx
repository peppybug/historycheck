"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

/** Picks a random event in the browser (works on static hosting). */
export function RandomRedirect({ slugs }: { slugs: string[] }) {
  const router = useRouter();
  useEffect(() => {
    if (slugs.length) router.replace(`/event/${slugs[Math.floor(Math.random() * slugs.length)]}`);
  }, [router, slugs]);
  return (
    <p className="text-ink-2" aria-live="polite">
      Choosing a random event…{" "}
      <noscript>
        JavaScript is needed to pick one at random. <Link className="link" href="/explore">Explore the record</Link> instead.
      </noscript>
    </p>
  );
}
