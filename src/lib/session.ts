/**
 * Stateless admin session: cookie value is "<expiryMs>.<base64url HMAC-SHA256(expiry)>"
 * signed with SESSION_SECRET. Uses Web Crypto so it runs in the proxy and in Node.
 */
export const SESSION_COOKIE = "hc_admin";
export const SESSION_TTL_MS = 1000 * 60 * 60 * 8; // 8 hours

const enc = new TextEncoder();

function b64url(buf: ArrayBuffer) {
  let s = "";
  for (const b of new Uint8Array(buf)) s += String.fromCharCode(b);
  return btoa(s).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
}

async function key() {
  const secret = process.env.SESSION_SECRET;
  if (!secret || secret.length < 32) throw new Error("SESSION_SECRET must be set to at least 32 characters.");
  return crypto.subtle.importKey("raw", enc.encode(secret), { name: "HMAC", hash: "SHA-256" }, false, ["sign"]);
}

export async function signSession(expiry = Date.now() + SESSION_TTL_MS) {
  const sig = await crypto.subtle.sign("HMAC", await key(), enc.encode(String(expiry)));
  return `${expiry}.${b64url(sig)}`;
}

/** Constant-time string comparison. */
function safeEqual(a: string, b: string) {
  if (a.length !== b.length) return false;
  let diff = 0;
  for (let i = 0; i < a.length; i++) diff |= a.charCodeAt(i) ^ b.charCodeAt(i);
  return diff === 0;
}

export async function verifySession(token: string | undefined | null): Promise<boolean> {
  if (!token) return false;
  const [exp, sig] = token.split(".");
  const expiry = Number(exp);
  if (!sig || !Number.isFinite(expiry) || expiry < Date.now()) return false;
  try {
    const expected = (await signSession(expiry)).split(".")[1];
    return safeEqual(sig, expected);
  } catch {
    return false;
  }
}

export const adminConfigured = () => !!process.env.ADMIN_PASSWORD && (process.env.SESSION_SECRET?.length ?? 0) >= 32;
