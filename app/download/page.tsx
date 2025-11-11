export const metadata = { title: "Download — Farpy" };
export default function Page() {
  return (<main className="mx-auto max-w-3xl px-4 py-16">
    <h1 className="text-3xl font-bold">Download</h1>
    <p className="mt-3 text-zinc-400">Desktop + SDK coming with early access. For now, join the waitlist and we’ll ping you.</p>
    <div className="mt-6 flex gap-3">
      <a className="btn-pill btn-primary" href="/join">Join waitlist</a>
      <a className="btn-pill" href="/how">How it works</a>
    </div>
  </main>);
}