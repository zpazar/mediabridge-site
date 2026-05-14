import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
};

export default function PrivacyPage() {
  return (
    <div className="site-main">
      <h1 className="page-title">Privacy Policy</h1>
      <p className="page-lead">
        Last updated: March 28, 2026. This policy describes how MediaBridge
        (&quot;we&quot;, &quot;us&quot;) handles information in connection with
        this website and related services.
      </p>
      <div className="prose">
        <h2>Information we collect</h2>
        <p>
          We may collect information you provide directly, such as your name,
          email address, or message content when you contact us. We may also
          collect standard technical data sent by your browser (for example,
          IP address, device type, and approximate location derived from IP) as
          typical for web servers and analytics that we enable.
        </p>
        <h2>Data Protection and Security</h2>
        <p>
          MediaBridge takes appropriate technical and organizational measures to
          protect user data accessed through Google APIs and other integrations.
        </p>
        <h3>Data Transmission</h3>
        <p>
          All data transmitted between MediaBridge and third-party services,
          including Google APIs, is encrypted using HTTPS/TLS.
        </p>
        <h3>Authentication and Access</h3>
        <p>
          Access to Google user data is authorized through OAuth 2.0. MediaBridge
          only accesses data that a user has explicitly granted permission to
          access. OAuth tokens are stored securely and are not shared with third
          parties.
        </p>
        <h3>Limited Use of Google User Data</h3>
        <p>
          MediaBridge uses Google user data only to provide user-requested
          product functionality, including reading campaign planning data,
          validating budgets, calculating pacing, and applying user-approved
          updates to connected advertising platforms. Google user data is not
          sold, rented, transferred, or used for advertising purposes.
        </p>
        <h3>Access Controls</h3>
        <p>
          Access to user data is restricted to authorized systems and personnel
          only where necessary to operate, maintain, or support the service.
          MediaBridge uses safeguards designed to prevent unauthorized access,
          disclosure, alteration, or destruction of user data.
        </p>
        <h3>Data Storage and Retention</h3>
        <p>
          MediaBridge does not store sensitive Google Ads or Google Sheets data
          beyond what is necessary to provide the service. Data is retained only
          as long as needed for product functionality, operational records,
          security, or legal obligations.
        </p>
        <h3>User Revocation and Deletion</h3>
        <p>
          Users may revoke MediaBridge&apos;s access to their Google account at
          any time through their Google account permissions. After access is
          revoked, MediaBridge can no longer access Google user data. Users may
          also request deletion of associated data by contacting MediaBridge.
        </p>
        <h3>Google API Limited Use Compliance</h3>
        <p>
          MediaBridge&apos;s use and transfer of information received from Google
          APIs adheres to the Google API Services User Data Policy, including the
          Limited Use requirements.
        </p>
        <h2>How we use information</h2>
        <p>
          We use contact and technical information to respond to inquiries,
          operate and secure our services, comply with law, and improve our
          website experience.
        </p>
        <h2>Sharing</h2>
        <p>
          We do not sell your personal information. We may share information with
          service providers who assist us in hosting, email delivery, or
          security, subject to appropriate safeguards.
        </p>
        <h2>Retention</h2>
        <p>
          We retain information only as long as needed for the purposes above
          or as required by law.
        </p>
        <h2>Your choices</h2>
        <p>
          You may contact us to ask about the personal information we hold or
          to request correction or deletion where applicable.
        </p>
        <h2>Contact</h2>
        <p>
          Questions about this policy:{" "}
          <a href="mailto:hello@getmediabridge.com">hello@getmediabridge.com</a>
        </p>
      </div>
    </div>
  );
}
