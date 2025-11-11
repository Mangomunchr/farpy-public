import { NextResponse } from "next/server";

export async function POST(req: Request){
  try{
    const { email, honey } = await req.json();
    if (honey) return NextResponse.json({ ok:true }); // bot
    if (!email || !/^\S+@\S+\.\S+$/.test(email)) return NextResponse.json({ ok:false, error:"bad_email" }, { status:400 });

    const url = process.env.SUPABASE_URL!;
    const key = process.env.SUPABASE_SERVICE_ROLE!;
    const r = await fetch(`${url}/rest/v1/waitlist`,{
      method:"POST",
      headers:{
        apikey: key,
        Authorization: `Bearer ${key}`,
        "Content-Type":"application/json",
        Prefer:"resolution=merge-duplicates"
      },
      body: JSON.stringify({ email })
    });
    if(!r.ok) return NextResponse.json({ ok:false, error:"supabase_fail" }, { status:500 });
    return NextResponse.json({ ok:true });
  }catch(e){
    return NextResponse.json({ ok:false, error:"server" }, { status:500 });
  }
}