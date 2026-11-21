/**
 * Editorial review of automated date-check discrepancies.
 *
 * When scripts/enrich.ts finds that an authored date differs from Wikidata,
 * the event is held back (status "in_review") until an editor either fixes
 * the content or records here why the authored date stands. Each note is
 * stored on the event's review notes and the event is published as
 * "partially verified".
 */
export const reviewedDates: Record<string, string> = {};
