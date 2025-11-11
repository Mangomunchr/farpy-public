import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Farpy — Distributed GPU power for everyone.",
  description: "Tiny taps. Big compute.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="h-full">
      <body className="h-full bg-black text-zinc-100 antialiased">
        <header className="sticky top-0 z-10 border-b border-zinc-800/70 bg-black/70 backdrop-blur">
          <nav className="mx-auto max-w-6xl px-4 py-3 flex gap-6 text-sm text-zinc-300">
            <a href="/" className="font-semibold text-white">Farpy</a>
            <a href="/how">How</a>
            <a href="/join">Join</a>
            <a href="/status">Status</a>
            <a href="/about">About</a>
          </nav>
        </header>
        <main className="mx-auto max-w-6xl px-4 py-16">{children}</main>
        <footer className="mx-auto max-w-6xl px-4 py-12 text-xs text-zinc-400">
          © {new Date().getFullYear()} Farpy Holdings LLC — <a href="/trust" className="underline">Trust</a> • <a href="/status" className="underline">Status</a>
        </footer>
      </body>
    </html>
  );
}