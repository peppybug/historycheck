import Link from "next/link";
import type { EventCardData } from "@/lib/queries";
import { ArchiveImage, NoImage } from "./archive-image";
import { yearOf } from "./event-card";

const VERB: Record<string, string> = { led_to: "led to", contributed_to: "contributed to" };

/**
 * A chain of causally linked events, drawn as a red thread.
 * Solid segments are direct causes (led_to); dashed segments are
 * contributing causes (contributed_to).
 */
export function ThreadChain({ events, types }: { events: EventCardData[]; types: string[] }) {
  return (
    <ol className="relative">
      {events.map((e, i) => {
        const t = types[i];
        return (
          <li key={e.slug} className="relative">
            <Link href={`/event/${e.slug}`} className="group relative z-10 flex items-center gap-3.5 rounded-sm py-1.5 pr-2">
              <span className="relative h-14 w-14 shrink-0 overflow-hidden rounded-xs border border-line bg-sunken">
                {e.image ? <ArchiveImage image={e.image} sizes="56px" /> : <NoImage year="" label=" " />}
              </span>
              <span className="min-w-0">
                <span className="block text-xs text-muted tabular">{yearOf(e)}</span>
                <span className="block font-serif text-[1.15rem] leading-snug text-ink group-hover:underline group-hover:decoration-thread group-hover:underline-offset-4">
                  {e.title}
                </span>
              </span>
            </Link>
            {i < events.length - 1 ? (
              <div className="flex h-9 items-center pl-[27px]" aria-hidden={false}>
                <svg width="2" height="36" className="shrink-0 overflow-visible" aria-hidden="true">
                  <line
                    x1="1"
                    y1="0"
                    x2="1"
                    y2="36"
                    stroke="var(--thread)"
                    strokeWidth="2.5"
                    strokeDasharray={t === "contributed_to" ? "6 4" : undefined}
                  />
                </svg>
                <span className="ml-5 text-xs font-medium text-thread-ink">{VERB[t] ?? "followed by"}</span>
              </div>
            ) : null}
          </li>
        );
      })}
    </ol>
  );
}
