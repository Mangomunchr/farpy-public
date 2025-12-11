'use client';
import { useState } from 'react';

export default function SettingsPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [dark, setDark] = useState(false);
  const [msg, setMsg] = useState('');

  function save() {
    setMsg('Settings saved (mock).');
  }

  function reset() {
    setName('');
    setEmail('');
    setDark(false);
    setMsg('Reset to defaults.');
  }

  return (
    <div className='min-h-screen bg-[#fdf7ec] text-slate-900 px-6 py-12 max-w-xl mx-auto'>

      <h1 className='text-3xl font-semibold tracking-tight'>Account Settings</h1>
      <p className='mt-2 text-sm text-slate-700'>
        Manage your basic preferences. This is a mock shell; no backend yet.
      </p>

      {msg && (
        <div className='mt-6 bg-white border border-black/5 shadow-sm p-3 rounded-xl text-xs text-slate-700'>
          {msg}
        </div>
      )}

      {/* NAME */}
      <div className='mt-10'>
        <label className='text-xs font-semibold'>Display Name</label>
        <input
          className='mt-2 w-full rounded-xl bg-white border border-black/10 px-3 py-2 text-sm'
          value={name}
          onChange={e => setName(e.target.value)}
        />
      </div>

      {/* EMAIL */}
      <div className='mt-6'>
        <label className='text-xs font-semibold'>Email</label>
        <input
          className='mt-2 w-full rounded-xl bg-white border border-black/10 px-3 py-2 text-sm'
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
      </div>

      {/* DARK MODE TOGGLE */}
      <div className='mt-6 flex items-center gap-3'>
        <input
          type='checkbox'
          checked={dark}
          onChange={() => setDark(!dark)}
        />
        <label className='text-sm'>Enable dark mode (local only)</label>
      </div>

      {/* BUTTONS */}
      <div className='mt-10 flex gap-4'>
        <button
          onClick={save}
          className='rounded-xl bg-black px-5 py-3 text-sm font-semibold text-[#fdf7ec] hover:bg-slate-900'
        >
          Save
        </button>
        <button
          onClick={reset}
          className='rounded-xl bg-white border border-black/10 px-5 py-3 text-sm hover:bg-slate-50'
        >
          Reset
        </button>
      </div>

      <div className='h-20' />
    </div>
  );
}
