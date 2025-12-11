import FAQCard from "../../components/FAQCard";

export default function NodeMunchersPage() {
  return (
    <div className="min-h-screen bg-[#fdf7ec] text-slate-900 px-6 py-10 max-w-5xl mx-auto">

      <h1 className="text-3xl font-semibold tracking-tight">Become a NodeMuncher</h1>
      <p className="mt-2 text-sm text-slate-600">
        Earn money with your GPU — one verified job at a time.
      </p>

      <div className="mt-8 grid gap-6 md:grid-cols-2">

        <div className="rounded-2xl bg-white border border-black/5 p-6 shadow-sm">
          <h2 className="text-lg font-semibold">How it works</h2>
          <ul className="mt-3 text-sm space-y-2 text-slate-700">
            <li>• Install NodeMuncher</li>
            <li>• Pick performance mode</li>
            <li>• Node pulls safe jobs</li>
            <li>• GPU renders → Farpy verifies → payout</li>
          </ul>
        </div>

        <div className="rounded-2xl bg-white border border-black/5 p-6 shadow-sm">
          <h2 className="text-lg font-semibold">Safety</h2>
          <ul className="mt-3 text-sm space-y-2 text-slate-700">
            <li>• Jobs run sandboxed</li>
            <li>• No access to your system</li>
            <li>• Proof-backed payouts</li>
            <li>• Public audit feed</li>
          </ul>
        </div>
      </div>

      <h2 className="text-xl font-semibold tracking-tight mt-10">FAQ</h2>
      <div className="mt-4 grid gap-4 md:grid-cols-2">
        <FAQCard q="What GPUs can I use?" a="NVIDIA + AMD supported. CUDA & ROCm friendly." />
        <FAQCard q="Is my system safe?" a="Yes, jobs run isolated with strict guardrails." />
        <FAQCard q="How do payouts work?" a="Each job generates a proof packet; payout triggers after verification." />
        <FAQCard q="Crypto?" a="No tokens. Real payouts for real work." />
      </div>

      <a href="/download" className="mt-10 inline-flex rounded-full bg-black px-5 py-3 text-sm font-semibold text-[#fdf7ec] shadow hover:bg-slate-900">
        Download NodeMuncher
      </a>
    </div>
  );
}
