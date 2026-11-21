/**
 * Precision-aware historical date formatting.
 * BCE years are negative integers; there is no year zero.
 * A date is never shown more precisely than it is known.
 */
export type Precision = "day" | "month" | "year" | "approximate" | "decade" | "century";

export interface HDate {
  year: number;
  month?: number | null;
  day?: number | null;
  precision?: Precision | null;
}

const MONTHS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const MONTHS_SHORT = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

export const monthName = (m: number) => MONTHS[m - 1];

export function formatYear(year: number, { era = "auto" }: { era?: "auto" | "always" | "never" } = {}): string {
  if (year < 0) return era === "never" ? `${-year}` : `${-year} BCE`;
  if (era === "always" || (era === "auto" && year < 1000)) return `${year} CE`;
  return `${year}`;
}

function ordinal(n: number) {
  const s = ["th", "st", "nd", "rd"];
  const v = n % 100;
  return n + (s[(v - 20) % 10] || s[v] || s[0]);
}

export function centuryLabel(year: number): string {
  if (year < 0) return `${ordinal(Math.ceil(-year / 100))} century BCE`;
  return `${ordinal(Math.ceil(year / 100))} century`;
}

export function formatDate(d: HDate, opts: { short?: boolean; era?: "auto" | "always" | "never" } = {}): string {
  const p = d.precision ?? (d.day ? "day" : d.month ? "month" : "year");
  const y = formatYear(d.year, { era: opts.era });
  const months = opts.short ? MONTHS_SHORT : MONTHS;
  switch (p) {
    case "day":
      return d.month && d.day ? `${d.day} ${months[d.month - 1]} ${y}` : y;
    case "month":
      return d.month ? `${months[d.month - 1]} ${y}` : y;
    case "approximate":
      return `c. ${y}`;
    case "decade":
      return d.year < 0 ? `${-d.year}s BCE` : `${d.year}s`;
    case "century":
      return centuryLabel(d.year);
    default:
      return y;
  }
}

/** Formats a date range, collapsing shared parts ("24–29 October 1929", "431–404 BCE"). */
export function formatRange(start: HDate, end?: HDate | null, opts: { short?: boolean } = {}): string {
  if (!end || end.year == null) return formatDate(start, opts);
  const sp = start.precision ?? "year";
  const ep = end.precision ?? (end.day ? "day" : end.month ? "month" : "year");
  const months = opts.short ? MONTHS_SHORT : MONTHS;
  const bothBce = start.year < 0 && end.year < 0;
  const sameYear = start.year === end.year;

  if (sameYear && sp === "day" && ep === "day" && start.month === end.month && start.day && end.day)
    return `${start.day}–${end.day} ${months[start.month! - 1]} ${formatYear(start.year)}`;
  if (sameYear && sp === "day" && ep === "day" && start.month && end.month)
    return `${start.day} ${months[start.month - 1]} – ${end.day} ${months[end.month - 1]} ${formatYear(start.year)}`;
  if (sameYear && (sp === "month" || sp === "day") && ep === "month" && start.month && end.month)
    return `${months[start.month - 1]} – ${months[end.month - 1]} ${formatYear(start.year)}`;
  if (sameYear) return formatDate(start, opts);

  if ((sp === "year" || sp === "approximate") && ep === "year") {
    const a = bothBce ? `${-start.year}` : formatYear(start.year);
    const b = formatYear(end.year, { era: bothBce ? "always" : start.year < 0 ? "always" : "auto" });
    const prefix = sp === "approximate" ? "c. " : "";
    return `${prefix}${a} – ${b}`;
  }
  const a = formatDate(start, { ...opts, era: bothBce ? "never" : start.year < 0 ? "always" : "auto" });
  const b = formatDate({ ...end, precision: ep }, { ...opts, era: start.year < 0 ? "always" : "auto" });
  return `${a} – ${b}`;
}

/** Short label for cards and timelines: year or year range only. */
export function yearLabel(start: HDate, end?: HDate | null): string {
  const approx = start.precision === "approximate" ? "c. " : "";
  if (start.precision === "century") return centuryLabel(start.year);
  if (!end || end.year == null || end.year === start.year) return approx + formatYear(start.year);
  const bothBce = start.year < 0 && end.year < 0;
  return `${approx}${bothBce ? -start.year : formatYear(start.year)}–${formatYear(end.year, { era: start.year < 0 ? "always" : "auto" })}`;
}

export function precisionNote(p: Precision | null | undefined): string | null {
  switch (p) {
    case "approximate":
      return "Approximate date";
    case "year":
      return "Known to the year";
    case "month":
      return "Known to the month";
    case "decade":
      return "Known to the decade";
    case "century":
      return "Known to the century";
    default:
      return null;
  }
}

/** Parses free-text years typed into search: "1989", "44 BC", "44 BCE", "300 AD", "1960s", "15th century". */
export function parseYearQuery(q: string): { from: number; to: number; label: string } | null {
  const s = q.trim().toLowerCase();
  let m = /^(\d{1,4})\s*(bc|bce|b\.c\.|b\.c\.e\.)$/.exec(s);
  if (m) return { from: -Number(m[1]), to: -Number(m[1]), label: `${m[1]} BCE` };
  m = /^(?:ad|ce)?\s*(\d{1,4})\s*(ad|ce|a\.d\.)?$/.exec(s);
  if (m && (m[2] || /^\d{3,4}$/.test(m[1]))) return { from: Number(m[1]), to: Number(m[1]), label: m[1] };
  m = /^(\d{3,4})s$/.exec(s);
  if (m) {
    const y = Number(m[1]);
    const span = y % 100 === 0 ? 99 : 9;
    return { from: y, to: y + span, label: `${y}s` };
  }
  m = /^(\d{1,2})(st|nd|rd|th)\s+century(\s+(bc|bce))?$/.exec(s);
  if (m) {
    const c = Number(m[1]);
    return m[3] ? { from: -c * 100, to: -(c - 1) * 100 - 1, label: `${m[0]}` } : { from: (c - 1) * 100 + 1, to: c * 100, label: `${m[0]}` };
  }
  m = /^(\d{3,4})\s*[-–]\s*(\d{3,4})$/.exec(s);
  if (m) return { from: Number(m[1]), to: Number(m[2]), label: `${m[1]}–${m[2]}` };
  return null;
}

export const lifespan = (b: HDate | null, d: HDate | null) => {
  if (!b && !d) return null;
  const bs = b ? formatDate(b, { short: true }) : "?";
  const ds = d ? formatDate(d, { short: true }) : "";
  return d ? `${bs} – ${ds}` : `born ${bs}`;
};
