"use client";
import { useEffect, useState } from "react";
type Job = { id:string; gpu?:string; ms?:number; pay?:number; ts?:number };

export default function ExplorerMini(){
  const [rows,setRows]=useState<Job[]>([]);
  useEffect(()=>{
    let alive=true;
    fetch("/status/jobs.json",{cache:"no-store"})
      .then(r=>r.ok?r.json():[]).then((arr:Job[])=> alive && setRows((arr||[]).slice(-5).reverse()))
      .catch(()=>{});
    return ()=>{alive=false};
  },[]);
  if(!rows.length) return <div className="text-xs text-[var(--fp-sub)]">No recent jobs yet.</div>;
  return <div className="overflow-x-auto">
    <table className="w-full text-sm">
      <thead><tr className="[&>th]:text-left [&>th]:py-2 text-[var(--fp-sub)]">
        <th>Job</th><th>GPU</th><th>Runtime</th><th>Pay</th><th>When</th>
      </tr></thead>
      <tbody>{rows.map(j=>
        <tr key={j.id} className="[&>td]:py-2 border-t border-[var(--fp-line)]">
          <td className="font-mono text-xs">{j.id}</td>
          <td>{j.gpu||"—"}</td>
          <td>{j.ms?Math.round(j.ms/1000)+"s":"—"}</td>
          <td>{j.pay?("$"+j.pay.toFixed(2)):"—"}</td>
          <td>{j.ts?new Date(j.ts).toLocaleString():"—"}</td>
        </tr>)}
      </tbody>
    </table>
  </div>;
}