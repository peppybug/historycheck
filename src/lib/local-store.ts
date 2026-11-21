"use client";

import { useCallback, useEffect, useState } from "react";

/** Minimal event reference kept in the visitor's browser (no account needed). */
export interface StoredEvent {
  slug: string;
  title: string;
  year: string;
  thumb: string | null;
  at: number;
}

const KEYS = { saved: "hc-saved", recent: "hc-recent" } as const;
type Key = keyof typeof KEYS;
const EVT = "hc-store-change";

function read(key: Key): StoredEvent[] {
  try {
    const v = JSON.parse(localStorage.getItem(KEYS[key]) ?? "[]");
    return Array.isArray(v) ? v.filter((x) => x && typeof x.slug === "string") : [];
  } catch {
    return [];
  }
}

function write(key: Key, list: StoredEvent[]) {
  try {
    localStorage.setItem(KEYS[key], JSON.stringify(list));
    window.dispatchEvent(new CustomEvent(EVT, { detail: key }));
  } catch {}
}

export function useStoredEvents(key: Key) {
  const [items, setItems] = useState<StoredEvent[] | null>(null);
  useEffect(() => {
    const sync = () => setItems(read(key));
    sync();
    const onChange = (e: Event) => ((e as CustomEvent).detail === key ? sync() : null);
    window.addEventListener(EVT, onChange);
    window.addEventListener("storage", sync);
    return () => {
      window.removeEventListener(EVT, onChange);
      window.removeEventListener("storage", sync);
    };
  }, [key]);

  const add = useCallback(
    (e: Omit<StoredEvent, "at">, max = 60) => {
      const list = read(key).filter((x) => x.slug !== e.slug);
      write(key, [{ ...e, at: Date.now() }, ...list].slice(0, max));
    },
    [key],
  );
  const remove = useCallback((slug: string) => write(key, read(key).filter((x) => x.slug !== slug)), [key]);
  const clear = useCallback(() => write(key, []), [key]);
  return { items, add, remove, clear };
}
