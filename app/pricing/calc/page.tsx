'use client';

import { useState, ChangeEvent } from 'react';

type Tier = 'basic' | 'pro' | 'ultra';

const multipliers: Record<Tier, number> = {
  basic: 0.002,
  pro: 0.004,
  ultra: 0.006,
};

export default function PricingCalcPage() {
  const [size, setSize] = useState<number>(100);
  const [tier, setTier] = useState<Tier>('basic');

  function estimate(): string {
    const mb = Number(size) || 0;
    const rate = multipliers[tier];
    return (mb * rate).toFixed(2);
  }

  const handleSize = (e: ChangeEvent<HTMLInputElement>) => {
    setSize(Number(e.target.value) || 0);
  };

  const handleTier = (e: ChangeEvent<HTMLSelectElement>) => {
    setTier(e.target.value as Tier);
  };

  return (
    <main className='min-h-screen bg-slate-950 text-slate-50'>
      <div className='max-w-2xl mx-auto px-4 py-12'>
        <h1 className='text-3xl font-semibold mb-2'>EZPZ Cost Estimator</h1>
        <p className='text-slate-300 mb-8'>
          Rough toy-mode estimate for one render. Not a final quote.
        </p>

        <div className='space-y-6 bg-slate-900/60 border border-slate-800 rounded-2xl p-6'>
          <div>
            <label className='block text-sm mb-2'>Scene size (MB)</label>
            <input
              type='number'
              min={0}
              value={size}
              onChange={handleSize}
              className='w-full rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-sm outline-none focus:border-sky-400'
            />
          </div>

          <div>
            <label className='block text-sm mb-2'>Tier</label>
            <select
              value={tier}
              onChange={handleTier}
              className='w-full rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-sm outline-none focus:border-sky-400'
            >
              <option value='basic'>Basic (slow & cheap)</option>
              <option value='pro'>Pro (balanced)</option>
              <option value='ultra'>Ultra (fastest)</option>
            </select>
          </div>

          <div className='pt-4 border-t border-slate-800 flex items-center justify-between'>
            <span className='text-sm text-slate-400'>Estimated cost (USD)</span>
            <span className='text-2xl font-semibold'>
              
            </span>
          </div>

          <p className='text-xs text-slate-500'>
            This is a toy ballpark. Real pricing will depend on GPU, time, resolution, and queue load.
          </p>
        </div>
      </div>
    </main>
  );
}
