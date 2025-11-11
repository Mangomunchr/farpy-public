'use client'
import {useEffect,useState} from 'react';
type S = { api?: {uptime:number}, jobs?: {success:number}, payout?: {verified:boolean}, ts?: number };
export default function Page(){
  const [s,setS]=useState<S|undefined>();
  useEffect(()=>{
    fetch('/status/status.json',{cache:'no-store'}).then(r=>r.json()).then(setS).catch(()=>setS(undefined));
  },[]);
  return (
    <div className='space-y-4'>
      <h1 className='text-3xl font-bold'>Live Status</h1>
      {!s && <div className='text-sm text-gray-600'>Loading…</div>}
      {s && (
        <div className='grid md:grid-cols-3 gap-4'>
          <div className='border rounded-2xl p-5'><div className='text-sm text-gray-500'>API uptime</div><div className='text-2xl font-bold'>{(s.api?.uptime??0).toFixed?.(2) ?? s.api?.uptime ?? '—'}%</div></div>
          <div className='border rounded-2xl p-5'><div className='text-sm text-gray-500'>Job success</div><div className='text-2xl font-bold'>{(s.jobs?.success??0).toFixed?.(2) ?? s.jobs?.success ?? '—'}%</div></div>
          <div className='border rounded-2xl p-5'><div className='text-sm text-gray-500'>Payout verification</div><div className='text-2xl font-bold'>{s.payout?.verified ? 'On' : 'Pending'}</div></div>
        </div>
      )}
      {s?.ts && <div className='text-xs text-gray-500'>Updated: {new Date(s.ts*1000).toLocaleString()}</div>}
    </div>
  );
}
