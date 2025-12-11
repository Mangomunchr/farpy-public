"use client";
import React from "react";

const steps = [
  {id:"01",t:"Upload",s:"Upload your file",b:"You upload a scene, image, video, or AI prompt directly to Farpy.",n:"User ? Farpy API"},
  {id:"02",t:"Prepare",s:"Farpy prepares your job",b:"Farpy validates the file, packages it, and prepares it for distributed processing.",n:"Farpy API ? RIP"},
  {id:"03",t:"Dispatch",s:"Farpy finds the best GPU",b:"Routing engine assigns the job to the most suitable GPU node.",n:"RIP ? Tesseract Engine ? NodeMunchers"},
  {id:"04",t:"Process",s:"GPU node computes",b:"A GPU node executes the workload securely and produces output.",n:"NodeMuncher ? Compute ? Output"},
  {id:"05",t:"Verify",s:"Farpy verifies result",b:"Farpy generates a proof packet to validate the output.",n:"Output ? Pwoof System"},
  {id:"06",t:"Deliver",s:"Download your results",b:"You download the final result instantly through Farpy.",n:"Verified ? Farpy API"},
  {id:"07",t:"Payout",s:"GPU operator is paid",b:"After verification, Farpy pays the GPU node operator.",n:"Pwoof ? Payload Engine"},
];

export function HowItWorks() {
  return (
    <section id="how" className="fade-in-up w-full max-w-5xl mx-auto py-20 px-6 md:px-8">
      <div className="text-center mb-10">
        <p className="text-xs font-medium uppercase tracking-[0.25em] mb-2">How it works</p>
        <h2 className="text-2xl md:text-3xl font-semibold">Distributed GPU power in seven steps</h2>
      </div>
      <ol className="space-y-4">
        {steps.map(x=>(
          <li key={x.id} className="flex gap-4 rounded-2xl border bg-white/70 p-4 shadow-sm">
            <div className="flex h-8 w-8 items-center justify-center rounded-full border text-xs font-semibold">{x.id}</div>
            <div className="flex-1">
              <h3 className="text-sm font-semibold">{x.s}</h3>
              <p className="text-xs mt-1">{x.b}</p>
              <p className="mt-2 inline-flex rounded-full border border-dashed px-2 py-1 text-[11px]">{x.n}</p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}




