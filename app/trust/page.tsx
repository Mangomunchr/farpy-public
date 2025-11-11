export const metadata = { title: "Trust — Farpy" };

export default function Page() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-16">
      <h1 className="text-3xl font-bold">Farpy Trust & Safety</h1>
      <p className="mt-2 text-zinc-400">
        Gold-standard integrity: KYC/AML for payouts, sandboxed jobs, audit logs, transparent status.
      </p>
      <ul className="mt-6 text-zinc-400 list-disc pl-5 space-y-2">
        <li>Proof packets per job (inputs, outputs, node, runtime, pay, timestamp).</li>
        <li>Payouts only after verified completion and hash validation.</li>
        <li>Public uptime & job explorer (coming soon).</li>
      </ul>
    </main>
  );
}