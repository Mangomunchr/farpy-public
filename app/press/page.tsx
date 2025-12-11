export default function PressPage() {
  return (
    <div className="min-h-screen bg-[#fdf7ec] text-slate-900 px-6 py-12 max-w-4xl mx-auto">

      {/* TITLE */}
      <h1 className="text-3xl font-semibold tracking-tight">Farpy Press Kit</h1>
      <p className="mt-2 text-sm text-slate-600">
        Official assets, boilerplates, and brand guidelines for media and partners.
      </p>

      {/* SHORT BLURB */}
      <section className="mt-10">
        <h2 className="text-xl font-semibold">Farpy — Short Blurb</h2>
        <p className="mt-2 text-sm text-slate-700 leading-relaxed">
          Farpy is a distributed GPU platform that turns rendering and compute into a
          single button press. Upload a file, press render, and a swarm of friendly GPUs
          process it with safety, verification, and proof-of-compute built in.
        </p>
      </section>

      {/* LONG BLURB */}
      <section className="mt-10">
        <h2 className="text-xl font-semibold">Farpy — Long Boilerplate</h2>
        <p className="mt-2 text-sm text-slate-700 leading-relaxed">
          Farpy is a global distributed GPU compute platform designed to make rendering,
          AI workloads, and heavy compute accessible to everyone. Instead of configuring
          clusters, cloud VMs, or complicated pipelines, users simply upload a file and
          press render. Farpy routes each job across its Digital Highway, assigns a safe
          sandboxed worker called a NodeMuncher, and returns results with a verifiable
          proof packet that includes hashes, runtime, and GPU model.
        </p>

        <p className="mt-2 text-sm text-slate-700 leading-relaxed">
          Farpy launches in Toy Mode — a simplified, transparent version of the system
          showcasing live job flows, trust feeds, and real verification logic. Over time,
          the platform expands into full GPU rendering, real-time AI inference, and
          distributed compute for creators, studios, and enterprises.
        </p>

        <p className="mt-2 text-sm text-slate-700 leading-relaxed">
          Farpy’s mission is to make high-performance GPU compute feel effortless while
          remaining safe, verifiable, and accessible to everyone — from hobbyists to
          large studios.
        </p>
      </section>

      {/* BRAND ASSETS */}
      <section className="mt-12">
        <h2 className="text-xl font-semibold">Brand Assets</h2>

        <div className="mt-4 grid gap-4 md:grid-cols-2">
          <div className="rounded-2xl bg-white border border-black/5 p-5 shadow-sm">
            <h3 className="text-sm font-semibold">Logo (Primary)</h3>
            <p className="mt-1 text-xs text-slate-600">PNG + SVG</p>
            <a
              href="https://dl.farpy.com/brand/farpy-logo-primary.zip"
              className="mt-3 inline-flex rounded-full bg-black px-4 py-2 text-xs font-semibold text-[#fdf7ec] hover:bg-slate-900"
            >
              Download
            </a>
          </div>

          <div className="rounded-2xl bg-white border border-black/5 p-5 shadow-sm">
            <h3 className="text-sm font-semibold">Mascot (Chompy)</h3>
            <p className="mt-1 text-xs text-slate-600">Lore-friendly illustration</p>
            <a
              href="https://dl.farpy.com/brand/chompy.zip"
              className="mt-3 inline-flex rounded-full bg-black px-4 py-2 text-xs font-semibold text-[#fdf7ec] hover:bg-slate-900"
            >
              Download
            </a>
          </div>
        </div>

        <p className="mt-4 text-xs text-slate-500">
          Note: Assets above are placeholders until final art export is ready.
        </p>
      </section>

      {/* COLORS */}
      <section className="mt-12">
        <h2 className="text-xl font-semibold">Brand Colors</h2>

        <div className="mt-4 grid gap-4 md:grid-cols-3">
          <div className="rounded-xl p-4 bg-[#fdf7ec] border border-black/5">
            <p className="text-xs font-semibold">Cream</p>
            <p className="text-xs text-slate-600">#fdf7ec</p>
          </div>
          <div className="rounded-xl p-4 bg-sky-300 border border-black/5">
            <p className="text-xs font-semibold">Sky</p>
            <p className="text-xs text-slate-900">#7dd3fc</p>
          </div>
          <div className="rounded-xl p-4 bg-emerald-300 border border-black/5">
            <p className="text-xs font-semibold">Mint</p>
            <p className="text-xs text-slate-900">#6ee7b7</p>
          </div>
        </div>
      </section>

      {/* LOGO USAGE */}
      <section className="mt-12">
        <h2 className="text-xl font-semibold">Logo Usage Guidelines</h2>

        <ul className="mt-3 text-sm text-slate-700 space-y-2">
          <li>• Do not stretch or distort the logo.</li>
          <li>• Keep clear spacing equal to logo height.</li>
          <li>• Use light logo on dark backgrounds and vice versa.</li>
          <li>• Do not recolor the logo outside the brand palette.</li>
          <li>• When in doubt, use the primary logo pack.</li>
        </ul>
      </section>

      {/* CONTACT */}
      <section className="mt-12">
        <h2 className="text-xl font-semibold">Press Contact</h2>

        <p className="mt-2 text-sm text-slate-700">
          For media inquiries, interviews, or partnerships:
        </p>

        <p className="mt-1 text-sm font-semibold">press@farpy.com</p>
        <p className="text-xs text-slate-500">We respond within 24–48 hours.</p>
      </section>

      <div className="h-16" />
    </div>
  );
}
