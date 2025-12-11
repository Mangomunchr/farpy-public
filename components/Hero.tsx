"use client";
import React from "react";

export function Hero() {
  return (
    <section className="fade-in-up w-full max-w-5xl mx-auto pt-16 pb-10 px-6 md:px-8">
      <div className="text-xs font-medium uppercase tracking-[0.25em] text-neutral-500 mb-3">
        Distributed GPU compute
      </div>
      <h1 className="text-3xl md:text-5xl font-semibold tracking-tight">
        Distributed GPU power for everyone.
      </h1>
      <p className="mt-4 text-sm md:text-base text-neutral-600 max-w-xl">
        Offload heavy renders and AI workloads to a global GPU network.
        Upload once. Farpy handles routing, verification, and payouts.
      </p>
      <div className="mt-8 flex flex-wrap gap-3">
        <button className="rounded-full px-5 py-2.5 text-xs md:text-sm font-medium bg-black text-white">
          Join early access
        </button>
        <button className="rounded-full px-5 py-2.5 text-xs md:text-sm font-medium border border-neutral-300 bg-white">
          Learn how it works
        </button>
      </div>
      <p className="mt-3 text-[11px] text-neutral-500">
        Tiny taps. Big compute.
      </p>
    </section>
  );
}



