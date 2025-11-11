"use client";
import { useEffect, useCallback } from "react";

function apply(v: "pro" | "chaos") {
  const root = document.documentElement;
  root.classList.remove("vibe-pro", "vibe-chaos");
  root.classList.add(v === "chaos" ? "vibe-chaos" : "vibe-pro");
  localStorage.setItem("vibe", v);
}

export default function VibeToggle() {
  useEffect(() => {
    const url = new URL(window.location.href);
    const q = url.searchParams.get("vibe");
    const saved = (localStorage.getItem("vibe") as "pro" | "chaos" | null) || "pro";
    apply(q === "chaos" || q === "pro" ? q : saved);
  }, []);

  const onClick = useCallback(() => {
    const next = document.documentElement.classList.contains("vibe-chaos") ? "pro" : "chaos";
    apply(next);
  }, []);

  return (
    <button
      onClick={onClick}
      className="ml-auto px-3 py-1 rounded-full text-xs border border-zinc-700/70 hover:border-zinc-500 shadow-[0_0_12px_rgba(255,120,200,.15)]">
      🎛️ Vibe
    </button>
  );
}