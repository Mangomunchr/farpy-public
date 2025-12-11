"use client";
import React from "react";

export function PricingTeaser() {
  return (
    <section className="fade-in-up w-full max-w-5xl mx-auto py-20 px-6 md:px-8">
      <h2 className="text-xl font-semibold text-center">Simple pricing</h2>
      <p className="text-sm text-neutral-600 text-center mt-2 max-w-2xl mx-auto">
        Farpy aims to keep pricing predictable and transparent. Pay only for the
        compute you actually use.
      </p>

      <div className="mt-8 grid gap-4 md:grid-cols-2 text-xs md:text-sm text-neutral-700">
        <div className="rounded-2xl border bg-white/90 p-4">
          <p className="font-semibold mb-1">Typical range</p>
          <p className="mt-1">
            Many test workloads fall roughly between $0.02 and $0.15 per frame,
            depending on resolution and complexity.
          </p>
          <p className="mt-2 text-[11px] text-neutral-500">
            This is a non-binding example range, not final pricing.
          </p>
        </div>
        <div className="rounded-2xl border bg-white/90 p-4">
          <p className="font-semibold mb-1">EZPZ estimator</p>
          <p className="mt-1">
            The live EZPZ estimator will provide clearer, workload-specific
            pricing once production is fully enabled.
          </p>
        </div>
      </div>
    </section>
  );
}
