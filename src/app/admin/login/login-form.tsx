"use client";

import { useActionState } from "react";
import { loginAction } from "../actions";

export function LoginForm({ next }: { next: string }) {
  const [state, action, pending] = useActionState(loginAction, null);
  return (
    <form action={action} className="mt-8 grid gap-4">
      <input type="hidden" name="next" value={next} />
      <input type="text" name="username" autoComplete="username" value="editor" readOnly hidden />
      <div>
        <label htmlFor="password" className="text-sm font-semibold">Password</label>
        <input
          id="password"
          name="password"
          type="password"
          autoComplete="current-password"
          required
          aria-invalid={!!state?.errors?.password}
          aria-describedby="pw-error"
          className="mt-1 w-full rounded-sm border border-line-strong bg-surface px-3 py-2.5 text-base"
        />
        <p id="pw-error" className="mt-1 text-sm text-thread-ink" role="alert">{state?.errors?.password ?? state?.message ?? ""}</p>
      </div>
      <button disabled={pending} className="rounded-sm bg-ink px-4 py-2.5 font-medium text-paper hover:bg-thread disabled:opacity-60">
        {pending ? "Signing in…" : "Sign in"}
      </button>
    </form>
  );
}
