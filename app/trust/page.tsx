export const metadata = { title: "Trust — Farpy" };

export default function Page() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-16">
      <h1 className="text-3xl font-bold">Farpy Trust & Safety</h1>
      <p className="mt-2 text-zinc-400">
        Gold-standard integrity: verified payouts, sandboxed jobs, audit logs, public status.
      </p>

      <div className="mt-6 grid gap-4">
        <div className="card-soft p-5">
          <div className="font-semibold">Proof packets</div>
          <div className="text-sm text-zinc-400 mt-1">
            Every job emits a receipt: input/output hashes, node ID, runtime, GPU model, pay, timestamp.
          </div>
        </div>
        <div className="card-soft p-5">
          <div className="font-semibold">Payout policy</div>
          <div className="text-sm text-zinc-400 mt-1">
            Payouts occur only after verified completion and hash validation. No speculative flows.
          </div>
        </div>
        <div className="card-soft p-5">
          <div className="font-semibold">Security</div>
          <div className="text-sm text-zinc-400 mt-1">
            SHA256 pipeline, sandboxed workers, canary-by-account, DLQ, synthetic probes, audit logs.
          </div>
        </div>
        <div className="card-soft p-5">
          <div className="font-semibold">Transparency</div>
          <div className="text-sm text-zinc-400 mt-1">
            Public status & planned Job Explorer for verifiable uptime and payout history.
          </div>
        </div>
      </div>
    </main>
  );
}