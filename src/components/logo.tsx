/**
 * Historycheck mark: an "H" whose crossbar is a timeline running through
 * a single red event node — the record and the thread that connects it.
 */
export function LogoMark({ className = "h-6 w-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" focusable="false">
      <rect x="4" y="3" width="2.6" height="18" rx="0.6" fill="currentColor" />
      <rect x="17.4" y="3" width="2.6" height="18" rx="0.6" fill="currentColor" />
      <rect x="1" y="11.1" width="22" height="1.8" rx="0.9" fill="currentColor" />
      <circle cx="12" cy="12" r="3.1" fill="var(--thread)" stroke="var(--paper)" strokeWidth="1.4" />
    </svg>
  );
}

export function Wordmark() {
  return (
    <span className="inline-flex items-center gap-2 text-ink">
      <LogoMark />
      <span className="font-serif text-[1.3rem] font-semibold leading-none tracking-[-0.01em]">Historycheck</span>
    </span>
  );
}
