export default function TrustPage() {
  return (
    <main className="min-h-screen py-20">
      <div className="max-w-5xl mx-auto px-6 md:px-8 space-y-10">
        <header>
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-neutral-500 mb-2">
            Trust & Safety
          </p>
          <h1 className="text-2xl md:text-3xl font-semibold tracking-tight">
            The Farpy Trust Standard
          </h1>
          <p className="mt-3 text-sm md:text-base text-neutral-600">
            Farpy is designed as a verifiable, auditable GPU mesh. Every job is
            sandboxed, hashed, and checked before any payout is issued.
          </p>
        </header>

        <section className="grid gap-4 md:grid-cols-3 text-xs md:text-sm text-neutral-700">
          <div className="rounded-2xl border bg-white/90 p-4">
            <h2 className="text-sm font-semibold mb-1">Pwoof System</h2>
            <p>
              Every job produces a proof packet: input hash, output hash, node ID,
              runtime, and timestamps. This gives an auditable trail for each run.
            </p>
          </div>
          <div className="rounded-2xl border bg-white/90 p-4">
            <h2 className="text-sm font-semibold mb-1">Payload Engine</h2>
            <p>
              Payouts are only released after a valid proof packet is recorded.
              No speculative or predictive payouts. Completed, verified work only.
            </p>
          </div>
          <div className="rounded-2xl border bg-white/90 p-4">
            <h2 className="text-sm font-semibold mb-1">Bottle Goggle</h2>
            <p>
              Metrics, logs, and status feeds power public dashboards, uptime checks,
              and anomaly alerts across the mesh.
            </p>
          </div>
        </section>

        <section className="grid gap-4 md:grid-cols-2 text-xs md:text-sm text-neutral-700">
          <div className="rounded-2xl border bg-white/90 p-4">
            <h2 className="text-sm font-semibold mb-1">Security model</h2>
            <ul className="list-disc list-inside space-y-1">
              <li>Strict file-type whitelists and AV scanning on upload.</li>
              <li>Per-job sandbox execution with isolated workspaces.</li>
              <li>Outbound-only NodeMuncher agents (no inbound ports).</li>
              <li>SHA256 hashing + encrypted transit and storage.</li>
            </ul>
          </div>
          <div className="rounded-2xl border bg-white/90 p-4">
            <h2 className="text-sm font-semibold mb-1">Reliability & integrity</h2>
            <ul className="list-disc list-inside space-y-1">
              <li>Dry-run test jobs to detect issues early.</li>
              <li>Dead-letter queues for failed or stuck work.</li>
              <li>Public status and proof snapshots from Node A.</li>
            </ul>
          </div>
        </section>

        <section className="rounded-2xl border bg-white/90 p-4 text-xs md:text-sm text-neutral-700">
          <h2 className="text-sm font-semibold mb-2">Commitment</h2>
          <p className="mb-2">
            Farpy is intentionally conservative about risk. No unverified payouts,
            no opaque execution, and no hidden changes to how jobs are handled.
          </p>
          <p>
            As the platform grows, additional audits, formal verification, and
            clearer public reporting will be added to this page.
          </p>
        </section>
      </div>
    </main>
  );
}
