import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
};

export default function TermsPage() {
  return (
    <div className="mx-auto max-w-5xl px-5 py-12 sm:py-16">
      <h1 className="text-2xl font-semibold tracking-tight text-slate-900 dark:text-slate-100">
        Terms of Service
      </h1>
      <p className="mt-2 max-w-2xl text-sm text-slate-600 dark:text-slate-400">
        Last updated: June 27, 2026
      </p>

      <div className="mt-8 max-w-2xl space-y-6 text-sm text-slate-600 dark:text-slate-400">
        <p>
          MediaBridge is a marketing operations platform that helps agencies
          manage paid media workflows on Google Ads and Meta (Facebook and
          Instagram) Ads.
        </p>

        <section>
          <h2 className="text-sm font-semibold uppercase tracking-wide text-slate-500">
            Accounts
          </h2>
          <p className="mt-2">
            You need an account to use MediaBridge. You are responsible for
            maintaining the confidentiality of your login credentials and for
            all activity that occurs under your account.
          </p>
        </section>

        <section>
          <h2 className="text-sm font-semibold uppercase tracking-wide text-slate-500">
            Use of service
          </h2>
          <p className="mt-2">
            By using MediaBridge, you agree to use the platform only for
            lawful purposes and in accordance with applicable platform
            policies, including those of Google Ads and Meta.
          </p>
        </section>

        <section>
          <h2 className="text-sm font-semibold uppercase tracking-wide text-slate-500">
            Budget previews and syncing
          </h2>
          <p className="mt-2">
            MediaBridge reads campaign and ad set budget and spend data
            directly from Google Ads and Meta. Before any budget or end-date
            change is applied to a connected account, MediaBridge generates a
            preview of the proposed change for your review. Changes are only
            sent to Google Ads or Meta after you explicitly confirm a sync.
            MediaBridge does not apply changes to your advertising accounts
            without this confirmation step.
          </p>
        </section>

        <section>
          <h2 className="text-sm font-semibold uppercase tracking-wide text-slate-500">
            User responsibility
          </h2>
          <p className="mt-2">
            Users are responsible for reviewing all changes before
            confirming a sync. MediaBridge provides tools for validation and
            preview but does not guarantee performance outcomes.
          </p>
        </section>

        <section>
          <h2 className="text-sm font-semibold uppercase tracking-wide text-slate-500">
            No guarantees
          </h2>
          <p className="mt-2">
            MediaBridge is provided &quot;as is&quot; without warranties of
            any kind, express or implied.
          </p>
        </section>

        <section>
          <h2 className="text-sm font-semibold uppercase tracking-wide text-slate-500">
            Limitation of liability
          </h2>
          <p className="mt-2">
            MediaBridge is not liable for any direct or indirect damages
            resulting from the use of the platform.
          </p>
        </section>

        <section>
          <h2 className="text-sm font-semibold uppercase tracking-wide text-slate-500">
            Fees
          </h2>
          <p className="mt-2">
            MediaBridge is currently provided free of charge. We may
            introduce paid plans in the future; if we do, we will provide
            notice before any fees apply to your account.
          </p>
        </section>

        <section>
          <h2 className="text-sm font-semibold uppercase tracking-wide text-slate-500">
            Disconnecting and account deletion
          </h2>
          <p className="mt-2">
            You may disconnect your Google Ads or Meta accounts at any time
            through MediaBridge or through your Google or Meta account
            settings, which immediately revokes MediaBridge&apos;s access. To
            request deletion of your account or associated data, contact us
            at the email below.
          </p>
        </section>

        <section>
          <h2 className="text-sm font-semibold uppercase tracking-wide text-slate-500">
            Third-party services
          </h2>
          <p className="mt-2">
            MediaBridge integrates with Google Ads, Meta, and Supabase (for
            account authentication and data storage). Use of those platforms
            is subject to their respective terms and conditions.
          </p>
        </section>

        <section>
          <h2 className="text-sm font-semibold uppercase tracking-wide text-slate-500">
            Changes
          </h2>
          <p className="mt-2">We may update these terms as the product evolves.</p>
        </section>

        <section>
          <h2 className="text-sm font-semibold uppercase tracking-wide text-slate-500">
            Contact
          </h2>
          <p className="mt-2">
            For questions regarding these terms, contact{" "}
            <a
              href="mailto:hello@getmediabridge.com"
              className="text-blue-700 hover:underline dark:text-blue-400"
            >
              hello@getmediabridge.com
            </a>
            .
          </p>
        </section>
      </div>
    </div>
  );
}
