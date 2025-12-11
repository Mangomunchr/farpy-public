"use client";
import React, { useState } from "react";

export function CostEstimator() {
  const [frames, setFrames] = useState(120);

  const minPerFrame = 0.02;
  const maxPerFrame = 0.15;

  const minTotal = (frames * minPerFrame).toFixed(2);
  const maxTotal = (frames * maxPerFrame).toFixed(2);

  return (
    <section id="pricing" className="fade-in-up w-full max-w-5xl mx-auto py-20 px-6 md:px-8">
      <h2 className="text-xl font-semibold text-center">EZPZ Cost Estimator</h2>
      <p className="text-sm text-neutral-600 text-center mt-2">
        Rough estimate only. Final pricing will depend on resolution, complexity, and workload.
      </p>

      <div className="mt-8 rounded-2xl border bg-white/70 p-6">
        <label className="flex justify-between items-center text-xs md:text-sm mb-3">
          <span>Frames to render</span>
          <span className="font-medium">{frames} frames</span>
        </label>
        <input
          type="range"
          min={10}
          max={1200}
          step={10}
          value={frames}
          onChange={(e) => setFrames(parseInt(e.target.value, 10))}
          className="fade-in-up w-full"
        />

        <div className="mt-5 grid grid-cols-2 gap-4 text-xs md:text-sm text-neutral-700">
          <div className="rounded-xl border bg-neutral-50 p-4">
            <p className="text-[11px] uppercase tracking-[0.16em] text-neutral-500 mb-1">
              Estimated range
            </p>
            <p className="text-base font-semibold">
              ${minTotal} – ${maxTotal}
            </p>
            <p className="text-[11px] mt-1 text-neutral-500">
              Based on ${minPerFrame.toFixed(2)} – ${maxPerFrame.toFixed(2)} / frame
            </p>
          </div>
          <div className="rounded-xl border bg-neutral-50 p-4">
            <p className="text-[11px] uppercase tracking-[0.16em] text-neutral-500 mb-1">
              Not final pricing
            </p>
            <p className="text-[11px] text-neutral-600">
              This is a placeholder estimator for preview only. Production pricing
              may differ.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}




