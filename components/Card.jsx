export default function Card({ title, body }) {
  return (
    <div className="rounded-2xl border border-black/5 bg-white/70 p-4 shadow-sm">
      <h3 className="text-sm font-semibold">{title}</h3>
      <p className="mt-1 text-xs text-slate-700 sm:text-sm">{body}</p>
    </div>
  );
}
