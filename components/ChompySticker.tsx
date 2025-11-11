"use client";
export default function ChompySticker(){
  return (
    <div aria-hidden className="select-none">
      <div className="relative w-28 h-28 md:w-32 md:h-32">
        <div className="absolute inset-0 rounded-2xl bg-[var(--fp-mint)] rotate-6"></div>
        <div className="absolute inset-0 rounded-2xl bg-[var(--fp-lav)] -rotate-3"></div>
        <div className="absolute inset-0 rounded-2xl bg-white border border-[var(--fp-line)] grid place-items-center text-4xl">
          🦠
        </div>
      </div>
    </div>
  );
}