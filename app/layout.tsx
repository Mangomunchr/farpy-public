import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Farpy — Distributed GPU power for everyone.",
  description: "Tiny taps. Big compute. Drop, render, download.",
  metadataBase: new URL("https://farpy.com"),
  icons: { icon: "/favicon.ico" },
  openGraph: {
    title: "Farpy — Distributed GPU power for everyone.",
    description: "Tiny taps. Big compute.",
    url: "https://farpy.com",
    siteName: "Farpy",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Farpy — Distributed GPU power for everyone.",
    description: "Tiny taps. Big compute."
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-black text-zinc-200 antialiased">
        <header className="border-b border-white/10">
          <nav className="mx-auto max-w-6xl px-4 h-14 flex items-center justify-between">
            <a href="/" className="font-bold">Farpy</a>
            <div className="space-x-4 text-sm text-zinc-300">
              <a href="/how" className="hover:text-white">How</a>
              <a href="/join" className="hover:text-white">Join</a>
              <a href="/download" className="hover:text-white">Download</a>
              <a href="/jobs" className="hover:text-white">Jobs</a>
              <a href="/press" className="hover:text-white">Press</a>
              <a href="/about" className="hover:text-white">About</a>
              <a href="/status" className="hover:text-white">Status</a>
            </div>
          </nav>
        </header>
        {children}
        <footer className="mt-20 border-t border-white/10">
          <div className="mx-auto max-w-6xl px-4 py-10 text-sm text-zinc-400 flex flex-wrap gap-4 justify-between">
            <div>© {new Date().getFullYear()} Farpy</div>
            <div className="space-x-4">
              <a href="/privacy" className="hover:text-white">Privacy</a>
              <a href="/terms" className="hover:text-white">Terms</a>
              <a href="/press" className="hover:text-white">Press</a>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}