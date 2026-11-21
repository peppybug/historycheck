"use client";

import { useEffect, useState } from "react";
import { useStoredEvents, type StoredEvent } from "@/lib/local-store";

type Ref = Omit<StoredEvent, "at">;

/** Records the visit for "Recently viewed". Renders nothing. */
export function TrackView({ event }: { event: Ref }) {
  const { add } = useStoredEvents("recent");
  useEffect(() => {
    add(event, 12);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [event.slug]);
  return null;
}

export function SaveButton({ event }: { event: Ref }) {
  const { items, add, remove } = useStoredEvents("saved");
  const saved = !!items?.some((s) => s.slug === event.slug);
  return (
    <button
      type="button"
      aria-pressed={saved}
      onClick={() => (saved ? remove(event.slug) : add(event))}
      className={`inline-flex h-10 items-center gap-2 rounded-sm border px-3.5 text-sm font-medium transition-colors duration-150 ${
        saved ? "border-ink bg-ink text-paper" : "border-line-strong bg-surface text-ink hover:border-ink"
      }`}
    >
      <svg viewBox="0 0 16 16" className="h-4 w-4" aria-hidden="true">
        <path d="M4 2h8v12l-4-3-4 3z" fill={saved ? "currentColor" : "none"} stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      </svg>
      {saved ? "Saved" : "Save"}
    </button>
  );
}

export function ShareButton({ title }: { title: string }) {
  const [state, setState] = useState<"idle" | "copied" | "failed">("idle");
  const share = async () => {
    const url = window.location.href;
    try {
      if (navigator.share) {
        await navigator.share({ title, url });
        return;
      }
      await navigator.clipboard.writeText(url);
      setState("copied");
    } catch (e) {
      if ((e as Error).name !== "AbortError") setState("failed");
    }
    setTimeout(() => setState("idle"), 2200);
  };
  return (
    <button
      type="button"
      onClick={share}
      className="inline-flex h-10 items-center gap-2 rounded-sm border border-line-strong bg-surface px-3.5 text-sm font-medium text-ink transition-colors duration-150 hover:border-ink"
    >
      <svg viewBox="0 0 16 16" className="h-4 w-4" aria-hidden="true">
        <path d="M8 10V2M5 5l3-3 3 3M3 9v5h10V9" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      <span aria-live="polite">{state === "copied" ? "Link copied" : state === "failed" ? "Copy failed" : "Share"}</span>
    </button>
  );
}
