"use client";

import { useState } from "react";

export default function VibeToggle() {
  const [mode, setMode] = useState<"light" | "dark">("dark");
  const label = mode === "dark" ? "Dark mode" : "Light mode";

  return (
    <button
      type="button"
      aria-label={label}
      className="inline-flex items-center rounded-full border border-slate-700/60 bg-slate-900/70 px-3 py-1 text-xs text-slate-200 hover:border-sky-400/70 hover:text-sky-200 transition"
      onClick={() => setMode(mode === "dark" ? "light" : "dark")}
    >
      <span className="mr-1.5 text-sm">{mode === "dark" ? "🌙" : "🌞"}</span>
      <span>{mode === "dark" ? "Chill mode" : "Bright mode"}</span>
    </button>
  );
}
