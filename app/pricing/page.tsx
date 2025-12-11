export default function PricingPage() {
  return (
    <div className="min-h-screen bg-[#fdf7ec] text-slate-900 px-6 py-10 max-w-5xl mx-auto">
      <h1 className="text-3xl font-semibold tracking-tight">Pricing</h1>
      <p className="mt-2 text-sm text-slate-600">
        Simple, predictable, no nonsense. You pay for verified GPU minutes.
      </p>

      <div className="mt-8 grid gap-5 md:grid-cols-3">

        <div className="rounded-2xl bg-white border border-black/5 p-6 shadow-sm">
          <h2 className="text-xl font-semibold">Starter</h2>
          <p className="mt-1 text-sm text-slate-600">Pay as you go.</p>
          <ul className="mt-4 text-sm space-y-2">
            <li>• Perfect for small renders</li>
            <li>• GPU billed by the minute</li>
            <li>• No commitments</li>
          </ul>
        </div>

        <div className="rounded-2xl bg-white border border-black/5 p-6 shadow-sm">
          <h2 className="text-xl font-semibold">Creator</h2>
          <p className="mt-1 text-sm text-slate-600">Credits for frequent renders.</p>
          <ul className="mt-4 text-sm space-y-2">
            <li>• Lower per-minute rates</li>
            <li>• Ideal for Blender / Unreal users</li>
            <li>• Predictable monthly cost</li>
          </ul>
        </div>

        <div className="rounded-2xl bg-white border border-black/5 p-6 shadow-sm">
          <h2 className="text-xl font-semibold">Studio</h2>
          <p className="mt-1 text-sm text-slate-600">Teams, lanes, and invoicing.</p>
          <ul className="mt-4 text-sm space-y-2">
            <li>• Priority lanes</li>
            <li>• Team seats</li>
            <li>• Monthly invoices</li>
          </ul>
        </div>

      </div>

      <p className="mt-10 text-xs text-slate-500">
        Cost estimator + detailed pricing API coming soon.
      </p>
    </div>
  );
}
