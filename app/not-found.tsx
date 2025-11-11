export default function NotFound() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-24 text-center">
      <h1 className="text-3xl font-bold">Page not found</h1>
      <p className="mt-2 text-zinc-400">Let’s send you home.</p>
      <a href="/" className="inline-block mt-6 px-4 py-2 rounded-xl border border-zinc-800">Back to Farpy</a>
    </main>
  );
}