export default function EzpzDocs() {
  return (
    <div className="min-h-screen bg-[#fdf7ec] text-slate-900 px-6 py-12 max-w-4xl mx-auto">
      <h1 className="text-3xl font-semibold tracking-tight">EZPZ Workflow</h1>
      <p className="mt-2 text-sm text-slate-600">
        EZPZ is the Toy Mode pipeline: upload a file, Farpy queues it, NodeMunchers render it,
        and you get a result plus proof.
      </p>

      <section className="mt-10">
        <h2 className="text-xl font-semibold">Create Job</h2>
        <p className="mt-2 text-sm text-slate-700">
          Minimal job creation example for EZPZ.
        </p>

        <div className="mt-3 rounded-xl bg-slate-900 text-slate-50 text-xs font-mono p-4 overflow-x-auto">
          <pre>{`POST /api/v1/jobs

{
  "engine": "imagemagick-test",
  "payload_url": "https://farpy.com/uploads/file.bin"
}`}</pre>
        </div>
      </section>

      <section className="mt-10">
        <h2 className="text-xl font-semibold">Check Status</h2>
        <div className="mt-3 rounded-xl bg-slate-900 text-slate-50 text-xs font-mono p-4 overflow-x-auto">
          <pre>{`GET /api/v1/jobs/EZPZ-12345

{
  "job_id": "EZPZ-12345",
  "status": "queued",
  "engine": "imagemagick-test",
  "created_at": "...",
  "finished_at": null
}`}</pre>
        </div>
      </section>

      <div className="h-20" />
    </div>
  );
}
