import type { Metadata } from "next";
import { Geist } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

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
    <html lang="en" className={geist.variable}>
      <body className="flex min-h-screen flex-col font-sans">
        <header className="sticky top-0 z-10 border-b border-slate-200 bg-slate-50/90 backdrop-blur dark:border-slate-800 dark:bg-zinc-950/90">
          <div className="mx-auto flex h-16 max-w-5xl items-center justify-between gap-4 px-5">
            <Link
              href="/"
              className="text-lg font-semibold tracking-tight text-[#1e40af] hover:no-underline dark:text-blue-400"
            >
              MediaBridge
            </Link>
            <nav
              className="flex items-center gap-6"
              aria-label="Primary"
            >
              <Link
                href="/contact"
                className="text-sm font-medium text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-slate-50"
              >
                Contact
              </Link>
              <Link
                href="/plans"
                className="text-sm font-medium text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-slate-50"
              >
                Plans
              </Link>
              <Link
                href="/login"
                className="rounded-md bg-[#1e40af] px-3 py-2 text-sm font-medium text-white hover:bg-blue-900 dark:bg-[#1e40af] dark:hover:bg-blue-900"
              >
                Log in
              </Link>
            </nav>
          </div>
        </header>

        <main className="flex-1">{children}</main>

        <footer className="border-t border-slate-200 px-5 py-6 dark:border-slate-800">
          <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-3 text-sm text-slate-500 dark:text-slate-400">
            <span>© {new Date().getFullYear()} MediaBridge</span>
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
              <a
                href="mailto:hello@getmediabridge.com"
                className="text-blue-700 hover:underline dark:text-blue-400"
              >
                hello@getmediabridge.com
              </a>
              <Link
                href="/privacy"
                className="text-blue-700 hover:underline dark:text-blue-400"
              >
                Privacy
              </Link>
              <Link
                href="/terms"
                className="text-blue-700 hover:underline dark:text-blue-400"
              >
                Terms
              </Link>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
