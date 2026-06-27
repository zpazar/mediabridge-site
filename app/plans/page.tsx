import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Plans",
};

export default function PlansPage() {
  return (
    <div className="mx-auto max-w-5xl px-5 py-12 sm:py-16">
      <h1 className="text-2xl font-semibold tracking-tight text-slate-900 dark:text-slate-100">
        Plans
      </h1>
      <p className="mt-2 max-w-xl text-sm text-slate-600 dark:text-slate-400">
        Pricing and plan details are coming soon.
      </p>

      <div className="mt-8 rounded-lg border border-slate-200 bg-slate-50 px-4 py-4 text-sm text-slate-700 dark:border-slate-800 dark:bg-zinc-900/60 dark:text-slate-300">
        Reach out at{" "}
        <a
          href="mailto:hello@getmediabridge.com"
          className="text-blue-700 hover:underline dark:text-blue-400"
        >
          hello@getmediabridge.com
        </a>{" "}
        if you&apos;d like early access or pricing information.
      </div>
    </div>
  );
}
