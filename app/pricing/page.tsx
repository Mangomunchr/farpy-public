export default function Pricing(){
  return (
    <main className="section-k">
      <h1 className="text-3xl font-bold">Pricing</h1>
      <p className="mt-2 text-[var(--fp-sub)]">Transparent minutes. No contracts. Credits never expire.</p>
      <div className="mt-6 grid md:grid-cols-3 gap-4">
        <div className="card-k"><div className="text-lg font-semibold">Starter</div><p className="text-sm text-[var(--fp-sub)] mt-1">Pay-as-you-go render minutes.</p><a className="mt-4 inline-flex btn-pill btn-primary" href="/join">Get started</a></div>
        <div className="card-k"><div className="text-lg font-semibold">Creator</div><p className="text-sm text-[var(--fp-sub)] mt-1">Discounted bundles for frequent use.</p><a className="mt-4 inline-flex btn-pill" href="/join">Join waitlist</a></div>
        <div className="card-k"><div className="text-lg font-semibold">Studio</div><p className="text-sm text-[var(--fp-sub)] mt-1">Priority lanes & team seats.</p><a className="mt-4 inline-flex btn-pill" href="/contact">Talk to us</a></div>
      </div>
      <p className="mt-6 text-xs text-[var(--fp-sub)]">Exact rates vary by workload and GPU class; calculator at launch.</p>
    </main>
  );
}