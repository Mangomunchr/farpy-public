export default function How(){
  return (
    <main className="section-k">
      <h1 className="text-3xl font-bold">How Farpy works</h1>
      <div className="mt-6 grid md:grid-cols-3 gap-4">
        <div className="card-k"><div className="font-semibold">1) Drop</div><p className="text-sm text-[var(--fp-sub)]">Upload your scene, video, or AI task.</p></div>
        <div className="card-k"><div className="font-semibold">2) Distribute</div><p className="text-sm text-[var(--fp-sub)]">We chunk and route work to trusted GPUs.</p></div>
        <div className="card-k"><div className="font-semibold">3) Deliver</div><p className="text-sm text-[var(--fp-sub)]">Results come back verified and stitched.</p></div>
      </div>
      <div className="mt-6 card-k">
        <div className="font-semibold">Trust & safety, in plain English</div>
        <ul className="mt-2 text-sm text-[var(--fp-sub)] list-disc pl-5 space-y-2">
          <li>Every job has a proof packet (hashes, runtime, node ID).</li>
          <li>Payouts only after verified completion.</li>
          <li>Abuse filters + sandboxed execution.</li>
        </ul>
      </div>
    </main>
  );
}