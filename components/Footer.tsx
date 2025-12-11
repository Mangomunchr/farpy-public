"use client";
import React from "react";

export function Footer() {
  return (
    <footer className="w-full border-t border-neutral-200/70 bg-white/70 backdrop-blur-sm mt-20">
      <div className="max-w-5xl mx-auto px-6 md:px-8 py-10 text-center space-y-4">
        <div>
          <p className="text-sm font-semibold">Farpy</p>
          <p className="text-xs text-neutral-500">
            Distributed GPU power for everyone. Tiny taps. Big compute.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 text-xs text-neutral-600">
          <a href="/" className="hover:text-black">Home</a>
          <a href="/docs" className="hover:text-black">Docs</a>
          <a href="/nodes" className="hover:text-black">NodeMunchers</a>
          <a href="/download" className="hover:text-black">Download</a>
          <a href="/status" className="hover:text-black">Status</a>
          <a href="/trust" className="hover:text-black">Trust</a>
        </div>

        <p className="text-[11px] text-neutral-500">
          Toy Mode · Not production ready. Do not depend on Farpy for critical work yet.
        </p>
      </div>
    </footer>
  );
}
