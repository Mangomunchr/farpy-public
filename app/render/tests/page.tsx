export default function RenderTests() {
  const tests = [
    {
      name: "Imagemagick: Basic PNG",
      input: "https://farpy.com/tests/input-basic.png",
      expected: "https://farpy.com/tests/output-basic.png",
      desc: "Simple resize/convert test for imagemagick engine."
    },
    {
      name: "Imagemagick: JPG → PNG",
      input: "https://farpy.com/tests/input-photo.jpg",
      expected: "https://farpy.com/tests/output-photo.png",
      desc: "Format conversion sanity test."
    },
    {
      name: "Blender: Default Cube",
      input: "https://farpy.com/tests/blender-cube.blend",
      expected: "https://farpy.com/tests/blender-cube.png",
      desc: "Simple render of Blender default cube scene."
    },
    {
      name: "Blender: Material Test",
      input: "https://farpy.com/tests/material.blend",
      expected: "https://farpy.com/tests/material.png",
      desc: "Tests nodes + lighting."
    }
  ];

  return (
    <div className='min-h-screen bg-[#fdf7ec] text-slate-900 px-6 py-12 max-w-4xl mx-auto'>

      <h1 className='text-3xl font-semibold tracking-tight'>Render Test Library</h1>
      <p className='mt-2 text-sm text-slate-700'>
        Example inputs and expected outputs for validating engines and workers.
      </p>

      <div className='mt-10 space-y-6'>
        {tests.map((t, i) => (
          <div key={i} className='rounded-2xl bg-white border border-black/5 p-5 shadow-sm'>

            <h2 className='text-lg font-semibold'>{t.name}</h2>
            <p className='text-xs text-slate-600 mt-1'>{t.desc}</p>

            <div className='mt-4 grid gap-4 md:grid-cols-2 text-xs'>

              {/* INPUT */}
              <div className='p-4 rounded-xl border border-black/10 bg-slate-50'>
                <div className='font-semibold mb-2'>Input</div>
                <a href={t.input} className='block text-sky-700 underline break-all'>
                  {t.input}
                </a>
              </div>

              {/* EXPECTED */}
              <div className='p-4 rounded-xl border border-black/10 bg-slate-50'>
                <div className='font-semibold mb-2'>Expected Output</div>
                <a href={t.expected} className='block text-sky-700 underline break-all'>
                  {t.expected}
                </a>
              </div>

            </div>

          </div>
        ))}
      </div>

      <div className='h-20' />
    </div>
  );
}
