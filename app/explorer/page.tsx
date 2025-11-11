import ExplorerMini from "@/components/ExplorerMini";
export default function Explorer(){
  return (
    <main className="section-k">
      <h1 className="text-3xl font-bold">Job Explorer</h1>
      <p className="mt-2 text-[var(--fp-sub)]">Recent verified jobs (preview).</p>
      <div className="mt-6 card-k"><ExplorerMini /></div>
      <p className="mt-3 text-xs text-[var(--fp-sub)]">Powered by /status/jobs.json.</p>
    </main>
  );
}