export const metadata = { title: "Jobs — Farpy" };
export default function Page() {
  return (<main className="mx-auto max-w-3xl px-4 py-16">
    <h1 className="text-3xl font-bold">Jobs</h1>
    <p className="mt-3 text-zinc-400">We’re tiny and fast. Contractors welcome. Send a short note + GitHub/portfolio.</p>
    <a className="btn-pill btn-primary mt-6 inline-block" href="mailto:hi@farpy.com?subject=Jobs at Farpy">Email hi@farpy.com</a>
  </main>);
}