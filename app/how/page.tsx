export const metadata = { title: "How it works — Farpy" };

const steps: [string,string][] = [
  ["Drop", "Upload your render or AI job."],
  ["Farpy it", "We route to free GPUs. Fast."],
  ["Done", "Download results; nodes get paid."]
];

export default function Page() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-16">
      <h1 className="text-3xl font-bold">How Farpy works</h1>
      <p className="mt-2 text-zinc-400">Tiny taps. Big compute.</p>

      <div className="mt-8 grid md:grid-cols-3 gap-6">
        {steps.map(([t,d]) => (
          <div key={t} className="card-soft p-5">
            <div className="font-semibold">{t}</div>
            <div className="text-sm text-zinc-400 mt-1">{d}</div>
          </div>
        ))}
      </div>

      <div className="mt-12 grid md:grid-cols-2 gap-6">
        <div className="card-soft p-5">
          <div className="font-semibold">What files can I drop?</div>
          <div className="text-sm text-zinc-400 mt-1">Renders (Blender/Unreal/etc.) and AI jobs (images/video/audio). Docs coming soon.</div>
        </div>
        <div className="card-soft p-5">
          <div className="font-semibold">How are nodes paid?</div>
          <div className="text-sm text-zinc-400 mt-1">After verified completion. Each job emits a proof packet and then pays out.</div>
        </div>
      </div>
    </main>
  );
}