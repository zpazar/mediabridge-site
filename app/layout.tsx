import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "MediaBridge",
    template: "%s · MediaBridge",
  },
  description:
    "Agency-first marketing operations. Connect your workflows to ad platforms with clarity and control.",
  metadataBase: new URL("https://getmediabridge.com"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <header className="site-header">
          <div className="site-header__inner">
            <Link href="/" className="site-logo">
              MediaBridge
            </Link>
            <nav className="site-nav" aria-label="Primary">
              <Link href="/">Home</Link>
              <Link href="/privacy">Privacy</Link>
              <Link href="/contact">Contact</Link>
            </nav>
          </div>
        </header>
        <main>{children}</main>
        <footer className="site-footer">
          <div className="site-footer__inner">
            <span>© {new Date().getFullYear()} MediaBridge</span>
            <a href="mailto:hello@getmediabridge.com">hello@getmediabridge.com</a>
          </div>
        </footer>
      </body>
    </html>
  );
}
