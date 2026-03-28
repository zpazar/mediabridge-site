import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Sheet-driven budget & ops for agencies",
};

export default function HomePage() {
  return (
    <div className="site-main">
      <section className="hero">
        <h1>Marketing operations, grounded in your sheet.</h1>
        <p>
          MediaBridge helps agencies run budget and related workflows from a
          clear, spreadsheet-first layer—so teams stay aligned and changes are
          traceable.
        </p>
        <div className="cta-row">
          <a className="btn btn--primary" href="mailto:hello@getmediabridge.com">
            Email us
          </a>
          <Link className="btn btn--ghost" href="/contact">
            Contact
          </Link>
        </div>
      </section>
    </div>
  );
}
