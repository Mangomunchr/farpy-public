export default function Download(){
  return (
    <main className="section-k">
      <h1 className="text-3xl font-bold">Download</h1>
      <div className="mt-6 grid md:grid-cols-3 gap-4">
        <a className="card-k" href="#" aria-disabled="true"><div className="font-semibold">Windows</div><p className="text-sm text-[var(--fp-sub)]">Coming soon</p></a>
        <a className="card-k" href="#" aria-disabled="true"><div className="font-semibold">macOS</div><p className="text-sm text-[var(--fp-sub)]">Coming soon</p></a>
        <a className="card-k" href="#" aria-disabled="true"><div className="font-semibold">SDK / CLI</div><p className="text-sm text-[var(--fp-sub)]">Docs soon</p></a>
      </div>
    </main>
  );
}