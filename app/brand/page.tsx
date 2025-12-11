export default function BrandPage() {
  return (
    <div className='min-h-screen bg-[#fdf7ec] text-slate-900 px-6 py-12 max-w-4xl mx-auto'>

      <h1 className='text-3xl font-semibold tracking-tight'>Farpy Brand Kit</h1>
      <p className='mt-2 text-sm text-slate-600'>
        Logos, palettes, and assets for media, partners, and design use.
      </p>

      {/* DOWNLOAD ALL */}
      <section className='mt-8'>
        <a
          href='https://dl.farpy.com/brand/farpy-brandkit.zip'
          className='inline-flex rounded-full bg-black px-5 py-3 text-sm font-semibold text-[#fdf7ec] shadow hover:bg-slate-900'
        >
          Download Full Brand Kit (.zip)
        </a>
      </section>

      {/* LOGOS */}
      <section className='mt-14'>
        <h2 className='text-xl font-semibold'>Logos</h2>

        <div className='mt-4 grid gap-6 md:grid-cols-2'>
          {/* PRIMARY LOGO */}
          <div className='rounded-2xl bg-white border border-black/5 p-5 shadow-sm'>
            <h3 className='text-sm font-semibold'>Primary Logo</h3>
            <p className='text-xs text-slate-600 mt-1'>PNG + SVG</p>

            <div className='mt-4 h-24 w-full rounded-xl bg-gradient-to-tr from-emerald-300 via-sky-300 to-indigo-300 flex items-center justify-center'>
              <span className='text-xs text-slate-900'>Logo Preview</span>
            </div>

            <a
              href='https://dl.farpy.com/brand/farpy-logo-primary.zip'
              className='mt-4 inline-block rounded-full bg-black px-4 py-2 text-xs font-semibold text-[#fdf7ec] hover:bg-slate-900'
            >
              Download
            </a>
          </div>

          {/* SECONDARY LOGO */}
          <div className='rounded-2xl bg-white border border-black/5 p-5 shadow-sm'>
            <h3 className='text-sm font-semibold'>Secondary Logo</h3>
            <p className='text-xs text-slate-600 mt-1'>Light + dark variants</p>

            <div className='mt-4 h-24 w-full rounded-xl bg-slate-800 flex items-center justify-center'>
              <span className='text-xs text-slate-200'>Alt Preview</span>
            </div>

            <a
              href='https://dl.farpy.com/brand/farpy-logo-secondary.zip'
              className='mt-4 inline-block rounded-full bg-black px-4 py-2 text-xs font-semibold text-[#fdf7ec] hover:bg-slate-900'
            >
              Download
            </a>
          </div>
        </div>
      </section>

      {/* CHOMPY / MASCOT */}
      <section className='mt-14'>
        <h2 className='text-xl font-semibold'>Mascot (Chompy)</h2>

        <p className='text-sm text-slate-700 mt-2'>
          Cute Ghibli-inspired tardigrade, used lightly across marketing and docs.
        </p>

        <div className='mt-4 h-32 w-full rounded-xl bg-white border border-black/5 shadow-sm flex items-center justify-center'>
          <span className='text-xs text-slate-600'>Chompy Preview</span>
        </div>

        <a
          href='https://dl.farpy.com/brand/chompy.zip'
          className='mt-4 inline-block rounded-full bg-black px-4 py-2 text-xs font-semibold text-[#fdf7ec] hover:bg-slate-900'
        >
          Download Mascot Pack
        </a>
      </section>

      {/* COLOR PALETTE */}
      <section className='mt-14'>
        <h2 className='text-xl font-semibold'>Color Palette</h2>

        <div className='mt-4 grid gap-4 md:grid-cols-4'>
          <div className='p-4 rounded-xl bg-[#fdf7ec] border border-black/5'>
            <p className='text-xs font-semibold'>Cream</p>
            <p className='text-xs'>#fdf7ec</p>
          </div>
          <div className='p-4 rounded-xl bg-sky-300 border border-black/5'>
            <p className='text-xs font-semibold'>Sky</p>
            <p className='text-xs'>#7dd3fc</p>
          </div>
          <div className='p-4 rounded-xl bg-emerald-300 border border-black/5'>
            <p className='text-xs font-semibold'>Mint</p>
            <p className='text-xs'>#6ee7b7</p>
          </div>
          <div className='p-4 rounded-xl bg-slate-900 border border-black/5 text-slate-50'>
            <p className='text-xs font-semibold'>Ink</p>
            <p className='text-xs'>#0f172a</p>
          </div>
        </div>

        <p className='mt-4 text-xs text-slate-500'>
          These are the official v1 Farpy brand colors.
        </p>
      </section>

      {/* GUIDELINES */}
      <section className='mt-14'>
        <h2 className='text-xl font-semibold'>Usage Guidelines</h2>

        <ul className='mt-3 text-sm text-slate-700 space-y-2'>
          <li>• Do not distort the logo.</li>
          <li>• Keep clear spacing equal to logo height.</li>
          <li>• Use brand palette only.</li>
          <li>• Mascot is optional and should be used sparingly.</li>
          <li>• Logo should remain legible at all sizes.</li>
        </ul>
      </section>

      <div className='h-20' />
    </div>
  );
}
