import ChompySticker from "@/components/ChompySticker";

function Tile({title,desc}:{title:string;desc:string}) {
  return <div className="card-k"><div className="text-lg font-semibold mb-1">{title}</div><p className="text-sm text-[var(--fp-sub)]">{desc}</p></div>;
}

export default function Page(){
  return (
    <main>
      {/* HERO */}
      <section className="section-k grid md:grid-cols-[1fr,220px] gap-8 items-center">
        <div>
          <div className="chip mb-3">Distributed GPU power for everyone</div>
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
            Tiny taps. <span className="bg-[var(--fp-primary)] px-2 rounded-xl">Big compute.</span>
          </h1>
          <p className="mt-4 text-[15px] text-[var(--fp-sub)]">
            Drop your file, press render, and a swarm of friendly computers help out.
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            <a className="btn-pill btn-primary" href="/join">Join waitlist</a>
            <a className="btn-pill" href="/how">How it works</a>
            <a className="btn-pill" href="/download">Desktop & SDK</a>
          </div>
          <div className="mt-6 flex gap-2 text-xs text-[var(--fp-sub)]">
            <span className="chip">🌼 Render Garden</span>
            <span className="chip">🛠️ Render Bazaar</span>
            <span className="chip">🌲 Render Forest</span>
          </div>
        </div>
        <div className="justify-self-center"><ChompySticker /></div>
      </section>

      {/* 3-STEP */}
      <section className="section-k grid md:grid-cols-3 gap-4">
        <Tile title="Upload" desc="Drag files or connect supported apps." />
        <Tile title="Render" desc="Distributed GPUs crunch your job fast." />
        <Tile title="Download" desc="Get results + a proof packet (hashes, runtime, GPU)." />
      </section>

      {/* USE CASES */}
      <section className="section-k">
        <h2 className="text-2xl font-bold">Who it’s for</h2>
        <div className="mt-4 grid md:grid-cols-4 gap-4">
          <Tile title="YouTubers" desc="Faster edits & exports without cooking your laptop." />
          <Tile title="3D artists" desc="Stills & animation renders while you keep creating." />
          <Tile title="Architects" desc="Twinmotion / Lumion / D5 batches, overnight to done." />
          <Tile title="Students" desc="Affordable credits for class projects." />
        </div>
      </section>

      {/* PROOF & STATUS */}
      <section className="section-k">
        <div className="card-k">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold">Proof & status</h2>
            <a className="btn-pill" href="/status">Status</a>
          </div>
          <ul className="mt-3 text-sm text-[var(--fp-sub)] list-disc pl-5 space-y-2">
            <li>Every job yields a <b>proof packet</b> (hash in/out, node ID, runtime, GPU, pay, time).</li>
            <li>Payouts happen only after verification — no “magic.”</li>
            <li>Public status for transparency.</li>
          </ul>
        </div>
      </section>

      {/* PRICING TEASER */}
      <section className="section-k grid md:grid-cols-3 gap-4">
        <div className="card-k"><div className="font-semibold">Starter</div><p className="text-sm text-[var(--fp-sub)]">Pay-as-you-go minutes. Great for quick jobs.</p></div>
        <div className="card-k"><div className="font-semibold">Creator</div><p className="text-sm text-[var(--fp-sub)]">Bundle credits for frequent renders.</p></div>
        <div className="card-k"><div className="font-semibold">Studio</div><p className="text-sm text-[var(--fp-sub)]">Priority lanes & team seats.</p></div>
      </section>

      {/* NODEMUNCHERS CTA */}
      <section className="section-k grid md:grid-cols-[1fr,1fr] gap-4">
        <div className="card-k">
          <div className="text-lg font-semibold">Become a NodeMuncher</div>
          <p className="mt-1 text-sm text-[var(--fp-sub)]">
            Plug in GPUs, complete verified jobs, get paid. Reliability scores unlock more work.
          </p>
          <a className="mt-4 inline-flex btn-pill btn-primary" href="/jobs">Learn more</a>
        </div>
        <div className="card-k">
          <div className="text-lg font-semibold">Safety quick list</div>
          <ul className="mt-2 text-sm text-[var(--fp-sub)] list-disc pl-5 space-y-1">
            <li>Sandboxed execution</li><li>Hash validation</li><li>Audit logs</li><li>Abuse filtering</li>
          </ul>
          <a className="mt-3 inline-flex btn-pill" href="/trust">Read Trust page</a>
        </div>
      </section>

      {/* FAQ MINI */}
      <section className="section-k">
        <h2 className="text-2xl font-bold">Quick answers</h2>
        <div className="mt-4 grid md:grid-cols-3 gap-4">
          <Tile title="Will it work with my app?" desc="We’re shipping integrations and a simple uploader." />
          <Tile title="Do I lose my source files?" desc="No. Files are encrypted in transit/storage, jobs are isolated." />
          <Tile title="Can I see performance?" desc="Yes. Status shows uptime; proof packets summarize each job." />
        </div>
      </section>

      {/* CTA */}
      <section className="section-k text-center">
        <a className="btn-pill btn-primary" href="/join">Join waitlist</a>
        <a className="btn-pill ml-2" href="/download">Desktop & SDK</a>
      </section>
    </main>
  );
}