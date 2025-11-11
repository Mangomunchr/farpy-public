import VibeToggle from "./components/VibeToggle";
export default function Page() {
  return (
    <main>
      <section className="mx-auto max-w-6xl px-4 py-16">
        <div className="badge-soft inline-flex items-center gap-2 text-xs text-zinc-300">
          <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" /> Early access open
        </div>

        <h1 className="mt-5 text-4xl md:text-6xl font-extrabold tracking-tight">
          Distributed GPU power for everyone.
        </h1>
        <p className="mt-4 text-zinc-300 text-lg">Tiny taps. Big compute.</p>

        <div className="mt-8 flex gap-3">
          <a href="/join" className="btn-pill btn-primary shadow hover:shadow-lg transition">Render Now</a>
          <a href="/about" className="btn-pill btn-ghost hover:border-zinc-600 transition">About</a>
        </div>`n

        <div className="mt-14 grid md:grid-cols-3 gap-6">
          {[
            { t: "Drop", d: "Upload your render or AI job." },
            { t: "Farpy it", d: "We route to free GPUs. Fast." },
            { t: "Done", d: "Download results; nodes get paid." },
          ].map((c) => (
            <div key={c.t} className="card-soft p-5 hover:border-zinc-600/80 transition group">
              <h3 className="font-semibold">{c.t}</h3>
              <p className="text-sm text-zinc-400 mt-1">{c.d}</p>
              <div className="mt-4 h-px bg-gradient-to-r from-transparent via-zinc-800 to-transparent group-hover:via-zinc-600" />
            </div>
          ))}
        </div>
      </section>

      <section className="relative isolate mx-4 md:mx-auto md:max-w-6xl overflow-hidden rounded-3xl border border-zinc-800 my-12 glow cta-stripe">
        <div aria-hidden className="pointer-events-none absolute inset-0 bg-[radial-gradient(120%_120%_at_80%_-20%,rgba(255,180,220,.18),transparent_60%)]" />
        <div className="relative px-6 py-10 md:px-12 md:py-12">
          <h2 className="text-2xl md:text-3xl font-bold">Tap render. We’ll wake the GPUs.</h2>
          <p className="mt-2 text-zinc-300">Creators drop files. NodeMunchers earn. That’s it.</p>
          <div className="mt-6 flex gap-3">
            <a href="/join" className="btn-pill btn-primary">Get Started</a>
            <a href="/how" className="btn-pill btn-ghost">How it works</a>
          </div>
        </div>
      </section>
    </main>
  );
}
