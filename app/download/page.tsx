export default function DownloadPage() {
  return (
    <main className="min-h-screen py-20">
      <div className="max-w-4xl mx-auto px-6 md:px-8 space-y-10">
        <header>
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-neutral-500 mb-2">
            Downloads
          </p>
          <h1 className="text-2xl md:text-3xl font-semibold tracking-tight">
            Farpy downloads & installers
          </h1>
          <p className="mt-3 text-sm md:text-base text-neutral-600 max-w-2xl">
            This page lists official Farpy installers and tools. Farpy is currently
            in Toy Mode; installers are experimental and may change.
          </p>
        </header>

        <section className="grid gap-4 md:grid-cols-2 text-xs md:text-sm text-neutral-700">
          <div className="rounded-2xl border bg-white/90 p-4">
            <h2 className="text-sm font-semibold mb-1">NodeMuncher (Windows)</h2>
            <p className="mb-3">
              Early-access Windows test agent. Use only if you are part of the
              Farpy test group.
            </p>
            <a
              href="https://discord.gg/farpy"
              className="inline-block px-5 py-2.5 rounded-full bg-black text-white text-xs font-medium"
            >
              Get installer via Discord
            </a>
            <p className="mt-2 text-[11px] text-neutral-500">
              Public installer and auto-update channel will be listed here when
              ready.
            </p>
          </div>

          <div className="rounded-2xl border bg-white/90 p-4">
            <h2 className="text-sm font-semibold mb-1">CLI / SDK</h2>
            <p className="mb-3">
              Command-line tools and SDKs will allow direct integration from
              render tools and pipelines into Farpy.
            </p>
            <button
              className="px-5 py-2.5 rounded-full bg-neutral-200 text-neutral-600 text-xs font-medium cursor-not-allowed"
              disabled
            >
              Coming soon
            </button>
            <p className="mt-2 text-[11px] text-neutral-500">
              Documentation and download links will be added as soon as the
              developer preview is live.
            </p>
          </div>
        </section>

        <section className="rounded-2xl border bg-white/90 p-4 text-xs md:text-sm text-neutral-700">
          <h2 className="text-sm font-semibold mb-2">Safety note</h2>
          <p className="mb-1">
            Only download Farpy software from this site or the official Farpy
            GitHub and Discord. Avoid unofficial binaries or repackaged installers.
          </p>
          <p className="text-[11px] text-neutral-500">
            Farpy Toy Mode is not production-ready. Use test agents at your own
            risk and only on machines you control.
          </p>
        </section>
      </div>
    </main>
  );
}
