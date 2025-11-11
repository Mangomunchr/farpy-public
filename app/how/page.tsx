export default function How() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-16 space-y-6">
      <h1 className="text-3xl font-bold">How Farpy Works</h1>
      <ol className="list-decimal pl-6 text-zinc-300 space-y-2">
        <li>Upload job → we chunk, hash, and queue it.</li>
        <li>Nodes pick it up → compute runs in sandbox.</li>
        <li>We verify outputs → you download; node gets paid.</li>
      </ol>
    </main>
  );
}