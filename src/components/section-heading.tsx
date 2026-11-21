import Link from "next/link";

export function SectionHeading({
  id,
  title,
  deck,
  href,
  hrefLabel,
  as: Tag = "h2",
}: {
  id?: string;
  title: string;
  deck?: React.ReactNode;
  href?: string;
  hrefLabel?: string;
  as?: "h2" | "h3";
}) {
  return (
    <div className="mb-6 flex flex-wrap items-end justify-between gap-x-8 gap-y-2">
      <div className="max-w-2xl">
        <Tag id={id} className={Tag === "h2" ? "text-2xl" : "text-xl"}>
          {title}
        </Tag>
        {deck ? <p className="mt-2 text-ink-2">{deck}</p> : null}
      </div>
      {href ? (
        <Link href={href} className="link shrink-0 text-sm font-medium text-ink">
          {hrefLabel ?? "See all"}
        </Link>
      ) : null}
    </div>
  );
}
