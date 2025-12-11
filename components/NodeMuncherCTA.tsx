"use client";
import React from "react";

export function NodeMuncherCTA() {
  return (
    <section id="nodes" className="fade-in-up w-full max-w-5xl mx-auto py-20 px-6 md:px-8">
      <h2 className="text-xl font-semibold text-center">
        Run your GPU with Farpy
      </h2>
      <p className="text-sm text-neutral-600 text-center mt-2">
        Turn idle GPUs into income by processing verified render and AI jobs.
      </p>

      <div className="mt-8 grid gap-4 md:grid-cols-3 text-xs text-neutral-600">
        <div className="rounded-2xl border bg-white/70 p-4">
          <p className="font-semibold mb-1">Simple agent</p>
          <p>Install once. The Farpy worker polls jobs over HTTPS only.</p>
        </div>
        <div className="rounded-2xl border bg-white/70 p-4">
          <p className="font-semibold mb-1">Verified workloads</p>
          <p>Each job includes a proof packet before any payout is issued.</p>
        </div>
        <div className="rounded-2xl border bg-white/70 p-4">
          <p className="font-semibold mb-1">Flexible control</p>
          <p>Control intensity and availability to match your schedule.</p>
        </div>
      </div>

      <div className="mt-8 text-center">
        <a href="/nodes" className="inline-block px-5 py-2.5 rounded-full text-xs font-medium bg-black text-white">
          Join NodeMuncher waitlist
        </a>
      </div>
    </section>
  );
}





