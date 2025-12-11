export default function FAQCard({ q, a }) {
  return (
    <div className="rounded-2xl border border-black/5 bg-white/70 p-4">
      <h3 className="text-sm font-semibold">{q}</h3>
      <p className="mt-1 text-xs text-slate-700 sm:text-sm">{a}</p>
    </div>
  );
}
