import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-black/5 bg-[#fdf7ec] mt-16">
      <div className="mx-auto max-w-6xl px-4 py-6 flex flex-col md:flex-row md:items-center md:justify-between gap-6">

        {/* LEFT SIDE: COPYRIGHT */}
        <div className="text-xs text-slate-600">
          © 2025 Farpy — Distributed GPU power for everyone.
        </div>

        {/* CENTER: LEGAL LINKS */}
        <div className="flex flex-wrap gap-4 text-xs text-slate-700">
          <Link href="/privacy" className="hover:text-slate-900">Privacy</Link>
          <Link href="/terms" className="hover:text-slate-900">Terms</Link>
          <Link href="/press" className="hover:text-slate-900">Press</Link>
          <Link href="/contact" className="hover:text-slate-900">Contact</Link>
          <Link href="/status" className="hover:text-slate-900">Status</Link>
        </div>

        {/* RIGHT SIDE: SOCIAL */}
        <div className="flex items-center gap-4 text-slate-700">

          <a href="https://discord.gg/" className="hover:text-sky-700" title="Discord">
            <span className="text-lg">💬</span>
          </a>

          <a href="https://github.com/" className="hover:text-sky-700" title="GitHub">
            <span className="text-lg">🐙</span>
          </a>

          <a href="https://x.com/" className="hover:text-sky-700" title="Twitter/X">
            <span className="text-lg">𝕏</span>
          </a>

        </div>
      </div>
    </footer>
  );
}
