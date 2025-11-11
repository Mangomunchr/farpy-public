export const metadata = { title: "How it works — Farpy" };
export default function Page() {
  return (<main className="mx-auto max-w-3xl px-4 py-16">
    <h1 className="text-3xl font-bold">How Farpy works</h1>
    <ol className="mt-6 space-y-4 list-decimal pl-6 text-zinc-300">
      <li><b>Upload</b> — Drag files or connect a supported app.</li>
      <li><b>Pick a preset</b> — Speed/quality to match your deadline.</li>
      <li><b>Render</b> — Distributed GPUs crunch your job fast.</li>
      <li><b>Download</b> — Results + proof packet (hashes, runtime, GPU).</li>
    </ol>
    <p className="mt-6 text-zinc-400">Pause/cancel anytime. You only pay for completed work.</p>
  </main>);
}