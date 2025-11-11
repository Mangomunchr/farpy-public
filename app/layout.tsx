import "./globals.css";
import type { Metadata } from "next";
import { Inter, Noto_Sans_KR } from "next/font/google";

const inter = Inter({ subsets: ["latin"], display: "swap", variable: "--font-inter" });
const noto = Noto_Sans_KR({ subsets: ["latin"], weight: ["400","700"], display: "swap", variable: "--font-noto" });

export const metadata: Metadata = {
  title: "Farpy — Distributed GPU power for everyone.",
  description: "Tiny taps. Big compute.",
  metadataBase: new URL("https://farpy.com"),
  openGraph: { title: "Farpy — Distributed GPU power for everyone.", description: "Tiny taps. Big compute.", url: "https://farpy.com", images: ["https://farpy.com/opengraph-image"] },
  twitter: { card: "summary_large_image", title: "Farpy", description: "Distributed GPU power for everyone.", images: ["https://farpy.com/opengraph-image"] },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${noto.variable} bg-black text-zinc-100`}>
      <body className="min-h-screen font-sans antialiased">
        <header className="border-b border-zinc-800/80 backdrop-blur supports-[backdrop-filter]:bg-black/30">
          <nav className="mx-auto max-w-6xl px-4 h-14 flex items-center gap-6 text-sm text-zinc-300">
            <a href="/" className="font-semibold text-white">Farpy</a>
            <a href="/how" className="hover:text-white">How</a>
            <a href="/join" className="hover:text-white">Join</a>
            <a href="/status" className="hover:text-white">Status</a>
            <a href="/about" className="hover:text-white">About</a>
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
