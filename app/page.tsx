export default function Page() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-20">
      <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Distributed GPU power for everyone.</h1>
      <p className="mt-4 text-zinc-300">Tiny taps. Big compute.</p>

      <div className="mt-8 flex gap-3">
        <a href="/join" className="px-4 py-2 rounded-xl bg-white text-black font-medium">Render Now</a>
        <a href="/about" className="px-4 py-2 rounded-xl border border-zinc-700">About</a>
      </div>

      <div className="mt-12 grid md:grid-cols-3 gap-6">
        <div className="rounded-2xl border border-zinc-800 p-5">
          <h3 className="font-semibold">Drop</h3>
          <p className="text-sm text-zinc-400 mt-1">Upload your render or AI job.</p>
        </div>
        <div className="rounded-2xl border border-zinc-800 p-5">
          <h3 className="font-semibold">Farpy it</h3>
          <p className="text-sm text-zinc-400 mt-1">We route to free GPUs. Fast.</p>
        </div>
        <div className="rounded-2xl border border-zinc-800 p-5">
          <h3 className="font-semibold">Done</h3>
          <p className="text-sm text-zinc-400 mt-1">Download results; nodes get paid.</p>
        </div>
      </div>
    </section>
  );
}