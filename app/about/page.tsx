export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#fdf7ec] text-slate-900 px-6 py-12 max-w-4xl mx-auto">

      {/* TITLE */}
      <h1 className="text-3xl font-semibold tracking-tight">About Farpy</h1>
      <p className="mt-2 text-sm text-slate-600">
        Distributed GPU power for everyone — simple, safe, and fast.
      </p>

      {/* SECTION: WHAT FARPY IS */}
      <section className="mt-10 space-y-3">
        <h2 className="text-xl font-semibold">What Farpy is</h2>

        <p className="text-sm text-slate-700 leading-relaxed">
          Farpy is a distributed GPU platform that lets anyone upload a file, press render,
          and instantly tap into a swarm of friendly GPUs. No configuration, no cluster
          setup, no ops — just drop your file and chill.
        </p>

        <p className="text-sm text-slate-700 leading-relaxed">
          Behind the scenes, Farpy routes your job through the Digital Highway, assigns a
          NodeMuncher (a participating GPU worker), verifies the output, and returns your
          results with a proof packet.
        </p>
      </section>

      {/* SECTION: TOY MODE */}
      <section className="mt-12 space-y-3">
        <h2 className="text-xl font-semibold">Why Toy Mode?</h2>

        <p className="text-sm text-slate-700 leading-relaxed">
          Farpy launches in Toy Mode first — a safe, minimal environment where uploads,
          render tests, and verification can be demonstrated openly. It shows the real
          flow of the system without requiring full-scale GPU integration or enterprise
          pipelines yet.
        </p>

        <p className="text-sm text-slate-700 leading-relaxed">
          Toy Mode is not fake. It’s the same pipeline Farpy uses internally: jobs, proofs,
          trust feeds, and verification logic. It simply runs with lighter examples until
          GPU render engines go live.
        </p>
      </section>

      {/* SECTION: LORE LIGHT */}
      <section className="mt-12 space-y-3">
        <h2 className="text-xl font-semibold">The Farpy world (light version)</h2>

        <p className="text-sm text-slate-700 leading-relaxed">
          Farpy uses a friendly metaphor to explain complex distributed computing:
        </p>

        <ul className="text-sm text-slate-700 space-y-2 ml-4">
          <li>• <strong>Farpies</strong> — everyday users who drop files and start renders.</li>
          <li>• <strong>NodeMunchers</strong> — GPU workers that process jobs safely.</li>
          <li>• <strong>Render Garden</strong> — the simple consumer-facing interface.</li>
          <li>• <strong>Render Bazaar</strong> — the marketplace where jobs get picked up.</li>
          <li>• <strong>Digital Highway</strong> — the secure routing layer connecting everything.</li>
        </ul>

        <p className="text-sm text-slate-700 leading-relaxed">
          These names keep things fun while reflecting real system architecture. Nothing is
          symbolic — everything maps to actual pipeline behavior.
        </p>
      </section>

      {/* SECTION: ORIGIN */}
      <section className="mt-12 space-y-3">
        <h2 className="text-xl font-semibold">Why we built this</h2>

        <p className="text-sm text-slate-700 leading-relaxed">
          Rendering, AI workloads, and GPU compute are too hard, too expensive, and too
          technical for most people. Farpy exists to make high-performance compute feel like
          pressing a single button — with safety, verification, and trust built in.
        </p>

        <p className="text-sm text-slate-700 leading-relaxed">
          Our belief is simple: creative and technical work should not be blocked by
          hardware. Anyone should be able to produce great work, regardless of the machine
          they own.
        </p>
      </section>

      {/* SECTION: TRANSPARENCY */}
      <section className="mt-12 space-y-3">
        <h2 className="text-xl font-semibold">Transparency & trust</h2>
        
        <p className="text-sm text-slate-700 leading-relaxed">
          Farpy publishes public status feeds, including job history, trust counters, and
          proof packets. We believe distributed compute must be visible and auditable —
          not a black box.
        </p>

        <p className="text-sm text-slate-700 leading-relaxed">
          Every job produces a verifiable packet containing hashes, runtime, GPU model,
          and final state. These feeds power the open status dashboard.
        </p>

        <a href="/status" className="underline text-sky-700 text-sm">
          View the public status dashboard →
        </a>
      </section>

      {/* SECTION: FUTURE */}
      <section className="mt-12 space-y-3">
        <h2 className="text-xl font-semibold">Where we’re going</h2>

        <p className="text-sm text-slate-700 leading-relaxed">
          After Toy Mode, Farpy will expand into full GPU rendering, AI inference,
          video pipelines, and distributed compute workloads. The long-term goal is to
          provide a universal GPU layer anyone can tap into — from hobbyists to studios.
        </p>
      </section>

      {/* SPACER */}
      <div className="h-16" />
    </div>
  );
}
