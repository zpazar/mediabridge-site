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
