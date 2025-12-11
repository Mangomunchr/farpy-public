"use client";
import React, { useEffect, useState } from "react";

export function StatusPanel() {
  const [status, setStatus] = useState<null | string>(null);

  useEffect(() => {
    async function fetchStatus() {
      try {
        const res = await fetch("https://status.farpy.com", { method: "GET" });
        setStatus(res.ok ? "Online" : "Offline");
      } catch {
        setStatus("Offline");
      }
    }
    fetchStatus();
  }, []);

  return (
    <section id="status" className="fade-in-up w-full max-w-5xl mx-auto py-20 px-6 md:px-8">
      <h2 className="text-xl font-semibold text-center">System Status</h2>
      <p className="text-sm text-neutral-600 text-center mt-2">
        Live platform health snapshot powered by Bottle Goggle.
      </p>

      <div className="mt-8 flex justify-center">
        <div className="rounded-2xl border bg-white/70 px-8 py-6 text-center">
          <p className="text-xs text-neutral-500 mb-1">farpy.com</p>
          <p className="text-lg font-semibold">
            {status === null ? "Checking…" : status}
          </p>
        </div>
      </div>

      <p className="mt-4 text-center">
        <a
          href="https://status.farpy.com"
          className="text-xs underline text-neutral-600"
        >
          View detailed status ?
        </a>
      </p>
    </section>
  );
}




