"use client";
import React from "react";

const groups = [
  {
    title: "3D artists & animators",
    body: "Offload heavy frames and sequences without managing your own render farm."
  },
  {
    title: "Architects & visualization studios",
    body: "Render large scenes and walkthroughs on demand without dedicated GPU racks."
  },
  {
    title: "Indie game and VFX teams",
    body: "Use Farpy as overflow compute when local machines are at capacity."
  },
  {
    title: "AI creators",
    body: "Run image, video, and generative workloads on GPUs without touching cloud consoles."
  }
];

export function Audience() {
  return (
    <section className="fade-in-up w-full max-w-5xl mx-auto py-20 px-6 md:px-8">
      <h2 className="text-xl font-semibold text-center">Who Farpy is for</h2>
      <p className="text-sm text-neutral-600 text-center mt-2">
        Farpy is built for anyone who needs serious GPU power without owning a data center.
      </p>
      <div className="mt-8 grid gap-4 md:grid-cols-2 text-xs md:text-sm text-neutral-700">
        {groups.map((g, i) => (
          <div key={i} className="rounded-2xl border bg-white/70 p-4">
            <p className="font-semibold mb-1">{g.title}</p>
            <p>{g.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}



