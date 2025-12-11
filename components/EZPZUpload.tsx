"use client";
import React, { useState } from "react";

export function EZPZUpload() {
  const [file, setFile] = useState<File | null>(null);

  return (
    <section className="fade-in-up w-full max-w-5xl mx-auto py-20 px-6 md:px-8">
      <h2 className="text-xl font-semibold text-center">Try EZPZ</h2>
      <p className="text-sm text-neutral-600 text-center mt-2">
        Upload a file and Farpy will process it through the distributed GPU network.
      </p>

      <div className="mt-8 border rounded-2xl p-6 bg-white/70 text-center">
        <input
          type="file"
          onChange={(e) => setFile(e.target.files?.[0] || null)}
          className="block w-full text-sm mb-4"
        />

        <button
          disabled={!file}
          className="px-5 py-2.5 rounded-full text-xs font-medium bg-black text-white disabled:bg-neutral-300"
        >
          Upload (stub)
        </button>

        {file && (
          <p className="mt-3 text-xs text-neutral-500">
            Selected: {file.name}
          </p>
        )}
      </div>
    </section>
  );
}



