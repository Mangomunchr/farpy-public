export const metadata = { title: "Contact — Farpy" };
export default function Page() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-16">
      <h1 className="text-3xl font-bold">Contact</h1>
      <ul className="mt-4 space-y-2 text-zinc-400">
        <li>Discord: <a className="underline" href="https://discord.gg/v3g4V2GtzT" target="_blank" rel="noopener">https://discord.gg/v3g4V2GtzT</a></li>
        <li>Email: <a className="underline" href="mailto:hi@farpy.com">hi@farpy.com</a> (placeholder)</li>
      </ul>
    </main>
  );
}