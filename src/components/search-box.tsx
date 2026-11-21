"use client";

import { useRouter } from "next/navigation";
import { useEffect, useId, useRef, useState } from "react";

interface Suggestion {
  type: "event" | "person" | "place" | "period" | "civilization";
  slug: string;
  label: string;
  detail: string | null;
  thumb: string | null;
}

const TYPE_LABEL: Record<Suggestion["type"], string> = {
  event: "Event",
  person: "Person",
  place: "Place",
  period: "Period",
  civilization: "Civilization",
};

const hrefFor = (s: Suggestion) =>
  s.type === "event"
    ? `/event/${s.slug}`
    : s.type === "person"
      ? `/person/${s.slug}`
      : s.type === "place"
        ? `/place/${s.slug}`
        : s.type === "period"
          ? `/period/${s.slug}`
          : `/civilization/${s.slug}`;

/**
 * Typeahead search (WAI-ARIA combobox pattern).
 * Enter with no active option runs a full search; arrow keys move through
 * suggestions; Escape closes. Requests are debounced and cancelled.
 */
export function SearchBox({
  defaultValue = "",
  size = "lg",
  autoFocus = false,
  placeholder = "Try “Napoleon”, “1989” or “fall of Rome”",
  label = "Search the historical record",
}: {
  defaultValue?: string;
  size?: "lg" | "sm";
  autoFocus?: boolean;
  placeholder?: string;
  label?: string;
}) {
  const router = useRouter();
  const id = useId();
  const listId = `${id}-list`;
  const inputRef = useRef<HTMLInputElement>(null);
  const [value, setValue] = useState(defaultValue);
  const [items, setItems] = useState<Suggestion[]>([]);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(-1);
  const [loading, setLoading] = useState(false);

  useEffect(() => setValue(defaultValue), [defaultValue]);

  useEffect(() => {
    const q = value.trim();
    if (q.length < 2) {
      setItems([]);
      setLoading(false);
      return;
    }
    const ctrl = new AbortController();
    setLoading(true);
    const t = setTimeout(async () => {
      try {
        const res = await fetch(`/api/suggest?q=${encodeURIComponent(q)}`, { signal: ctrl.signal });
        if (!res.ok) throw new Error(String(res.status));
        const data = (await res.json()) as { items: Suggestion[] };
        setItems(data.items);
        setActive(-1);
      } catch (e) {
        if ((e as Error).name !== "AbortError") setItems([]);
      } finally {
        if (!ctrl.signal.aborted) setLoading(false);
      }
    }, 140);
    return () => {
      clearTimeout(t);
      ctrl.abort();
    };
  }, [value]);

  // "/" focuses the search from anywhere (except while typing in a field).
  useEffect(() => {
    if (size !== "lg" && !autoFocus) return;
    const onKey = (e: KeyboardEvent) => {
      const el = e.target as HTMLElement;
      if (e.key === "/" && !/input|textarea|select/i.test(el.tagName) && !el.isContentEditable) {
        e.preventDefault();
        inputRef.current?.focus();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [size, autoFocus]);

  const go = (s?: Suggestion) => {
    setOpen(false);
    if (s) router.push(hrefFor(s));
    else if (value.trim()) router.push(`/search?q=${encodeURIComponent(value.trim())}`);
  };

  const showList = open && value.trim().length >= 2;
  const big = size === "lg";

  return (
    <form
      role="search"
      className="relative w-full"
      onSubmit={(e) => {
        e.preventDefault();
        go(active >= 0 ? items[active] : undefined);
      }}
    >
      <label htmlFor={`${id}-input`} className="sr-only">
        {label}
      </label>
      <div
        className={`flex items-center rounded-sm border bg-surface transition-[border-color,box-shadow] duration-150 focus-within:border-ink focus-within:shadow-[0_0_0_3px_var(--sunken)] ${
          big ? "border-line-strong" : "border-line"
        }`}
      >
        <svg viewBox="0 0 20 20" className={`ml-3.5 shrink-0 text-muted ${big ? "h-5 w-5" : "h-4 w-4"}`} aria-hidden="true">
          <circle cx="8.5" cy="8.5" r="5.75" fill="none" stroke="currentColor" strokeWidth="1.8" />
          <path d="m13 13 4.5 4.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
        <input
          ref={inputRef}
          id={`${id}-input`}
          type="search"
          role="combobox"
          aria-expanded={showList}
          aria-controls={listId}
          aria-autocomplete="list"
          aria-activedescendant={active >= 0 ? `${id}-opt-${active}` : undefined}
          autoComplete="off"
          spellCheck={false}
          autoFocus={autoFocus}
          value={value}
          placeholder={placeholder}
          onChange={(e) => {
            setValue(e.target.value);
            setOpen(true);
          }}
          onFocus={() => setOpen(true)}
          onBlur={() => setTimeout(() => setOpen(false), 120)}
          onKeyDown={(e) => {
            if (!showList || !items.length) return;
            if (e.key === "ArrowDown") {
              e.preventDefault();
              setActive((a) => (a + 1) % items.length);
            } else if (e.key === "ArrowUp") {
              e.preventDefault();
              setActive((a) => (a <= 0 ? items.length - 1 : a - 1));
            } else if (e.key === "Escape") {
              setOpen(false);
              setActive(-1);
            }
          }}
          className={`min-w-0 flex-1 bg-transparent text-ink outline-none placeholder:text-muted [&::-webkit-search-cancel-button]:hidden ${
            big ? "px-3 py-4 text-lg" : "px-2.5 py-2 text-base"
          }`}
        />
        <button
          type="submit"
          className={`mr-1.5 shrink-0 rounded-sm bg-ink font-medium text-paper transition-colors duration-150 hover:bg-thread ${
            big ? "px-5 py-2.5 text-base" : "px-3 py-1.5 text-sm"
          }`}
        >
          Search
        </button>
      </div>

      <div aria-live="polite" className="sr-only">
        {showList && !loading ? `${items.length} suggestion${items.length === 1 ? "" : "s"}` : ""}
      </div>

      {showList && (items.length > 0 || !loading) && (
        <ul
          id={listId}
          role="listbox"
          aria-label="Suggestions"
          className="absolute inset-x-0 top-full z-40 mt-1.5 max-h-[60vh] overflow-auto rounded-sm border border-line bg-surface py-1 shadow-lift"
        >
          {items.map((s, i) => (
            <li
              key={`${s.type}-${s.slug}`}
              id={`${id}-opt-${i}`}
              role="option"
              aria-selected={i === active}
              onMouseDown={(e) => e.preventDefault()}
              onClick={() => go(s)}
              onMouseEnter={() => setActive(i)}
              className={`flex cursor-pointer items-center gap-3 px-3 py-2 ${i === active ? "bg-sunken" : ""}`}
            >
              <span className="h-10 w-10 shrink-0 overflow-hidden rounded-xs bg-sunken">
                {s.thumb ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={s.thumb} alt="" className="h-full w-full object-cover" loading="lazy" />
                ) : null}
              </span>
              <span className="min-w-0 flex-1">
                <span className="block truncate font-medium text-ink">{s.label}</span>
                {s.detail ? <span className="block truncate text-xs text-muted">{s.detail}</span> : null}
              </span>
              <span className="shrink-0 text-xs text-muted">{TYPE_LABEL[s.type]}</span>
            </li>
          ))}
          {!items.length && !loading ? (
            <li className="px-3 py-3 text-sm text-muted">
              No direct matches. Press Enter to search all records for “{value.trim()}”.
            </li>
          ) : null}
          {items.length > 0 ? (
            <li
              role="option"
              aria-selected={false}
              onMouseDown={(e) => e.preventDefault()}
              onClick={() => go()}
              className="cursor-pointer border-t border-line px-3 py-2.5 text-sm text-ink-2 hover:bg-sunken"
            >
              See all results for “{value.trim()}”
            </li>
          ) : null}
        </ul>
      )}
    </form>
  );
}
