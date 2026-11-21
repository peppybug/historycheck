import type { Metadata } from "next";
import { adminConfigured } from "@/lib/session";
import { LoginForm } from "./login-form";

export const metadata: Metadata = { title: "Editor sign-in", robots: { index: false, follow: false } };

export default async function LoginPage({ searchParams }: { searchParams: Promise<{ next?: string }> }) {
  const { next } = await searchParams;
  return (
    <div className="container-page flex max-w-md flex-col py-20">
      <h1 className="text-2xl">Editorial workspace</h1>
      <p className="mt-2 text-ink-2">Sign in to add, edit and review historical records.</p>
      {adminConfigured() ? (
        <LoginForm next={next ?? "/admin"} />
      ) : (
        <p className="mt-6 rounded-sm border border-line bg-surface p-4 text-sm text-ink-2">
          The workspace is disabled. Set <code>ADMIN_PASSWORD</code> and a <code>SESSION_SECRET</code> of at least 32 characters in the environment, then restart the server.
        </p>
      )}
    </div>
  );
}
