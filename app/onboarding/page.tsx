'use client';
import { useState } from 'react';

type Persona = 'farpy' | 'nodemuncher' | 'studio' | '';

export default function OnboardingPage() {
  const [step, setStep] = useState(1);
  const [persona, setPersona] = useState<Persona>('');
  const [email, setEmail] = useState('');
  const [agree, setAgree] = useState(false);
  const [done, setDone] = useState(false);

  function next() {
    if (step === 1 && !persona) return;
    if (step === 3) {
      setDone(true);
      return;
    }
    setStep(step + 1);
  }

  function prev() {
    if (step === 1) return;
    setStep(step - 1);
  }

  function badge() {
    if (persona === 'farpy') return 'You’ll see Toy Mode first.';
    if (persona === 'nodemuncher') return 'You’ll see NodeMuncher tools first.';
    if (persona === 'studio') return 'You’ll see Pro docs and RIP API.';
    return '';
  }

  return (
    <div className="min-h-screen bg-[#fdf7ec] text-slate-900 px-6 py-12 max-w-xl mx-auto">
      <h1 className="text-3xl font-semibold tracking-tight">Get started with Farpy</h1>
      <p className="mt-2 text-sm text-slate-700">
        Short setup to route you to the right lane.
      </p>

      {/* STEP INDICATOR */}
      <div className="mt-6 flex items-center gap-2 text-xs text-slate-600">
        <span className={step >= 1 ? 'font-semibold' : ''}>1. Who you are</span>
        <span>·</span>
        <span className={step >= 2 ? 'font-semibold' : ''}>2. Contact</span>
        <span>·</span>
        <span className={step >= 3 ? 'font-semibold' : ''}>3. Lane</span>
      </div>

      {/* COMPLETED */}
      {done ? (
        <div className="mt-10 rounded-2xl bg-white border border-black/5 p-6 shadow-sm">
          <h2 className="text-lg font-semibold">You&apos;re set.</h2>
          <p className="mt-2 text-sm text-slate-700">
            We&apos;ll treat you as{' '}
            {persona === 'farpy'
              ? 'a Farpy (Toy Mode user).'
              : persona === 'nodemuncher'
              ? 'a NodeMuncher (GPU worker).'
              : persona === 'studio'
              ? 'a Pro / studio user.'
              : 'a general user.'}
          </p>

          <div className="mt-4 flex flex-wrap gap-3 text-sm">
            <a
              href={persona === 'farpy' ? '/garden' : persona === 'nodemuncher' ? '/nodemunchers' : '/pro'}
              className="rounded-full bg-black px-5 py-3 text-sm font-semibold text-[#fdf7ec] hover:bg-slate-900"
            >
              Continue
            </a>
            <a
              href="/docs"
              className="rounded-full border border-slate-300 bg-white px-5 py-3 text-sm font-semibold hover:bg-slate-50"
            >
              Open docs
            </a>
          </div>
        </div>
      ) : (
        <>
          {/* STEP 1: PERSONA */}
          {step === 1 && (
            <div className="mt-10 space-y-4">
              <p className="text-xs text-slate-600">Pick the option closest to you.</p>

              <button
                onClick={() => setPersona('farpy')}
                className={
                  'w-full text-left rounded-2xl border p-4 text-sm shadow-sm ' +
                  (persona === 'farpy'
                    ? 'bg-black text-[#fdf7ec] border-black'
                    : 'bg-white border-black/10 hover:bg-slate-50')
                }
              >
                <div className="font-semibold">I just want fast renders.</div>
                <div className={persona === 'farpy' ? 'mt-1 text-[11px] text-amber-200' : 'mt-1 text-[11px] text-slate-600'}>
                  Toy Mode · Render Garden · EZPZ uploads.
                </div>
              </button>

              <button
                onClick={() => setPersona('nodemuncher')}
                className={
                  'w-full text-left rounded-2xl border p-4 text-sm shadow-sm ' +
                  (persona === 'nodemuncher'
                    ? 'bg-black text-[#fdf7ec] border-black'
                    : 'bg-white border-black/10 hover:bg-slate-50')
                }
              >
                <div className="font-semibold">I want to earn by running my GPU.</div>
                <div className={persona === 'nodemuncher' ? 'mt-1 text-[11px] text-amber-200' : 'mt-1 text-[11px] text-slate-600'}>
                  NodeMuncher lane · worker agent · payouts after verification.
                </div>
              </button>

              <button
                onClick={() => setPersona('studio')}
                className={
                  'w-full text-left rounded-2xl border p-4 text-sm shadow-sm ' +
                  (persona === 'studio'
                    ? 'bg-black text-[#fdf7ec] border-black'
                    : 'bg-white border-black/10 hover:bg-slate-50')
                }
              >
                <div className="font-semibold">I&apos;m a studio / pipeline person.</div>
                <div className={persona === 'studio' ? 'mt-1 text-[11px] text-amber-200' : 'mt-1 text-[11px] text-slate-600'}>
                  Pro lane · RIP API · integration work.
                </div>
              </button>

              {badge() && (
                <div className="mt-2 text-[11px] text-emerald-700">
                  {badge()}
                </div>
              )}
            </div>
          )}

          {/* STEP 2: EMAIL */}
          {step === 2 && (
            <div className="mt-10 space-y-4">
              <div>
                <label className="text-xs font-semibold">Email (optional)</label>
                <input
                  type="email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  className="mt-2 w-full rounded-xl bg-white border border-black/10 px-3 py-2 text-sm"
                />
                <p className="mt-1 text-[11px] text-slate-500">
                  Used for early-access, not for spam. Leave blank if you don&apos;t care.
                </p>
              </div>
            </div>
          )}

          {/* STEP 3: AGREEMENT */}
          {step === 3 && (
            <div className="mt-10 space-y-4">
              <div className="flex items-start gap-3">
                <input
                  type="checkbox"
                  checked={agree}
                  onChange={() => setAgree(!agree)}
                  className="mt-1"
                />
                <div className="text-xs text-slate-700">
                  I understand that Farpy is currently in Toy Mode. Jobs and payouts may be throttled
                  while we stabilise the system.
                </div>
              </div>
              {!agree && (
                <div className="text-[11px] text-amber-700">
                  You can still continue, but this is here so nobody is surprised.
                </div>
              )}
            </div>
          )}

          {/* CONTROLS */}
          <div className="mt-10 flex justify-between">
            <button
              onClick={prev}
              disabled={step === 1}
              className={
                step === 1
                  ? 'rounded-xl px-4 py-2 text-xs text-slate-400 border border-transparent cursor-default'
                  : 'rounded-xl px-4 py-2 text-xs border border-black/10 bg-white hover:bg-slate-50'
              }
            >
              Back
            </button>
            <button
              onClick={next}
              className="rounded-xl bg-black px-5 py-2 text-sm font-semibold text-[#fdf7ec] hover:bg-slate-900"
            >
              {step === 3 ? 'Finish' : 'Next'}
            </button>
          </div>
        </>
      )}

      <div className="h-20" />
    </div>
  );
}
