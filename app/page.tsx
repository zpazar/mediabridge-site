import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Sheet-driven budget & ops for agencies",
};

export default function HomePage() {
  return (
    <div className="site-main">
      <section className="hero">
        <h1>
          MediaBridge automates paid media operations using your Google Sheets
          as the source of truth.
        </h1>
        <p>
          Connect your Google Ads and Meta accounts, read campaign planning data
          from Google Sheets, validate budgets, calculate pacing, and safely
          sync updates to advertising platforms.
        </p>
        <div className="prose">
          <ul>
            <li>Reads campaign planning data from Google Sheets</li>
            <li>
              Calculates daily and lifetime budgets based on defined rules
            </li>
            <li>Previews all changes before applying updates</li>
            <li>Syncs approved updates directly to ad platforms</li>
          </ul>
        </div>
        <div className="cta-row">
          <a className="btn btn--primary" href="mailto:hello@getmediabridge.com">
            Email us
          </a>
          <Link className="btn btn--ghost" href="/contact">
            Contact
          </Link>
        </div>
      </section>

      <section className="prose">
        <h2>How MediaBridge works</h2>
        <ul>
          <li>
            1. Connect accounts — Securely connect your Google Ads and Meta
            accounts.
          </li>
          <li>
            2. Link your Google Sheet — Select a structured Google Sheet
            containing campaign plans and budget targets.
          </li>
          <li>
            3. Validate and calculate pacing — MediaBridge validates planning
            inputs and calculates pacing based on planned versus actual spend.
          </li>
          <li>
            4. Preview changes — Review all proposed budget updates before
            anything is sent to ad platforms.
          </li>
          <li>
            5. Sync updates — Apply approved changes to your campaigns with full
            control and visibility.
          </li>
        </ul>
      </section>

      <section className="prose">
        <h2>Data usage and safety</h2>
        <p>
          MediaBridge only accesses the data necessary to read campaign
          structure, campaign performance data, and planning inputs from Google
          Sheets in order to validate budgets and apply user-approved updates.
          No changes are made to advertising platforms without explicit user
          confirmation.
        </p>
      </section>
    </div>
  );
}
