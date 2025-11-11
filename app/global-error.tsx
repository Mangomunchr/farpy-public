"use client";
export default function GlobalError({ error }: { error: Error }) {
  return (
    <html>
      <body>
        <main className="mx-auto max-w-3xl px-4 py-24 text-center">
          <h1 className="text-3xl font-bold">App error</h1>
          <p className="mt-3 text-zinc-400">Reload the page. Details were logged.</p>
        </main>
      </body>
    </html>
  );
}