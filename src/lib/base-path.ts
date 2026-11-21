/** Prefix for client-side fetches of static data when the site is served from a sub-path (GitHub Pages). */
export const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
export const withBase = (path: string) => `${basePath}${path}`;
