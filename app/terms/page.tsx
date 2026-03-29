export const metadata = {
  title: "Terms of Service | MediaBridge",
  description: "Terms of Service for MediaBridge.",
};

export default function TermsPage() {
  return (
    <section className="section">
      <div className="container legal-page">
        <p className="section-label">Legal</p>
        <h1 className="section-title">Terms of Service</h1>
        <p className="legal-updated">Last updated: March 28, 2026</p>

        <div className="legal-content">
          <p>
            MediaBridge is a marketing operations platform designed to help
            agencies manage paid media workflows across platforms such as
            Google Ads and Meta.
          </p>

          <h2>Use of Service</h2>
          <p>
            By using MediaBridge, you agree to use the platform only for lawful
            purposes and in accordance with applicable platform policies,
            including those of Google Ads and Meta.
          </p>

          <h2>User Responsibility</h2>
          <p>
            Users are responsible for reviewing all changes before execution.
            MediaBridge provides tools for validation and preview but does not
            guarantee performance outcomes.
          </p>

          <h2>No Guarantees</h2>
          <p>
            MediaBridge is provided “as is” without warranties of any kind,
            express or implied.
          </p>

          <h2>Limitation of Liability</h2>
          <p>
            MediaBridge is not liable for any direct or indirect damages
            resulting from the use of the platform.
          </p>

          <h2>Third-Party Services</h2>
          <p>
            MediaBridge integrates with third-party platforms such as Google
            Ads and Meta. Use of those platforms is subject to their respective
            terms and conditions.
          </p>

          <h2>Changes</h2>
          <p>
            We may update these terms as the product evolves.
          </p>

          <h2>Contact</h2>
          <p>
            For questions regarding these terms, contact{" "}
            <a href="mailto:hello@getmediabridge.com">
              hello@getmediabridge.com
            </a>.
          </p>
        </div>
      </div>
    </section>
  );
}