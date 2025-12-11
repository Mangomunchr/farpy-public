export default function StatusPage() {
  return (
    <main className="min-h-screen py-20">
      <div className="max-w-5xl mx-auto px-6 md:px-8 space-y-10">
        <header>
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-neutral-500 mb-2">
            Status & uptime
          </p>
          <h1 className="text-2xl md:text-3xl font-semibold tracking-tight">
            Farpy status overview
          </h1>
          <p className="mt-3 text-sm md:text-base text-neutral-600">
            This page links to live status and proof snapshots for Farpy Toy Mode.
            Do not rely on Toy Mode for production workloads.
          </p>
        </header>

        <section className="grid gap-4 md:grid-cols-2 text-xs md:text-sm text-neutral-700">
          <div className="rounded-2xl border bg-white/90 p-4">
            <h2 className="text-sm font-semibold mb-1">Core status</h2>
            <ul className="list-disc list-inside space-y-1">
              <li>
                <a href="https://status.farpy.com" className="underline">
                  Public status dashboard
                </a>
              </li>
              <li>
                <a href="/out/proofs-lite.json" className="underline">
                  Proof snapshots (lite JSON)
                </a>
              </li>
              <li>
                <a href="/out/payouts-lite.json" className="underline">
                  Payout snapshots (lite JSON)
                </a>
              </li>
            </ul>
          </div>

          <div className="rounded-2xl border bg-white/90 p-4">
            <h2 className="text-sm font-semibold mb-1">What this shows</h2>
            <p className="mb-2">
              These views are meant to demonstrate how Farpy reports job activity,
              proofs, and payouts from Node A while in Toy Mode.
            </p>
            <p className="text-[11px] text-neutral-500">
              Data is experimental and may be reset during development.
            </p>
          </div>
        </section>

        <section className="rounded-2xl border bg-white/90 p-4 text-xs md:text-sm text-neutral-700">
          <h2 className="text-sm font-semibold mb-2">Disclaimer</h2>
          <p>
            Farpy is currently in Toy Mode. Status, proofs, and payouts are for
            testing and demonstration only and may change without notice.
          </p>
        </section>
      </div>
    </main>
  );
}
