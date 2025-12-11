"use client";
import React from "react";

export function Contact() {
  return (
    <section className="fade-in-up w-full max-w-5xl mx-auto py-20 px-6 md:px-8">
      <h2 className="text-xl font-semibold text-center">Contact</h2>
      <p className="text-sm text-neutral-600 text-center mt-2 max-w-2xl mx-auto">
        Interested in using Farpy for your studio, product, or infrastructure?
        Reach out and we&apos;ll get back to you with details.
      </p>
      <div className="mt-8 grid gap-6 md:grid-cols-[2fr,1fr] text-xs md:text-sm text-neutral-700">
        <form className="rounded-2xl border bg-white/70 p-4 space-y-3">
          <div>
            <label className="block text-[11px] font-medium mb-1">Email</label>
            <input
              type="email"
              className="fade-in-up w-full border rounded-lg px-3 py-2 text-xs"
              placeholder="you@example.com"
            />
          </div>
          <div>
            <label className="block text-[11px] font-medium mb-1">Message</label>
            <textarea
              className="fade-in-up w-full border rounded-lg px-3 py-2 text-xs min-h-[80px]"
              placeholder="Tell us what you&apos;re building or what you need."
            />
          </div>
          <button
            type="button"
            className="px-5 py-2.5 rounded-full text-xs font-medium bg-black text-white"
          >
            Submit (placeholder)
          </button>
          <p className="text-[11px] text-neutral-500">
            This is a UI placeholder. Hook it to your backend when ready.
          </p>
        </form>
        <div className="rounded-2xl border bg-white/70 p-4">
          <p className="font-semibold mb-1 text-sm">Direct email</p>
          <p className="text-xs text-neutral-700">contact@farpy.com</p>
          <p className="text-[11px] text-neutral-500 mt-3">
            You can also reach us for partnerships, node programs, or early access.
          </p>
        </div>
      </div>
    </section>
  );
}



