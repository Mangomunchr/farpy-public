"use client";
import { useState } from "react";

export default function Join(){
  const [done,setDone]=useState(false);
  const [err,setErr]=useState<string|null>(null);
  async function submit(e:React.FormEvent<HTMLFormElement>){
    e.preventDefault();
    setErr(null);
    const fd = new FormData(e.currentTarget);
    const email = String(fd.get("email")||"").trim();
    const honey = String(fd.get("extra")||"");
    const r = await fetch("/api/waitlist",{ method:"POST", headers:{ "Content-Type":"application/json" }, body: JSON.stringify({ email, honey })});
    const j = await r.json();
    if(j?.ok) setDone(true); else setErr("Try again later.");
  }
  return (
    <main className="section-k">
      <h1 className="text-3xl font-bold">Join waitlist</h1>
      <p className="mt-2 text-[var(--fp-sub)]">We’ll email you when Farpy opens.</p>
      <div className="mt-6 card-k">
        {done ? (
          <p className="text-sm">All set. Check your inbox soon.</p>
        ) : (
          <form onSubmit={submit}>
            <label className="block text-sm font-medium">Email</label>
            <input name="email" type="email" required className="mt-1 w-full rounded-xl border px-3 py-2" style={{ borderColor:"var(--fp-line)" }} placeholder="you@example.com" />
            {/* honeypot */}
            <input name="extra" className="hidden" tabIndex={-1} autoComplete="off" />
            <button className="mt-4 btn-pill btn-primary" type="submit">Save my spot</button>
            {err && <p className="mt-2 text-xs text-red-400">{err}</p>}
          </form>
        )}
        <p className="mt-3 text-xs text-[var(--fp-sub)]">No spam. Just launch news.</p>
      </div>
    </main>
  );
}