export default function DocsPage() {
  return (
    <main className="min-h-screen py-20">
      <div className="max-w-5xl mx-auto px-6 md:px-8 space-y-10">
        <header>
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-neutral-500 mb-2">
            Farpy API v1
          </p>
          <h1 className="text-2xl md:text-3xl font-semibold tracking-tight">
            Farpy API documentation
          </h1>
          <p className="mt-3 text-sm md:text-base text-neutral-600">
            Farpy provides a stable, versioned HTTP API for submitting jobs, checking
            status, and retrieving results from the distributed GPU network.
          </p>
        </header>

        <section className="space-y-4 text-sm text-neutral-700">
          <div className="rounded-2xl border bg-white/90 p-4">
            <h2 className="text-base font-semibold mb-1">Base URL</h2>
            <p className="font-mono text-xs bg-neutral-50 rounded px-2 py-1 inline-block">
              https://api.farpy.com/v1
            </p>
          </div>

          <div className="rounded-2xl border bg-white/90 p-4">
            <h2 className="text-base font-semibold mb-1">Core endpoints</h2>
            <ul className="list-disc list-inside text-xs md:text-sm space-y-1">
              <li>
                <span className="font-mono">POST /jobs</span> — submit a new render or AI job
              </li>
              <li>
                <span className="font-mono">GET /jobs/:id</span> — check job status
              </li>
              <li>
                <span className="font-mono">GET /jobs/:id/result</span> — download the result
              </li>
            </ul>
          </div>

          <div className="rounded-2xl border bg-white/90 p-4">
            <h2 className="text-base font-semibold mb-1">Stability</h2>
            <p className="text-xs md:text-sm">
              The Farpy API is versioned and designed to avoid breaking changes. New
              behavior is introduced via explicit version upgrades, not silent changes.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
