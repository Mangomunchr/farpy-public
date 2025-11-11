"use client";
import { useEffect, useState } from "react";
type S = { canary?: { ok?: boolean } };

export default function StatusBadge(){
  const [ok,setOk]=useState<boolean|null>(null);
  useEffect(()=>{
    let alive=true;
    fetch("/status/status.json",{ cache:"no-store" })
      .then(r=>r.json()).then((j:S)=> alive && setOk(!!j?.canary?.ok))
      .catch(()=> alive && setOk(false));
    return ()=>{alive=false};
  },[]);
  const cls = ok===null ? "bg-zinc-500" : ok ? "bg-green-500" : "bg-red-500";
  const txt = ok===null ? "Checking…" : ok ? "All systems go" : "Issues";
  return <span className="inline-flex items-center gap-2 text-xs text-[var(--fp-sub)]">
    <span className={`inline-block h-2.5 w-2.5 rounded-full ${cls}`}></span>{txt}
  </span>;
}