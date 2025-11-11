import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: "Farpy — Distributed GPU power for everyone.",
  description: "Tiny taps. Big compute.",
  openGraph: { title: "Farpy", description: "Distributed GPU power for everyone.", url: "https://farpy.com" },
  metadataBase: new URL("https://farpy.com"),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} bg-black text-zinc-100`}>
      <body className="min-h-screen font-sans antialiased">
        {/* page glow */}
        <div aria-hidden className="pointer-events-none fixed inset-0 bg-[radial-gradient(60%_40%_at_50%_0%,rgba(59,130,246,.12),transparent_60%)]" />
        <header className="border-b border-zinc-900/60 backdrop-blur-xl supports-[backdrop-filter]:bg-black/40 sticky top-0 z-20">
          <nav className="mx-auto max-w-6xl px-4 h-14 flex items-center gap-6 text-sm text-zinc-300">
            <a href="/" className="font-semibold text-white">Farpy</a>
            <a href="/how" className="hover:text-white">How</a>
            <a href="/join" className="hover:text-white">Join</a>
            <a href="/status" className="hover:text-white">Status</a>
            <a href="/about" className="hover:text-white ml-auto">About</a>
          </nav>
        </header>

        {children}

        <footer className="mx-auto max-w-6xl px-4 py-12 text-xs text-zinc-400">
          © {new Date().getFullYear()} Farpy Holdings LLC — <a href="/trust" className="underline">Trust</a> • <a href="/status" className="underline">Status</a>
        </footer>
      </body>
    </html>
  );
}