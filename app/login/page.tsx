import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Log in",
};

export default function LoginPage() {
  return (
    <div className="mx-auto max-w-5xl px-5 py-12 sm:py-16">
      <div className="mx-auto max-w-sm rounded-lg border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-zinc-900">
        <h1 className="text-2xl font-semibold tracking-tight text-slate-900 dark:text-slate-100">
          Log in
        </h1>
        <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
          Account login is coming soon.
        </p>

        <form className="mt-6 space-y-4">
          <div>
            <label
              htmlFor="email"
              className="text-sm font-medium text-slate-700 dark:text-slate-300"
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              disabled
              placeholder="you@agency.com"
              className="mt-1 w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 placeholder:text-slate-400 focus:border-slate-500 focus:outline-none focus:ring-1 focus:ring-slate-500 disabled:opacity-60 dark:border-slate-600 dark:bg-zinc-950 dark:text-slate-100 dark:placeholder:text-slate-500"
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="text-sm font-medium text-slate-700 dark:text-slate-300"
            >
              Password
            </label>
            <input
              id="password"
              type="password"
              disabled
              placeholder="••••••••"
              className="mt-1 w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 placeholder:text-slate-400 focus:border-slate-500 focus:outline-none focus:ring-1 focus:ring-slate-500 disabled:opacity-60 dark:border-slate-600 dark:bg-zinc-950 dark:text-slate-100 dark:placeholder:text-slate-500"
            />
          </div>
          <button
            type="button"
            disabled
            className="w-full rounded-md bg-[#1e40af] px-3 py-2 text-sm font-medium text-white opacity-60 dark:bg-[#1e40af]"
          >
            Log in
          </button>
        </form>
      </div>
    </div>
  );
}
