import Script from "next/script";

export default function Page() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-16">
      <Script
        id="ld-software"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context":"https://schema.org",
            "@type":"SoftwareApplication",
            name:"Farpy",
            applicationCategory:"DeveloperApplication",
            description:"Distributed GPU power for everyone. Tiny taps. Big compute.",
            url:"https://farpy.com",
            offers:{ "@type":"Offer", price:"0", priceCurrency:"USD" }
          })
        }}
      />
      <section className="text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">Distributed GPU power for everyone.</h1>
        <p className="mt-3 text-lg text-zinc-300">Tiny taps. Big compute. Drop, render, download.</p>
        <div className="mt-6 flex items-center justify-center gap-3">
          <a className="btn-pill btn-primary" href="/join">Join waitlist</a>
          <a className="btn-pill" href="/how">How it works</a>
        </div>
      </section>

      <section className="mt-14 grid md:grid-cols-3 gap-6">
        <div className="rounded-2xl border border-white/10 p-5">
          <h3 className="font-semibold">Upload</h3>
          <p className="mt-2 text-zinc-400">Drag files or connect supported apps.</p>
        </div>
        <div className="rounded-2xl border border-white/10 p-5">
          <h3 className="font-semibold">Render</h3>
          <p className="mt-2 text-zinc-400">Distributed GPUs crunch your job fast.</p>
        </div>
        <div className="rounded-2xl border border-white/10 p-5">
          <h3 className="font-semibold">Download</h3>
          <p className="mt-2 text-zinc-400">Get results + a proof packet (hashes, runtime, GPU).</p>
        </div>
      </section>

      <section className="mt-14">
        <h2 className="text-2xl font-bold">What Farpy is</h2>
        <p className="mt-2 text-zinc-400">
          A distributed GPU platform for rendering and AI workloads. Simple for casual users (Render Garden),
          powerful for pros and studios (Render Forest), and fulfilled by NodeMunchers in the Render Bazaar.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-bold">Trust & Safety</h2>
        <ul className="mt-2 text-zinc-400 list-disc pl-5 space-y-1">
          <li>Jobs are sandboxed; files are hashed (SHA-256) and encrypted in transit/storage.</li>
          <li>Payouts only after verified completion; every job produces a proof packet.</li>
          <li>Audit logs and public status for transparency.</li>
        </ul>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-bold">Get started</h2>
        <div className="mt-3 flex flex-wrap gap-3">
          <a className="btn-pill btn-primary" href="/join">Join waitlist</a>
          <a className="btn-pill" href="/download">Desktop & SDK</a>
          <a className="btn-pill" href="/press">Press kit</a>
        </div>
      </section>
    </main>
  );
}