'use client';
import { useState } from 'react';

export default function GardenPage() {
  const [file, setFile] = useState<File | null>(null);
  const [engine, setEngine] = useState('imagemagick-test');
  const [msg, setMsg] = useState('');
  const [job, setJob] = useState<any>(null);

  async function submit() {
    if (!file) {
      setMsg('Pick a file first.');
      return;
    }

    // MOCK: we don’t upload yet. Produces fake job_id.
    const fake = {
      job_id: 'EZPZ-' + Date.now(),
      engine,
      status: 'queued',
      created_at: new Date().toISOString(),
    };
    setJob(fake);
    setMsg('Job submitted (mock). Wire backend later.');
  }

  return (
    <div className='min-h-screen bg-[#fdf7ec] text-slate-900 px-6 py-12 max-w-xl mx-auto'>

      <h1 className='text-3xl font-semibold tracking-tight'>Render Garden</h1>
      <p className='mt-2 text-sm text-slate-700'>
        EZPZ lane · Drop a file → Farpy queues it → NodeMunchers render it → you get results.
      </p>

      {msg && (
        <div className='mt-6 bg-white border border-black/5 shadow-sm p-3 rounded-xl text-xs text-slate-700'>
          {msg}
        </div>
      )}

      {/* FILE PICKER */}
      <div className='mt-10'>
        <label className='text-xs font-semibold'>Select file</label>
        <input
          type='file'
          onChange={e => setFile(e.target.files?.[0] || null)}
          className='mt-2 w-full rounded-xl bg-white border border-black/10 px-3 py-2 text-sm'
        />
      </div>

      {/* ENGINE PICKER */}
      <div className='mt-6'>
        <label className='text-xs font-semibold'>Engine</label>
        <select
          value={engine}
          onChange={(e) => setEngine(e.target.value)}
          className='mt-2 w-full rounded-xl bg-white border border-black/10 px-3 py-2 text-sm'
        >
          <option value='imagemagick-test'>Imagemagick Test</option>
          <option value='blender-test'>Blender Test</option>
          <option value='noop'>No-op Test</option>
        </select>
      </div>

      {/* SUBMIT */}
      <button
        onClick={submit}
        className='mt-8 rounded-xl bg-black px-5 py-3 text-sm font-semibold text-[#fdf7ec] hover:bg-slate-900'
      >
        Submit Job
      </button>

      {/* JOB PREVIEW */}
      {job && (
        <div className='mt-10 rounded-2xl bg-white border border-black/5 p-5 shadow-sm text-xs text-slate-700'>
          <div className='font-semibold mb-2'>Job Created</div>
          <div className='font-mono break-all'>Job ID: {job.job_id}</div>
          <div>Engine: {job.engine}</div>
          <div>Status: {job.status}</div>
          <div>Created: {job.created_at}</div>
        </div>
      )}

      <div className='h-20' />
    </div>
  );
}
