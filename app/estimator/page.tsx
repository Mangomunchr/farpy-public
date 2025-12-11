"use client";
import { useState } from "react";

export default function EstimatorPage() {
  const [size, setSize] = useState(50); // MB
  const gpuMinutes = Math.max(0.2, (size * 0.08));      // Simple estimate model
  const price = gpuMinutes * 0.12;                      // .12 / GPU-minute (placeholder)

  return (
    <div className="min-h-screen bg-[#fdf7ec] text-slate-900 px-6 py-12 max-w-3xl mx-auto">

      {/* TITLE */}
      <h1 className="text-3xl font-semibold tracking-tight">EZPZ Cost Estimator</h1>
      <p className="mt-2 text-sm text-slate-600">
        Drag the slider to estimate GPU render cost. This is Toy Mode math — final pricing adjusts when real GPU lanes are active.
      </p>

      {/* SLIDER BLOCK */}
      <section className="mt-10 rounded-2xl bg-white border border-black/5 p-6 shadow-sm">

        <label className="text-sm font-medium">Scene size (MB)</label>
        <input
          type="range"
          min="5"
          max="500"
          value={size}
          onChange={(e) => setSize(Number(e.target.value))}
          className="w-full mt-3 accent-sky-600"
        />

        <div className="mt-4 flex justify-between text-xs text-slate-600">
          <span>5 MB</span>
          <span>500 MB</span>
        </div>

        <p className="mt-4 text-sm">
          Selected: <span className="font-semibold">{size} MB</span>
        </p>
      </section>

      {/* OUTPUT BLOCK */}
      <section className="mt-8 rounded-2xl bg-white border border-black/5 p-6 shadow-sm">

        <h2 className="text-lg font-semibold">Estimated Render Time</h2>
        <p className="mt-1 text-sm text-slate-700">
          ~{gpuMinutes.toFixed(1)} GPU minutes
        </p>

        <h2 className="text-lg font-semibold mt-6">Estimated Cost</h2>
        <p className="mt-1 text-2xl font-bold text-sky-700">
          
        </p>

        <p className="mt-3 text-xs text-slate-500">
          This estimate assumes lightweight Toy Mode jobs. Actual Blender/Unreal/D5 workloads will be benchmarked on launch.
        </p>
      </section>

      {/* CTA */}
      <div className="mt-10">
        <a
          href="/"
          className="inline-flex rounded-full bg-black px-5 py-3 text-sm font-semibold text-[#fdf7ec] shadow hover:bg-slate-900"
        >
          Back to Home
        </a>
      </div>

      <div className="h-16" />
    </div>
  );
}
