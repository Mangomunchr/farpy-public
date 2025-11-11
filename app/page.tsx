export default function Page() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-20">
      <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">
        Distributed GPU power for everyone.
      </h1>
      <p className="mt-4 text-zinc-300 text-lg">Tiny taps. Big compute.</p>

      <div className="mt-8 flex gap-3">
        <a href="/join" className="px-4 py-2 rounded-xl bg-white text-black font-medium shadow hover:shadow-lg transition">
          Render Now
        </a>
        <a href="/about" className="px-4 py-2 rounded-xl border border-zinc-800 hover:border-zinc-600 transition">
          About
        </a>
      </div>

      <div className="mt-14 grid md:grid-cols-3 gap-6">
        {[
          { t: "Drop", d: "Upload your render or AI job." },
          { t: "Farpy it", d: "We route to free GPUs. Fast." },
          { t: "Done", d: "Download results; nodes get paid." },
        ].map((c) => (
          <div key={c.t} className="rounded-2xl border border-zinc-800/70 p-5 hover:border-zinc-600/80 transition group">
            <h3 className="font-semibold">{c.t}</h3>
            <p className="text-sm text-zinc-400 mt-1">{c.d}</p>
            <div className="mt-4 h-px bg-gradient-to-r from-transparent via-zinc-800 to-transparent group-hover:via-zinc-600" />
          </div>
        ))}
      </div>
    </section>
  );
}