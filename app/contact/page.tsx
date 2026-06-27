import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-5xl px-5 py-12 sm:py-16">
      <h1 className="text-2xl font-semibold tracking-tight text-slate-900 dark:text-slate-100">
        Contact
      </h1>
      <p className="mt-2 max-w-xl text-sm text-slate-600 dark:text-slate-400">
        Reach the MediaBridge team for product questions, partnerships, or
        support.
      </p>

      <div className="mt-8 max-w-xl rounded-lg border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-zinc-900">
        <p className="text-sm font-semibold text-slate-900 dark:text-slate-100">
          Email
        </p>
        <p className="mt-1">
          <a
            href="mailto:hello@getmediabridge.com"
            className="text-blue-700 hover:underline dark:text-blue-400"
          >
            hello@getmediabridge.com
          </a>
        </p>
        <p className="mt-4 text-sm text-slate-600 dark:text-slate-400">
          We aim to respond to legitimate inquiries as soon as we can.
        </p>
      </div>
    </div>
  );
}
