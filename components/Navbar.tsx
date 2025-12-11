"use client";
import React from "react";

export function Navbar() {
  return (
    <header className="w-full border-b border-neutral-200/70 bg-white/70 backdrop-blur-sm">
      <div className="max-w-5xl mx-auto px-4 md:px-6 h-14 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-sm font-semibold tracking-tight">Farpy</span>
          <span className="text-[11px] text-neutral-500">Distributed GPU power</span>
        </div>
        <nav className="hidden md:flex items-center gap-4 text-xs text-neutral-600">
          <a href="#how" className="hover:text-black">How it works</a>
          <a href="#pricing" className="hover:text-black">Pricing</a>
          <a href="#nodes" className="hover:text-black">Run your GPU</a> <a href="/nodes" className="hover:text-black text-[11px] opacity-70">Nodes</a>
          <a href="/docs" className="hover:text-black">Docs</a>
          <a href="#status" className="hover:text-black">Status</a>
        </nav>
        <button className="text-xs font-medium px-3 py-1.5 rounded-full border border-neutral-300 bg-white">
          Sign in
        </button>
      </div>
    </header>
  );
}

