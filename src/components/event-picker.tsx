"use client";

import { useRouter } from "next/navigation";
import { formatYear } from "@/lib/dates";

export function EventPicker({ options, value }: { options: { slug: string; title: string; startYear: number; rels: number }[]; value: string }) {
  const router = useRouter();
  return (
    <div>
      <label htmlFor="pick" className="text-sm font-semibold">Start from an event</label>
      <select
        id="pick"
        value={value}
        onChange={(e) => router.push(`/connections?event=${e.target.value}`)}
        className="mt-1 block w-full max-w-xl rounded-sm border border-line-strong bg-surface px-3 py-2.5 text-base"
      >
        {options.map((o) => (
          <option key={o.slug} value={o.slug}>
            {formatYear(o.startYear)} · {o.title} ({o.rels} link{o.rels === 1 ? "" : "s"})
          </option>
        ))}
      </select>
    </div>
  );
}
