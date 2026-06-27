import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
};

export default function PrivacyPage() {
  return (
    <div className="mx-auto max-w-5xl px-5 py-12 sm:py-16">
      <h1 className="text-2xl font-semibold tracking-tight text-slate-900 dark:text-slate-100">
        Privacy Policy
      </h1>
      <p className="mt-2 max-w-2xl text-sm text-slate-600 dark:text-slate-400">
        Last updated: March 28, 2026. This policy describes how MediaBridge
        (&quot;we&quot;, &quot;us&quot;) handles information in connection
        with this website and related services.
      </p>

      <div className="mt-8 max-w-2xl space-y-6 text-sm text-slate-600 dark:text-slate-400">
        <section>
          <h2 className="text-sm font-semibold uppercase tracking-wide text-slate-500">
            Information we collect
          </h2>
          <p className="mt-2">
            We may collect information you provide directly, such as your
            name, email address, or message content when you contact us. We
            may also collect standard technical data sent by your browser
            (for example, IP address, device type, and approximate location
            derived from IP) as typical for web servers and analytics that we
            enable.
          </p>
        </section>

        <section>
          <h2 className="text-sm font-semibold uppercase tracking-wide text-slate-500">
            Data protection and security
          </h2>
          <p className="mt-2">
            MediaBridge takes appropriate technical and organizational
            measures to protect user data accessed through Google APIs and
            other integrations.
          </p>

          <h3 className="mt-4 font-medium text-slate-900 dark:text-slate-100">
            Data transmission
          </h3>
          <p className="mt-1">
            All data transmitted between MediaBridge and third-party
            services, including Google APIs, is encrypted using HTTPS/TLS.
          </p>

          <h3 className="mt-4 font-medium text-slate-900 dark:text-slate-100">
            Authentication and access
          </h3>
          <p className="mt-1">
            Access to Google user data is authorized through OAuth 2.0.
            MediaBridge only accesses data that a user has explicitly granted
            permission to access. OAuth tokens are stored securely and are
            not shared with third parties.
          </p>

          <h3 className="mt-4 font-medium text-slate-900 dark:text-slate-100">
            Limited use of Google user data
          </h3>
          <p className="mt-1">
            MediaBridge uses Google user data only to provide user-requested
            product functionality, including reading campaign planning data,
            validating budgets, calculating pacing, and applying
            user-approved updates to connected advertising platforms. Google
            user data is not sold, rented, transferred, or used for
            advertising purposes.
          </p>

          <h3 className="mt-4 font-medium text-slate-900 dark:text-slate-100">
            Access controls
          </h3>
          <p className="mt-1">
            Access to user data is restricted to authorized systems and
            personnel only where necessary to operate, maintain, or support
            the service. MediaBridge uses safeguards designed to prevent
            unauthorized access, disclosure, alteration, or destruction of
            user data.
          </p>

          <h3 className="mt-4 font-medium text-slate-900 dark:text-slate-100">
            Data storage and retention
          </h3>
          <p className="mt-1">
            MediaBridge does not store sensitive Google Ads or Google Sheets
            data beyond what is necessary to provide the service. Data is
            retained only as long as needed for product functionality,
            operational records, security, or legal obligations.
          </p>

          <h3 className="mt-4 font-medium text-slate-900 dark:text-slate-100">
            User revocation and deletion
          </h3>
          <p className="mt-1">
            Users may revoke MediaBridge&apos;s access to their Google
            account at any time through their Google account permissions.
            After access is revoked, MediaBridge can no longer access Google
            user data. Users may also request deletion of associated data by
            contacting MediaBridge.
          </p>

          <h3 className="mt-4 font-medium text-slate-900 dark:text-slate-100">
            Google API Limited Use compliance
          </h3>
          <p className="mt-1">
            MediaBridge&apos;s use and transfer of information received from
            Google APIs adheres to the Google API Services User Data Policy,
            including the Limited Use requirements.
          </p>
        </section>

        <section>
          <h2 className="text-sm font-semibold uppercase tracking-wide text-slate-500">
            How we use information
          </h2>
          <p className="mt-2">
            We use contact and technical information to respond to
            inquiries, operate and secure our services, comply with law, and
            improve our website experience.
          </p>
        </section>

        <section>
          <h2 className="text-sm font-semibold uppercase tracking-wide text-slate-500">
            Sharing
          </h2>
          <p className="mt-2">
            We do not sell your personal information. We may share
            information with service providers who assist us in hosting,
            email delivery, or security, subject to appropriate safeguards.
          </p>
        </section>

        <section>
          <h2 className="text-sm font-semibold uppercase tracking-wide text-slate-500">
            Retention
          </h2>
          <p className="mt-2">
            We retain information only as long as needed for the purposes
            above or as required by law.
          </p>
        </section>

        <section>
          <h2 className="text-sm font-semibold uppercase tracking-wide text-slate-500">
            Your choices
          </h2>
          <p className="mt-2">
            You may contact us to ask about the personal information we hold
            or to request correction or deletion where applicable.
          </p>
        </section>

        <section>
          <h2 className="text-sm font-semibold uppercase tracking-wide text-slate-500">
            Contact
          </h2>
          <p className="mt-2">
            Questions about this policy:{" "}
            <a
              href="mailto:hello@getmediabridge.com"
              className="text-blue-700 hover:underline dark:text-blue-400"
            >
              hello@getmediabridge.com
            </a>
          </p>
        </section>
      </div>
    </div>
  );
}
