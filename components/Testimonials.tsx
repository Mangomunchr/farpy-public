"use client";
import React from "react";

const quotes = [
  {
    name: "Indie 3D artist",
    text: "Farpy lets me render sequences without babysitting a local machine all night.",
  },
  {
    name: "Small VFX studio",
    text: "We use Farpy as overflow compute when our main farm is full. Simple and effective.",
  },
  {
    name: "AI creator",
    text: "I just upload and get results back. No more fighting with generic cloud providers.",
  },
];

export function Testimonials() {
  return (
    <section className="fade-in-up w-full max-w-5xl mx-auto py-20 px-6 md:px-8">
      <h2 className="text-xl font-semibold text-center">What people are saying</h2>
      <p className="text-sm text-neutral-600 text-center mt-2 max-w-2xl mx-auto">
        Early testers and teams using Farpy in their workflows.
      </p>
      <div className="mt-8 grid gap-4 md:grid-cols-3 text-xs md:text-sm text-neutral-700">
        {quotes.map((q, i) => (
          <div key={i} className="rounded-2xl border bg-white/70 p-4">
            <p className="italic">“{q.text}”</p>
            <p className="mt-3 text-[11px] font-semibold text-neutral-600">
              {q.name}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}



