export const metadata = { title: "FAQ — Farpy" };

const Q = [
  ["What is Farpy?", "Distributed GPU power for everyone — drop a job, we route it to free GPUs, you download results."],
  ["Who is it for?", "Creators, studios, and anyone who needs rendering or GPU AI without owning the hardware."],
  ["How do payouts work?", "Nodes get paid only after verified completion (hash-checked proof packets)."],
  ["What can I render?", "3D renders, video, AI inference/batch jobs. Upload limits and formats will be listed at launch."],
  ["Is this safe?", "Jobs are sandboxed, logged, and audited. Abuse is filtered. We keep an uptime/status page public."],
  ["Pricing?", "Simple per-minute/per-GPU tiers. Early access gets discounted credits."],
  ["Do I keep my IP?", "Yes. You upload, you own the output. Nodes see only what’s needed to compute your job."],
  ["How fast is it?", "We route to available GPUs across a pool; speed scales with supply and your chosen tier."],
  ["Business/enterprise?", "Yes — version-pinned API, canaries, DLQ, audit logs, and SLOs are part of the stack."],
  ["Where do I start?", "Hit Join, or hop into Discord."]
];

export default function Page() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-16">
      <h1 className="text-3xl font-bold">FAQ</h1>
      <div className="mt-6 space-y-6">
        {Q.map(([q,a]) => (
          <div key={q}>
            <h2 className="font-semibold">{q}</h2>
            <p className="text-zinc-400 mt-1">{a}</p>
          </div>
        ))}
      </div>
    </main>
  );
}