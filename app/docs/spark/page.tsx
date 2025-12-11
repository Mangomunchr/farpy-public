export default function SparkDocs() {
  return (
    <div className="min-h-screen bg-[#fdf7ec] text-slate-900 px-6 py-12 max-w-4xl mx-auto">

      <h1 className="text-3xl font-semibold tracking-tight">RIP API v1</h1>
      <p className="mt-2 text-sm text-slate-600">
        Render Integration Pipeline (RIP) API — HTTP surface for EZPZ jobs, worker routing,
        and proof-of-compute packets. Internally the module is called <span className="font-mono">spark</span>.
      </p>

      <section className="mt-10">
        <h2 className="text-xl font-semibold">Base URL</h2>
        <div className="mt-3 rounded-xl bg-slate-900 text-slate-50 p-4 text-sm font-mono">
          <pre>{`https://farpy.com/api/v1`}</pre>
        </div>
      </section>

      <section className="mt-10">
        <h2 className="text-xl font-semibold">Create Job</h2>
        <p className="mt-2 text-sm text-slate-700">Create a new EZPZ render job.</p>
        <div className="mt-3 rounded-xl bg-slate-900 text-slate-50 p-4 text-sm font-mono overflow-x-auto">
          <pre>{`POST /api/v1/jobs

{
  "engine": "imagemagick-test",
  "payload_url": "https://farpy.com/uploads/yourfile.bin"
}`}</pre>
        </div>
      </section>

      <section className="mt-10">
        <h2 className="text-xl font-semibold">Check Job Status</h2>
        <div className="mt-3 rounded-xl bg-slate-900 text-slate-50 p-4 text-sm font-mono overflow-x-auto">
          <pre>{`GET /api/v1/jobs/{job_id}

{
  "job_id": "EZPZ-REMOTE-1234",
  "status": "queued",
  "engine": "imagemagick-test",
  "created_at": "...",
  "finished_at": null
}`}</pre>
        </div>
      </section>

      <section className="mt-10">
        <h2 className="text-xl font-semibold">Worker: Get Next Job</h2>
        <p className="mt-2 text-sm text-slate-700">
          NodeMunchers poll this endpoint to receive jobs.
        </p>
        <div className="mt-3 rounded-xl bg-slate-900 text-slate-50 p-4 text-sm font-mono overflow-x-auto">
          <pre>{`GET /api/v1/worker/next?node_id=NODE-123

{
  "job_id": "EZPZ-REMOTE-1765065639778",
  "engine": "imagemagick-test",
  "payload": "https://farpy.com/uploads/EZPZ-REMOTE-1765065639778.bin"
}`}</pre>
        </div>
      </section>

      <section className="mt-10">
        <h2 className="text-xl font-semibold">Worker: Report Result</h2>
        <div className="mt-3 rounded-xl bg-slate-900 text-slate-50 p-4 text-sm font-mono overflow-x-auto">
          <pre>{`POST /api/v1/worker/report

{
  "job_id": "EZPZ-REMOTE-1765065639778",
  "status": "finished",
  "result_url": "https://farpy.com/results/output.png",
  "hash": "sha256:..."
}`}</pre>
        </div>
      </section>

      <section className="mt-10">
        <h2 className="text-xl font-semibold">Proof Packets</h2>
        <div className="mt-3 rounded-xl bg-slate-900 text-slate-50 p-4 text-sm font-mono overflow-x-auto">
          <pre>{`GET /api/v1/jobs/{job_id}/proof

{
  "job_id": "EZPZ-REMOTE-123",
  "gpu_model": "RTX 3080",
  "runtime_seconds": 1.52,
  "hash_in": "sha256:...",
  "hash_out": "sha256:...",
  "verified": true,
  "timestamp": "..."
}`}</pre>
        </div>
      </section>

      <div className="h-20" />
    </div>
  );
}
