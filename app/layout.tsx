import "./globals.css";
import type { Metadata } from "next";
import { Noto_Sans_KR } from "next/font/google";

export const metadata: Metadata = {
  title: "Farpy",
  description: "Distributed GPU power for everyone.",
};

const notoKR = Noto_Sans_KR({ subsets: ["latin"], weight: ["400","700"] });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${notoKR.className} antialiased`}>
        <header className="border-b border-white/10">
          <nav className="mx-auto max-w-6xl px-4 h-14 flex items-center justify-between">
            <a href="/" className="font-bold">Farpy</a>
            <div className="flex items-center gap-4 text-sm text-[var(--fp-sub)]">
              <a href="/how">How</a>
              <a href="/join">Join</a>
              <a href="/download">Download</a>
              <a href="/pricing">Pricing</a>
              <a href="/explorer">Explorer</a>
              <a href="/jobs">Jobs</a>
              <a href="/press">Press</a>
              <a href="/about">About</a>
              <a href="/contact">Contact</a>
              <a href="/status">Status</a>
            </div>
          </nav>
        </header>
        <main>{children}</main>
        <footer className="border-t border-white/10 mt-16">
          <div className="mx-auto max-w-6xl px-4 py-10 text-xs text-[var(--fp-sub)]">
            © 2025 Farpy • <a className="underline" href="/privacy">Privacy</a> • <a className="underline" href="/terms">Terms</a> • <a className="underline" href="/press">Press</a>
          </div>
        </footer>
      </body>
    </html>
  );
}