export default function ProPage() {
  return (
    <div className='min-h-screen bg-[#fdf7ec] text-slate-900 px-6 py-12 max-w-5xl mx-auto'>

      {/* HERO */}
      <section className='max-w-3xl'>
        <div className='inline-flex items-center rounded-full bg-amber-100 px-4 py-1 text-xs font-medium text-amber-900'>
          Farpy Pro · Creator & Studio lane
        </div>

        <h1 className='mt-4 text-4xl font-semibold tracking-tight'>
          Distributed GPU power
          <br />
          for serious work.
        </h1>

        <p className='mt-4 text-sm text-slate-700'>
          Farpy Pro is the lane for Blender artists, Unreal teams, and studios that need predictable,
          verifiable GPU rendering without running their own farm.
        </p>

        <div className='mt-6 flex flex-wrap gap-3'>
          <a
            href='/contact'
            className='inline-flex rounded-full bg-black px-6 py-3 text-sm font-semibold text-[#fdf7ec] shadow hover:bg-slate-900'
          >
            Talk to Farpy
          </a>
          <a
            href='/docs'
            className='inline-flex rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-semibold hover:bg-slate-50'
          >
            View Docs
          </a>
        </div>
      </section>

      {/* COLUMNS: USE CASES */}
      <section className='mt-14 grid gap-6 md:grid-cols-3'>
        <div className='rounded-2xl bg-white border border-black/5 p-5 shadow-sm'>
          <h2 className='text-sm font-semibold'>3D / VFX</h2>
          <p className='mt-2 text-xs text-slate-700'>
            Offload Blender, Cinema4D, and Houdini shots to external GPUs. Pay for finished renders only.
          </p>
        </div>
        <div className='rounded-2xl bg-white border border-black/5 p-5 shadow-sm'>
          <h2 className='text-sm font-semibold'>Archviz / Design</h2>
          <p className='mt-2 text-xs text-slate-700'>
            Twinmotion, D5, Unreal scenes rendered through the same pipeline, with proof-of-compute.
          </p>
        </div>
        <div className='rounded-2xl bg-white border border-black/5 p-5 shadow-sm'>
          <h2 className='text-sm font-semibold'>AI / Batch Compute</h2>
          <p className='mt-2 text-xs text-slate-700'>
            Image batches, video frames, and other GPU-heavy tasks routed via the RIP API.
          </p>
        </div>
      </section>

      {/* PIPELINE SUMMARY */}
      <section className='mt-14'>
        <h2 className='text-xl font-semibold tracking-tight'>How the Pro lane works</h2>

        <div className='mt-4 grid gap-4 md:grid-cols-4 text-xs text-slate-700'>
          <div className='rounded-2xl bg-white border border-black/5 p-4'>
            <div className='font-semibold mb-1'>1 · Integrate</div>
            <p>Use the RIP API or future plugins to send scenes directly from your tools.</p>
          </div>
          <div className='rounded-2xl bg-white border border-black/5 p-4'>
            <div className='font-semibold mb-1'>2 · Route</div>
            <p>Jobs are queued, prioritized, and assigned to verified NodeMunchers.</p>
          </div>
          <div className='rounded-2xl bg-white border border-black/5 p-4'>
            <div className='font-semibold mb-1'>3 · Render</div>
            <p>Workers render in sandboxed environments with strict guardrails.</p>
          </div>
          <div className='rounded-2xl bg-white border border-black/5 p-4'>
            <div className='font-semibold mb-1'>4 · Proof</div>
            <p>Results return with proof packets: hashes, GPU model, runtime, status.</p>
          </div>
        </div>
      </section>

      {/* TRUST / TRANSPARENCY */}
      <section className='mt-14 rounded-3xl bg-slate-900 px-5 py-6 text-slate-50'>
        <h2 className='text-base font-semibold'>Trust & transparency</h2>
        <p className='mt-2 text-sm text-slate-300'>
          Farpy Pro is built around auditability: every job leaves a trail. Proof feeds,
          status dashboards, and payout logs are designed to be visible, not hidden.
        </p>

        <div className='mt-4 flex flex-wrap gap-3 text-sm'>
          <a
            href='/status'
            className='rounded-full bg-sky-500 px-4 py-2 font-semibold text-slate-900 hover:bg-sky-400'
          >
            View Status
          </a>
          <a
            href='/explorer'
            className='rounded-full border border-slate-600 px-4 py-2 hover:bg-slate-800'
          >
            Job Explorer
          </a>
          <a
            href='/docs/spark'
            className='rounded-full border border-slate-600 px-4 py-2 hover:bg-slate-800'
          >
            RIP API Docs
          </a>
        </div>
      </section>

      {/* CTA */}
      <section className='mt-16'>
        <h2 className='text-xl font-semibold tracking-tight'>Early Pro access</h2>
        <p className='mt-2 text-sm text-slate-700 max-w-xl'>
          If you run a studio, pipeline, or high-volume render workflow and want to explore
          Farpy as your distributed GPU backbone, reach out. We’re starting with a small
          number of early partners.
        </p>

        <a
          href='/contact'
          className='mt-4 inline-flex rounded-full bg-black px-6 py-3 text-sm font-semibold text-[#fdf7ec] shadow hover:bg-slate-900'
        >
          Contact Farpy
        </a>
      </section>

      <div className='h-20' />
    </div>
  );
}
