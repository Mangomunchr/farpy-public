export default function FAQ(){
  return (
    <main className="section-k">
      <h1 className="text-3xl font-bold">FAQ</h1>
      <div className="mt-6 space-y-4">
        <details className="card-k"><summary className="font-semibold">What can I render?</summary><p className="mt-2 text-sm text-[var(--fp-sub)]">3D stills/animation, video transcodes, and AI inference are great starters.</p></details>
        <details className="card-k"><summary className="font-semibold">Is my data safe?</summary><p className="mt-2 text-sm text-[var(--fp-sub)]">Files are hashed, jobs sandboxed, and nodes are scored/verified.</p></details>
        <details className="card-k"><summary className="font-semibold">How do I get results?</summary><p className="mt-2 text-sm text-[var(--fp-sub)]">We notify you to download when the proof checks pass.</p></details>
      </div>
    </main>
  );
}