"use client";
import { useEffect, useState } from "react";

type NodeState = {
  node_id?: string;
  gpu_model?: string;
  gpu_mode?: string;
  gpu_util?: number;
  vram_used_mb?: number;
  vram_total_mb?: number;
  jobs_completed?: number;
  jobs_failed?: number;
  last_job_id?: string;
  last_heartbeat?: string;
};

export default function NodeStatusPage() {
  const [state, setState] = useState<NodeState | null>(null);
  const [error, setError] = useState("");

  const fallback: NodeState = {
    node_id: "NODE-LOCAL-MOCK",
    gpu_model: "RTX 3080 (mock)",
    gpu_mode: "normal",
    gpu_util: 22,
    vram_used_mb: 2100,
    vram_total_mb: 10024,
    jobs_completed: 7,
    jobs_failed: 0,
    last_job_id: "EZPZ-REMOTE-TEST",
    last_heartbeat: new Date().toISOString(),
  };

  async function load() {
    try {
      const res = await fetch("/worker/state.json", { cache: "no-store" });
      if (!res.ok) throw new Error("no state feed");
      const data = await res.json();
      setState(data);
      setError("");
    } catch {
      setState(fallback);
      setError("Using mock data (no /worker/state.json feed detected).");
    }
  }

  useEffect(() => {
    load();
    const t = setInterval(load, 5000);
    return () => clearInterval(t);
  }, []);

  const s = state || fallback;
  const util = Math.max(0, Math.min(100, s.gpu_util ?? 0));
  const vramUsed = s.vram_used_mb ?? 0;
  const vramTotal = s.vram_total_mb ?? 1;
  const vramPct = Math.max(0, Math.min(100, (vramUsed / vramTotal) * 100));

  return (
    <div className="min-h-screen bg-[#fdf7ec] text-slate-900 px-6 py-12 max-w-3xl mx-auto">
      <h1 className="text-3xl font-semibold tracking-tight">NodeMuncher Status</h1>

      <p className="mt-2 text-sm text-slate-700">
        Live snapshot of a single NodeMuncher&apos;s state. Toy Mode uses mock data if the local
        worker feed is not available.
      </p>

      {error && (
        <div className="mt-6 rounded-xl bg-amber-50 border border-amber-200 text-amber-900 p-3 text-xs">
          {error}
        </div>
      )}

      {/* NODE CARD */}
      <section className="mt-8 rounded-2xl bg-white border border-black/5 p-5 shadow-sm">
        <h2 className="text-sm font-semibold">Node</h2>

        <div className="mt-3 text-xs space-y-1 text-slate-700">
          <div>Node ID: <span className="font-mono">{s.node_id || "-"}</span></div>
          <div>GPU: {s.gpu_model || "-"}</div>
          <div>Mode: {s.gpu_mode || "normal"}</div>
          <div>Last heartbeat: {s.last_heartbeat || "-"}</div>
          <div>Last job: <span className="font-mono">{s.last_job_id || "-"}</span></div>
        </div>
      </section>

      {/* GPU UTIL */}
      <section className="mt-8 rounded-2xl bg-white border border-black/5 p-5 shadow-sm">
        <h2 className="text-sm font-semibold">GPU Utilization</h2>

        <div className="mt-3 text-xs text-slate-700">Estimated usage: {util.toFixed(0)}%</div>

        <div className="mt-2 w-full h-3 rounded-full bg-slate-200 overflow-hidden">
          <div
            className="h-3 rounded-full bg-emerald-400"
            style={{ width: util + "%" }}
          />
        </div>
      </section>

      {/* VRAM */}
      <section className="mt-8 rounded-2xl bg-white border border-black/5 p-5 shadow-sm">
        <h2 className="text-sm font-semibold">VRAM</h2>

        <div className="mt-3 text-xs text-slate-700">
          {vramUsed} MB / {vramTotal} MB ({vramPct.toFixed(0)}%)
        </div>

        <div className="mt-2 w-full h-3 rounded-full bg-slate-200 overflow-hidden">
          <div
            className="h-3 rounded-full bg-sky-400"
            style={{ width: vramPct + "%" }}
          />
        </div>
      </section>

      {/* JOB COUNTS */}
      <section className="mt-8 rounded-2xl bg-white border border-black/5 p-5 shadow-sm">
        <h2 className="text-sm font-semibold">Job Counts</h2>

        <div className="mt-3 grid grid-cols-2 gap-4 text-xs text-slate-700">
          <div className="rounded-xl bg-slate-50 border border-black/5 p-3">
            <div className="text-[10px] uppercase tracking-wide text-slate-500">
              Completed
            </div>
            <div className="mt-1 text-lg font-semibold">
              {s.jobs_completed ?? 0}
            </div>
          </div>

          <div className="rounded-xl bg-slate-50 border border-black/5 p-3">
            <div className="text-[10px] uppercase tracking-wide text-slate-500">
              Failed
            </div>
            <div className="mt-1 text-lg font-semibold">
              {s.jobs_failed ?? 0}
            </div>
          </div>
        </div>
      </section>

      <div className="h-20" />
    </div>
  );
}
