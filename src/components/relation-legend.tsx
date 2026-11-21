/** Visual key for the three kinds of connection drawn across the site. */
export function RelationLegend({ className = "" }: { className?: string }) {
  return (
    <dl className={`grid gap-3 text-sm ${className}`}>
      <div className="flex items-start gap-3">
        <dt className="mt-2.5 shrink-0">
          <svg width="40" height="6" aria-hidden="true"><line x1="0" y1="3" x2="40" y2="3" stroke="var(--thread)" strokeWidth="2.5" /></svg>
          <span className="sr-only">Solid red line</span>
        </dt>
        <dd><strong className="font-semibold">Led to.</strong> A direct cause, documented in the sources.</dd>
      </div>
      <div className="flex items-start gap-3">
        <dt className="mt-2.5 shrink-0">
          <svg width="40" height="6" aria-hidden="true"><line x1="0" y1="3" x2="40" y2="3" stroke="var(--thread)" strokeWidth="2" strokeDasharray="7 4" /></svg>
          <span className="sr-only">Dashed red line</span>
        </dt>
        <dd><strong className="font-semibold">Contributed to.</strong> One of several causes.</dd>
      </div>
      <div className="flex items-start gap-3">
        <dt className="mt-2.5 shrink-0">
          <svg width="40" height="6" aria-hidden="true"><line x1="0" y1="3" x2="40" y2="3" stroke="var(--line-strong)" strokeWidth="2" strokeDasharray="2 4" strokeLinecap="round" /></svg>
          <span className="sr-only">Dotted grey line</span>
        </dt>
        <dd><strong className="font-semibold">Followed by, part of, related to.</strong> A sequence or theme, with no claim of cause.</dd>
      </div>
    </dl>
  );
}
