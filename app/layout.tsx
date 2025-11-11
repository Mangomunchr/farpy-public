import "./globals.css";
import type { Metadata } from "next";
import { Inter, Noto_Sans_KR, Comic_Neue, Bungee } from "next/font/google";
import VibeToggle from "./components/VibeToggle";

const inter  = Inter({ subsets:["latin"], display:"swap", variable:"--font-inter" });
const noto   = Noto_Sans_KR({ subsets:["latin"], weight:["400","700"], display:"swap", variable:"--font-noto" });
const comic  = Comic_Neue({ weight:["400","700"], subsets:["latin"], display:"swap", variable:"--font-comic" });
const bungee = Bungee({ weight:"400", subsets:["latin"], display:"swap", variable:"--font-bungee" });

export const metadata: Metadata = {
  title: "Farpy — Distributed GPU power for everyone.",
  description: "Tiny taps. Big compute.",
  metadataBase: new URL("https://farpy.com"),
  openGraph: { title:"Farpy — Distributed GPU power for everyone.", description:"Tiny taps. Big compute.", url:"https://farpy.com", images:["/opengraph-image"] },
  twitter:   { card:"summary_large_image", title:"Farpy", description:"Distributed GPU power for everyone.", images:["/opengraph-image"] },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${noto.variable} ${comic.variable} ${bungee.variable} bg-black text-zinc-100`}>
      <body className="min-h-screen font-sans antialiased">
        {/* pre-paint: set vibe class from localStorage/query to avoid FOUC */}
        <script dangerouslySetInnerHTML={{__html: `
          (function(){
            try{
              var v = (new URLSearchParams(location.search).get('vibe')) ||
                      (localStorage.getItem('vibe')) || 'pro';
              var r = document.documentElement;
              r.classList.remove('vibe-pro','vibe-chaos');
              r.classList.add(v === 'chaos' ? 'vibe-chaos' : 'vibe-pro');
            }catch(e){}
          })();
        `}} />
        <header className="border-b border-zinc-800/80 backdrop-blur supports-[backdrop-filter]:bg-black/30">
          <nav className="mx-auto max-w-6xl px-4 h-14 flex items-center gap-6 text-sm text-zinc-300">
            <a href="/" className="font-semibold text-white">Farpy</a>
            <a href="/how" className="hover:text-white">How</a>
            <a href="/join" className="hover:text-white">Join</a>
            <a href="/status" className="hover:text-white">Status</a>
            <a href="/about" className="hover:text-white">About</a>
            <VibeToggle />
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
