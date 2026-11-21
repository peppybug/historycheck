const COPY = {
  verified: { label: "Dates verified", detail: "Dates match Wikidata", cls: "bg-verified-soft text-verified" },
  partial: { label: "Partially verified", detail: "Some details not machine-checked", cls: "bg-partial-soft text-partial" },
  unverified: { label: "Under review", detail: "Awaiting editorial review", cls: "bg-sunken text-ink-2" },
} as const;

export function VerificationBadge({ status }: { status: keyof typeof COPY }) {
  const c = COPY[status];
  return (
    <span className={`inline-flex items-center gap-1.5 rounded-sm px-2 py-1 text-xs font-semibold ${c.cls}`} title={c.detail}>
      <svg viewBox="0 0 12 12" className="h-3 w-3" aria-hidden="true">
        {status === "verified" ? (
          <path d="M2.5 6.2 5 8.5l4.5-5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        ) : (
          <circle cx="6" cy="6" r="3" fill="currentColor" />
        )}
      </svg>
      {c.label}
    </span>
  );
}
