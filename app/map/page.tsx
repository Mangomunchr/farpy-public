export default function SystemMapPage() {
  const stages = [
    {
      title: "Render Garden",
      role: "Farpies · Upload & chill",
      desc: "Users drop files into EZPZ. Simple web interface, no configs, no cluster setup.",
      items: [
        "Upload scene / file",
        "Pick render type (Toy Mode)",
        "Job sent into EZPZ queue",
      ],
    },
    {
      title: "Render Bazaar",
      role: "Job hub · Routing layer",
      desc: "Jobs are queued, prioritized, and matched to eligible NodeMunchers.",
      items: [
        "Queue & priority rules",
        "Per-job policies & limits",
        "Matchmaking for workers",
      ],
    },
    {
      title: "NodeMunchers",
      role: "Workers · GPUs everywhere",
      desc: "Verified workers pull safe jobs, render inside a sandbox, and report results.",
      items: [
        "Poll RIP API for next job",
        "Run engine in sandbox",
        "Upload result + hashes",
      ],
    },
    {
      title: "Proof & Payout",
      role: "Verification · Trust layer",
      desc: "Farpy verifies outputs, logs proof packets, and triggers payouts post-verification.",
      items: [
        "Hash + runtime verification",
        "Proof packet written",
        "Payout scheduled",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-[#fdf7ec] text-slate-900 px-6 py-12 max-w-5xl mx-auto">
      <h1 className="text-3xl font-semibold tracking-tight">Farpy System Map</h1>
      <p className="mt-2 text-sm text-slate-700 max-w-2xl">
        High-level view of how a job moves through Farpy: from the Render Garden, through
        the Bazaar, into NodeMunchers, and back as verified results.
      </p>

      <section className="mt-10 rounded-3xl bg-white border border-black/5 p-6 shadow-sm">
        <h2 className="text-sm font-semibold">End-to-end flow</h2>

        <div className="mt-4 flex flex-wrap items-center gap-3 text-xs font-mono text-slate-800">
          <span className="px-3 py-1 rounded-full bg-emerald-100 border border-emerald-300">
            Render Garden
          </span>
          <span>→</span>
          <span className="px-3 py-1 rounded-full bg-sky-100 border border-sky-300">
            Render Bazaar
          </span>
          <span>→</span>
          <span className="px-3 py-1 rounded-full bg-indigo-100 border border-indigo-300">
            NodeMunchers
          </span>
          <span>→</span>
          <span className="px-3 py-1 rounded-full bg-amber-100 border border-amber-300">
            Proof & Payout
          </span>
        </div>

        <pre className="mt-6 bg-slate-900 text-slate-50 rounded-2xl p-4 text-[11px] leading-relaxed overflow-x-auto">
{`[User] 
   |
   v
[ Render Garden ]  --(job)-->  [ Render Bazaar ]  --(assignment)-->  [ NodeMuncher ]
                                                                      |
                                                                      v
                                                              [ Proof & Payout ]`}
        </pre>
      </section>

      <section className="mt-12 grid gap-6 md:grid-cols-2">
        {stages.map((s, i) => (
          <div
            key={s.title}
            className="rounded-2xl bg-white border border-black/5 p-5 shadow-sm flex flex-col"
          >
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold">{s.title}</h2>
              <span className="text-[11px] text-slate-500">Step {i + 1}</span>
            </div>

            <p className="mt-1 text-xs text-slate-500">{s.role}</p>
            <p className="mt-3 text-sm text-slate-700">{s.desc}</p>

            <ul className="mt-4 text-xs text-slate-700 space-y-1">
              {s.items.map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      <section className="mt-14 rounded-3xl bg-slate-900 px-5 py-6 text-slate-50">
        <h2 className="text-base font-semibold">Public data feeds</h2>
        <p className="mt-2 text-sm text-slate-300">
          Farpy exposes read-only feeds so anyone can see what the system is doing.
        </p>

        <div className="mt-4 grid gap-3 md:grid-cols-3 text-xs">
          <div className="rounded-xl border border-slate-700 p-3">
            <div className="font-semibold mb-1">Jobs</div>
            <div className="font-mono break-all">/status/jobs.json</div>
          </div>
          <div className="rounded-xl border border-slate-700 p-3">
            <div className="font-semibold mb-1">Proofs (lite)</div>
            <div className="font-mono break-all">/proofs-lite.json</div>
          </div>
          <div className="rounded-xl border border-slate-700 p-3">
            <div className="font-semibold mb-1">Trust status</div>
            <div className="font-mono break-all">/trust-status.json</div>
          </div>
        </div>
      </section>

      <section className="mt-14">
        <h2 className="text-xl font-semibold tracking-tight">Why this shape?</h2>
        <p className="mt-2 text-sm text-slate-700 max-w-3xl">
          Garden keeps things simple for users. Bazaar handles routing and safety. NodeMunchers
          do the heavy work. Proof & Payout makes the whole thing auditable. Each layer has a
          clear job and can be tested independently.
        </p>
      </section>

      <div className="h-20" />
    </div>
  );
}
