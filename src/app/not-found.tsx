import Link from "next/link";
import { SearchBox } from "@/components/search-box";

export default function NotFound() {
  return (
    <div className="container-page max-w-2xl py-20">
      <p className="text-sm text-muted">Error 404</p>
      <h1 className="mt-2 text-3xl">This page is not in the record</h1>
      <p className="mt-4 text-lg text-ink-2">The link may be mistyped, or the record may have been renamed or withdrawn for review. Try searching for it instead.</p>
      <div className="mt-8"><SearchBox size="lg" /></div>
      <p className="mt-6 text-sm"><Link className="link" href="/">Back to the homepage</Link> · <Link className="link" href="/explore">Explore</Link></p>
    </div>
  );
}
