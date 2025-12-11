'use client';

type JobTimelineItem = {
  label: string;
  when: string;
  detail?: string;
};

const items: JobTimelineItem[] = [
  {
    label: 'Timeline coming soon',
    when: 'v0.1',
    detail: 'This page will show real Farpy job and payout history once the proof feeds are live.',
  },
  {
    label: 'Today',
    when: 'Now',
    detail: 'Static placeholder so the site can build and deploy cleanly.',
  },
];

export default function TimelinePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-50">
      <div className="max-w-3xl mx-auto px-4 py-12">
        <h1 className="text-3xl font-semibold mb-2">Farpy Timeline</h1>
        <p className="text-slate-300 mb-8">
          Lightweight story of Farpy&apos;s upgrades and milestones. Live data wiring is not enabled yet.
        </p>

        <ol className="relative border-l border-slate-800 pl-6 space-y-6">
          {items.map((item, idx) => (
            <li key={idx} className="ml-1">
              <div className="absolute -left-[7px] mt-1 h-3 w-3 rounded-full bg-sky-400 shadow-[0_0_0_4px_rgba(56,189,248,0.2)]" />
              <p className="text-xs uppercase tracking-wide text-slate-500">{item.when}</p>
              <h2 className="text-sm font-semibold text-slate-50 mt-1">{item.label}</h2>
              {item.detail && (
                <p className="text-sm text-slate-300 mt-1">
                  {item.detail}
                </p>
              )}
            </li>
          ))}
        </ol>

        <p className="mt-10 text-xs text-slate-500">
          Real-time job history will plug in here once the public proof feeds are wired (/status/jobs.json and friends).
        </p>
      </div>
    </main>
  );
}
