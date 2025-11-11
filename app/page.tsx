import ChompySticker from "@/components/ChompySticker";

export default function Page(){
  return (
    <main>
      <section className="section-k grid md:grid-cols-[1fr,240px] gap-8 items-center">
        <div>
          <div className="chip mb-3">Distributed GPU power for everyone</div>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Tiny taps. <span className="bg-[var(--fp-primary)] px-2 rounded-xl">Big compute.</span>
          </h1>
          <p className="mt-4 text-[15px] text-[var(--fp-sub)]">
            Drop your file, press render, and a swarm of friendly computers help out.
            Fast, safe, and wallet-friendly.
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            <a className="btn-pill btn-primary" href="/join">Join waitlist</a>
            <a className="btn-pill" href="/download">Desktop & SDK</a>
            <a className="btn-pill" href="/how">How it works</a>
          </div>
          <div className="mt-6 flex gap-2 text-xs text-[var(--fp-sub)]">
            <span className="chip">🌼 Render Garden</span>
            <span className="chip">🛠️ Render Bazaar</span>
            <span className="chip">🌲 Render Forest</span>
          </div>
        </div>
        <div className="justify-self-center"><ChompySticker /></div>
      </section>

      <section className="section-k grid md:grid-cols-3 gap-4">
        <div className="card-k"><div className="text-lg font-semibold mb-1">Fast</div><p className="text-sm text-[var(--fp-sub)]">A thousand invisible GPUs wake up to help you.</p></div>
        <div className="card-k"><div className="text-lg font-semibold mb-1">Safe</div><p className="text-sm text-[var(--fp-sub)]">Hashes, isolation, audit logs — gold-standard trust.</p></div>
        <div className="card-k"><div className="text-lg font-semibold mb-1">Affordable</div><p className="text-sm text-[var(--fp-sub)]">Pay for minutes, not machines.</p></div>
      </section>

      <section className="section-k">
        <div className="card-k">
          <div className="text-lg font-semibold">30-sec explainer</div>
          <ol className="mt-3 space-y-2 text-sm text-[var(--fp-sub)] list-decimal list-inside">
            <li>Drop your file.</li>
            <li>We slice the job into safe chunks.</li>
            <li>Trusted NodeMunchers render it.</li>
            <li>You download the result. Done.</li>
          </ol>
        </div>
      </section>
    </main>
  );
}