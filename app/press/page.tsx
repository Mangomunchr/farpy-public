export const metadata = { title: "Press — Farpy" };
export default function Page() {
  return (<main className="mx-auto max-w-3xl px-4 py-16">
    <h1 className="text-3xl font-bold">Press</h1>
    <p className="mt-3 text-zinc-400">Looking for a quote, logo, or background?</p>
    <ul className="mt-4 text-zinc-400 list-disc pl-5 space-y-2">
      <li>One-liner: Distributed GPU power for everyone.</li>
      <li>Tagline: Tiny taps. Big compute.</li>
      <li>Contact: <a className="underline" href="mailto:hi@farpy.com?subject=Press%20Inquiry">hi@farpy.com</a></li>
    </ul>
  </main>);
}