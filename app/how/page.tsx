export default function Page(){
  return (
    <main className="mx-auto max-w-3xl px-4 py-16 space-y-4">
      <h1 className="text-3xl font-bold">How Farpy works</h1>
      <ol className="list-decimal pl-6 text-zinc-300 space-y-2">
        <li>Drop: upload your render/AI job.</li>
        <li>Route: we send it to free GPUs.</li>
        <li>Done: download; nodes get paid.</li>
      </ol>
    </main>
  );
}