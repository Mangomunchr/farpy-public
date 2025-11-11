export default function Error() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-24 text-center">
      <h1 className="text-3xl font-bold">Something went wrong</h1>
      <p className="mt-3 text-zinc-400">Please retry. If it persists, check <a className="underline" href="/status">/status</a>.</p>
    </main>
  );
}