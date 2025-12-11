"use client";
import { useState } from "react";

export default function EzpzConsole() {
  const [file, setFile] = useState<File | null>(null);
  const [jobId, setJobId] = useState("");
  const [logs, setLogs] = useState<string[]>([]);
  const [resultUrl, setResultUrl] = useState("");

  function log(x: string) {
    setLogs((l) => [...l, x]);
  }

  async function uploadFile() {
    if (!file) {
      log("No file selected.");
      return;
    }

    log("Uploading file...");

    const buf = await file.arrayBuffer();
    const bytes = new Uint8Array(buf);

    const uploadRes = await fetch("/api/v1/upload", {
      method: "POST",
      body: bytes,
      headers: {
        "Content-Type": "application/octet-stream",
      },
    });

    if (!uploadRes.ok) {
      log("Upload failed.");
      return;
    }

    const { url } = await uploadRes.json();
    log("File uploaded → " + url);

    log("Creating EZPZ job...");

    const jobRes = await fetch("/api/v1/jobs", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        engine: "imagemagick-test",
        payload_url: url,
      }),
    });

    if (!jobRes.ok) {
      log("Job creation failed.");
      return;
    }

    const j = await jobRes.json();
    setJobId(j.job_id);
    log("Job created: " + j.job_id);

    pollStatus(j.job_id);
  }

  async function pollStatus(id: string) {
    log("Polling status...");

    const iv = setInterval(async () => {
      const r = await fetch(`/api/v1/jobs/${id}`, { cache: "no-store" });
      if (!r.ok) return;

      const d = await r.json();
      log(`Status: ${d.status}`);

      if (d.status === "finished") {
        clearInterval(iv);
        setResultUrl(d.result_url || "");
        log("Job finished.");
      }

      if (d.status === "error") {
        clearInterval(iv);
        log("Job errored.");
      }
    }, 1500);
  }

  function renderResult() {
    if (!resultUrl) return null;
    const img = resultUrl.toLowerCase();
    const isImg =
      img.endsWith(".png") || img.endsWith(".jpg") || img.endsWith(".jpeg");

    if (isImg) {
      return (
        <div className="mt-6">
          <h3 className="text-sm font-semibold">Result Image</h3>
          <img
            src={resultUrl}
            alt="Result"
            className="mt-3 rounded-xl border border-black/10 max-w-sm"
          />
        </div>
      );
    }

    return (
      <div className="mt-6 text-sm">
        Result file:
        <a href={resultUrl} className="ml-2 underline text-sky-700">
          {resultUrl}
        </a>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#fdf7ec] text-slate-900 px-6 py-12 max-w-3xl mx-auto">
      <h1 className="text-3xl font-semibold tracking-tight">EZPZ Console</h1>
      <p className="mt-2 text-sm text-slate-700">
        Toy Mode interface for uploading a file, starting a render, watching status, and
        viewing results.
      </p>

      <div className="mt-10">
        <input
          type="file"
          className="text-sm"
          onChange={(e) => setFile(e.target.files?.[0] || null)}
        />

        <button
          onClick={uploadFile}
          className="ml-4 rounded-full bg-black px-5 py-2 text-sm font-semibold text-[#fdf7ec] hover:bg-slate-900"
        >
          Start Render
        </button>
      </div>

      {jobId && (
        <div className="mt-6 text-sm text-slate-700">
          <div>
            Job ID: <span className="font-mono">{jobId}</span>
          </div>
        </div>
      )}

      <div className="mt-8 rounded-xl bg-white border border-black/5 shadow-sm p-4 h-60 overflow-auto text-xs font-mono leading-relaxed">
        {logs.map((l, i) => (
          <div key={i}>{l}</div>
        ))}
      </div>

      {renderResult()}

      <div className="h-20" />
    </div>
  );
}
