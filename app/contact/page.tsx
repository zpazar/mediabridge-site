import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
};

export default function ContactPage() {
  return (
    <div className="site-main">
      <h1 className="page-title">Contact</h1>
      <p className="page-lead">
        Reach the MediaBridge team for product questions, partnerships, or
        support.
      </p>
      <div className="contact-card">
        <p>
          <strong style={{ color: "var(--text)" }}>Email</strong>
        </p>
        <p>
          <a href="mailto:hello@getmediabridge.com">hello@getmediabridge.com</a>
        </p>
        <p>
          We aim to respond to legitimate inquiries as soon as we can.
        </p>
      </div>
    </div>
  );
}
