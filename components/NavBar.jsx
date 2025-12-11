"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function NavBar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const links = [
    { href: "/", label: "Home" },
    { href: "/status", label: "Status" },
    { href: "/pricing", label: "Pricing" },
    { href: "/nodemunchers", label: "NodeMunchers" },
    { href: "/download", label: "Download" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <header className="sticky top-0 z-40 bg-[#fdf7ec]/90 backdrop-blur border-b border-black/5">
      <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">

        {/* LOGO */}
        <Link href="/" className="flex items-center gap-2">
          <div className="h-7 w-7 rounded-2xl bg-gradient-to-tr from-emerald-400 via-teal-300 to-sky-300 shadow"></div>
          <span className="text-base font-semibold tracking-tight">Farpy</span>
        </Link>

        {/* DESKTOP NAV */}
        <nav className="hidden md:flex items-center gap-6 text-sm">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={
                pathname === l.href
                  ? "font-semibold text-sky-700"
                  : "text-slate-700 hover:text-slate-900"
              }
            >
              {l.label}
            </Link>
          ))}
        </nav>

        {/* MOBILE BUTTON */}
        <button
          className="md:hidden p-2 rounded-lg border border-black/10 bg-white"
          onClick={() => setOpen(!open)}
        >
          <span className="text-sm">☰</span>
        </button>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="md:hidden bg-[#fdf7ec] border-t border-black/10 px-4 py-3 space-y-3">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={
                pathname === l.href
                  ? "block font-semibold text-sky-700"
                  : "block text-slate-700 hover:text-slate-900"
              }
              onClick={() => setOpen(false)}
            >
              {l.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
