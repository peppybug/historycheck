/** Renders text containing ⟦ ⟧ match markers (from ts_headline) as <mark>, without injecting HTML. */
export function Highlighted({ text }: { text: string }) {
  const parts = text.split(/(⟦[^⟧]*⟧)/g);
  return (
    <>
      {parts.map((p, i) => (p.startsWith("⟦") ? <mark key={i}>{p.slice(1, -1)}</mark> : <span key={i}>{p}</span>))}
    </>
  );
}

/** Highlights query words inside a title. */
export function HighlightTerms({ text, query }: { text: string; query: string }) {
  const words = [...new Set(query.toLowerCase().split(/\s+/).filter((w) => w.length > 2))];
  if (!words.length) return <>{text}</>;
  const re = new RegExp(`(${words.map((w) => w.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")).join("|")})`, "gi");
  return (
    <>
      {text.split(re).map((p, i) => (words.includes(p.toLowerCase()) ? <mark key={i}>{p}</mark> : <span key={i}>{p}</span>))}
    </>
  );
}
