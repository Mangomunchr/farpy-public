export default function NodesPage() {
  return (
    <main className="min-h-screen py-20">
      <div className="max-w-4xl mx-auto px-6 md:px-8 space-y-10">

        <header>
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-neutral-500 mb-2">
            NodeMunchers
          </p>
          <h1 className="text-2xl md:text-3xl font-semibold tracking-tight">
            Run your GPU • Earn per completed job
          </h1>
          <p className="mt-3 text-sm md:text-base text-neutral-600 max-w-2xl">
            Help power the Farpy mesh. Install the NodeMuncher agent, complete
            GPU jobs, and get paid automatically via the Payload Engine after
            proof validation.
          </p>
        </header>

        <section className="grid gap-4 md:grid-cols-2 text-xs md:text-sm text-neutral-700">
          <div className="rounded-2xl border bg-white/90 p-4">
            <h2 className="text-sm font-semibold mb-1">How earnings work</h2>
            <ul className="list-disc list-inside space-y-1">
              <li>Jobs are pulled over outbound HTTPS only.</li>
              <li>Each job produces a proof packet (Pwoof System).</li>
              <li>Payouts only occur after verified completion.</li>
              <li>Runtime + GPU type determine pay rate.</li>
            </ul>
          </div>

          <div className="rounded-2xl border bg-white/90 p-4">
            <h2 className="text-sm font-semibold mb-1">System requirements</h2>
            <ul className="list-disc list-inside space-y-1">
              <li>NVIDIA or AMD GPU (CUDA / ROCm supported later).</li>
              <li>Windows now; Linux + macOS coming soon.</li>
              <li>Stable internet connection.</li>
              <li>No inbound ports required.</li>
            </ul>
          </div>
        </section>

        <section className="rounded-2xl border bg-white/90 p-6 text-neutral-700 text-xs md:text-sm space-y-4">
          <h2 className="text-sm font-semibold">Download (Test Agent)</h2>
          <p>
            The public installer is launching soon. For now, the early-access test
            agent is distributed in the Farpy Discord.
          </p>
          <a
            href="https://discord.gg/farpy"
            className="inline-block px-5 py-2.5 rounded-full bg-black text-white text-xs font-medium"
          >
            Join Discord Early Access
          </a>
        </section>

        <section className="rounded-2xl border bg-white/90 p-6 text-neutral-700 text-xs md:text-sm space-y-3">
          <h2 className="text-sm font-semibold">Live status & tools</h2>
          <ul className="list-disc list-inside space-y-1">
            <li><a className="underline" href="/nodemunchers/status">Node status panel</a></li>
            <li><a className="underline" href="/out/proofs-lite.json">Proof snapshots</a></li>
            <li><a className="underline" href="/out/payouts-lite.json">Payout snapshots</a></li>
          </ul>
        </section>

        <footer className="pt-10 text-neutral-400 text-[11px]">
          Farpy Toy Mode — Not production-ready. Agents and earnings are experimental.
        </footer>

      </div>
    </main>
  );
}
