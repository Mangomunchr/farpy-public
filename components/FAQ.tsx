"use client";
import React from "react";

const faqs = [
  {
    q: "What is Farpy?",
    a: "Farpy is a distributed GPU compute platform that processes rendering and AI workloads through a global node network."
  },
  {
    q: "Do I need a powerful computer?",
    a: "No. Farpy handles the heavy GPU work remotely. You can upload from any device."
  },
  {
    q: "How fast is it?",
    a: "Speed depends on workload type and GPU availability, but most jobs complete significantly faster than local hardware."
  },
  {
    q: "How do GPU nodes get paid?",
    a: "Farpy pays operators through the Payload Engine after each job is verified by the Pwoof System."
  },
  {
    q: "Is my data secure?",
    a: "Yes. Files are processed in sandboxed environments with strict isolation, hashing, and encrypted transit."
  }
];

export function FAQ() {
  return (
    <section className="w-full max-w-4xl mx-auto py-16 px-4 md:px-6">
      <h2 className="text-xl font-semibold text-center">FAQ</h2>
      <p className="text-sm text-neutral-600 text-center mt-2">
        Common questions about Farpy.
      </p>

      <div className="mt-8 space-y-4">
        {faqs.map((x, i) => (
          <div key={i} className="rounded-2xl border bg-white/70 p-4">
            <p className="text-sm font-semibold">{x.q}</p>
            <p className="text-xs md:text-sm text-neutral-600 mt-1">{x.a}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
