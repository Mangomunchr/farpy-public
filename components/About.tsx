"use client";
import React from "react";

export function About() {
  return (
    <section className="fade-in-up w-full max-w-5xl mx-auto py-20 px-6 md:px-8">
      <h2 className="text-xl font-semibold text-center">What is Farpy?</h2>
      <p className="text-sm text-neutral-600 text-center mt-2 max-w-2xl mx-auto">
        Farpy is a distributed GPU compute platform. It lets creators and teams offload
        rendering and AI workloads to a global network of GPUs, with a simple
        upload-and-download workflow instead of complex cloud setups.
      </p>
      <div className="mt-8 grid gap-4 md:grid-cols-3 text-xs md:text-sm text-neutral-700">
        <div className="rounded-2xl border bg-white/70 p-4">
          <p className="font-semibold mb-1">Simple</p>
          <p>Upload files through a clean interface or API. No cloud consoles, no VM tuning.</p>
        </div>
        <div className="rounded-2xl border bg-white/70 p-4">
          <p className="font-semibold mb-1">Efficient</p>
          <p>Farpy routes jobs to suitable GPUs and verifies results before payout.</p>
        </div>
        <div className="rounded-2xl border bg-white/70 p-4">
          <p className="font-semibold mb-1">Transparent</p>
          <p>Proof packets, observability, and clearly defined economics for GPU operators.</p>
        </div>
      </div>
    </section>
  );
}



