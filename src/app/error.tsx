"use client";

import Link from "next/link";
import { useEffect } from "react";

export default function ErrorPage({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  useEffect(() => {
    console.error(error);
  }, [error]);
  return (
    <div className="container-page max-w-2xl py-20">
      <h1 className="text-3xl">The record could not be loaded</h1>
      <p className="mt-4 text-lg text-ink-2">
        Something went wrong while fetching this page, most likely a temporary problem reaching the database. Your link is fine; please try again.
      </p>
      <div className="mt-8 flex gap-4">
        <button type="button" onClick={reset} className="rounded-sm bg-ink px-5 py-2.5 font-medium text-paper hover:bg-thread">Try again</button>
        <Link href="/" className="rounded-sm border border-line-strong px-5 py-2.5 font-medium hover:border-ink">Go to the homepage</Link>
      </div>
      {error.digest ? <p className="mt-6 text-xs text-muted">Reference: {error.digest}</p> : null}
    </div>
  );
}
