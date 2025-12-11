export default function WorkerDocs() {
  return (
    <div className="min-h-screen bg-[#fdf7ec] text-slate-900 px-6 py-12 max-w-4xl mx-auto">
      <h1 className="text-3xl font-semibold tracking-tight">NodeMuncher Worker Guide</h1>
      <p className="mt-2 text-sm text-slate-600">
        How workers connect to Farpy, poll jobs, run engines, and report results.
      </p>

      <section className="mt-10">
        <h2 className="text-xl font-semibold">Install worker</h2>
        <div className="mt-3 rounded-xl bg-slate-900 text-slate-50 p-4 text-xs font-mono overflow-x-auto">
          <pre>{`# Windows
Download the installer at:
https://farpy.com/download

# Linux
curl -sS https://farpy.com/install.sh | bash`}</pre>
        </div>
      </section>

      <section className="mt-10">
        <h2 className="text-xl font-semibold">Polling loop</h2>
        <div className="mt-3 rounded-xl bg-slate-900 text-slate-50 p-4 text-xs font-mono overflow-x-auto">
          <pre>{`GET /api/v1/worker/next?node_id=NODE-123
 -> run engine
 -> POST /api/v1/worker/report`}</pre>
        </div>
      </section>

      <div className="h-20" />
    </div>
  );
}
