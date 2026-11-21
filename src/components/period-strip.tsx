import Link from "next/link";
import { formatYear } from "@/lib/dates";

interface P {
  slug: string;
  name: string;
  startYear: number;
  endYear: number;
  count: number;
}

/**
 * The periods of the record as one horizontal band. Widths are set by the
 * number of events in each period (not by duration, which would make the
 * modern era a sliver), and labelled with their real date spans.
 */
export function PeriodStrip({ periods }: { periods: P[] }) {
  const total = periods.reduce((a, p) => a + Math.max(p.count, 4), 0);
  return (
    <ol className="grid grid-cols-1 gap-px overflow-hidden rounded-sm border border-line bg-line sm:grid-cols-3 xl:flex xl:flex-row xl:gap-0 xl:bg-surface">
      {periods.map((p, i) => (
        <li
          key={p.slug}
          style={{ flexGrow: Math.max(p.count, 4) / total }}
          className={`min-w-0 bg-surface xl:min-w-[108px] xl:basis-0 ${i ? "xl:border-l xl:border-line" : ""}`}
        >
          <Link href={`/period/${p.slug}`} className="group flex h-full flex-row items-baseline justify-between gap-3 p-4 hover:bg-sunken sm:flex-col sm:items-start sm:justify-start">
            <span className="text-xs text-muted tabular">
              {formatYear(p.startYear)} – {p.endYear > 2025 ? "today" : formatYear(p.endYear)}
            </span>
            <span className="font-serif text-lg leading-tight text-ink group-hover:underline group-hover:decoration-thread group-hover:underline-offset-4 sm:mt-1">
              {p.name}
            </span>
            <span className="shrink-0 text-xs text-muted tabular sm:mt-auto sm:pt-3">{p.count} events</span>
          </Link>
        </li>
      ))}
    </ol>
  );
}
