import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Sheet-driven budget & ops for agencies",
};

export default function HomePage() {
  return (
    <div className="mx-auto max-w-5xl px-5 py-12 sm:py-16">
      <section className="max-w-2xl">
        <h1 className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl dark:text-slate-100">
          MediaBridge automates paid media operations using your Google
          Sheets as the source of truth.
        </h1>
        <p className="mt-4 text-sm text-slate-600 sm:text-base dark:text-slate-400">
          Connect your Google Ads and Meta accounts, read campaign planning
          data from Google Sheets, validate budgets, calculate pacing, and
          safely sync updates to advertising platforms.
        </p>

        <ul className="mt-6 space-y-2 text-sm text-slate-600 dark:text-slate-400">
          <li>Reads campaign planning data from Google Sheets</li>
          <li>Calculates daily and lifetime budgets based on defined rules</li>
          <li>Previews all changes before applying updates</li>
          <li>Syncs approved updates directly to ad platforms</li>
        </ul>

        <div className="mt-8 flex flex-wrap items-center gap-3">
          <a
            href="mailto:hello@getmediabridge.com"
            className="rounded-md bg-[#1e40af] px-3 py-2 text-sm font-medium text-white hover:bg-blue-900"
          >
            Email us
          </a>
          <Link
            href="/contact"
            className="rounded-md border border-slate-200 bg-white px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100 dark:hover:bg-slate-800"
          >
            Contact
          </Link>
        </div>
      </section>

      <section className="mt-12 rounded-lg border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-zinc-900">
        <h2 className="text-sm font-semibold uppercase tracking-wide text-slate-500">
          How MediaBridge works
        </h2>
        <ol className="mt-4 space-y-3 text-sm text-slate-600 dark:text-slate-400">
          <li>
            <span className="font-medium text-slate-900 dark:text-slate-100">
              1. Connect accounts
            </span>{" "}
            — Securely connect your Google Ads and Meta accounts.
          </li>
          <li>
            <span className="font-medium text-slate-900 dark:text-slate-100">
              2. Link your Google Sheet
            </span>{" "}
            — Select a structured Google Sheet containing campaign plans and
            budget targets.
          </li>
          <li>
            <span className="font-medium text-slate-900 dark:text-slate-100">
              3. Validate and calculate pacing
            </span>{" "}
            — MediaBridge validates planning inputs and calculates pacing
            based on planned versus actual spend.
          </li>
          <li>
            <span className="font-medium text-slate-900 dark:text-slate-100">
              4. Preview changes
            </span>{" "}
            — Review all proposed budget updates before anything is sent to
            ad platforms.
          </li>
          <li>
            <span className="font-medium text-slate-900 dark:text-slate-100">
              5. Sync updates
            </span>{" "}
            — Apply approved changes to your campaigns with full control and
            visibility.
          </li>
        </ol>
      </section>

      <section className="mt-8 rounded-lg border border-slate-200 bg-slate-50 px-4 py-4 dark:border-slate-800 dark:bg-zinc-900/60">
        <h2 className="text-sm font-semibold uppercase tracking-wide text-slate-500">
          Data usage and safety
        </h2>
        <p className="mt-2 text-sm text-slate-700 dark:text-slate-300">
          MediaBridge only accesses the data necessary to read campaign
          structure, campaign performance data, and planning inputs from
          Google Sheets in order to validate budgets and apply user-approved
          updates. No changes are made to advertising platforms without
          explicit user confirmation.
        </p>
      </section>
    </div>
  );
}
