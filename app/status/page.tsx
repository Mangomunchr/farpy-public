"use client";
import { useEffect, useState } from "react";
type S = { ts?: number; canary?: { ok?: boolean }; payout?: { count?: number } };

export default function Page() {
  const [s, setS] = useState<S>({});
  useEffect(() => {
    let t: any;
    const run = async () => {
      try {
        const r = await fetch("/status/status.json?ts=" + Date.now(), { cache: "no-store" });
        setS(await r.json());
      } catch {}
      t = setTimeout(run, 5000);
    };
    run(); return () => clearTimeout(t);
  }, []);
  return (
    <main className="mx-auto max-w-3xl px-4 py-16">
      <h1 className="text-3xl font-bold">Status</h1>
      <div className="mt-4 grid gap-3">
        <div className="card-soft p-4">
          <div className="text-sm text-zinc-400">Canary</div>
          <div className="mt-1">{s?.canary?.ok ? "✅ OK" : "⏳ Waiting"}</div>
        </div>
        <div className="card-soft p-4">
          <div className="text-sm text-zinc-400">Payout count</div>
          <div className="mt-1">{s?.payout?.count ?? "—"}</div>
        </div>
        <div className="text-xs text-zinc-500">Last update: {s?.ts ? new Date(s.ts).toLocaleString() : "—"}</div>
      </div>
    </main>
  );
}