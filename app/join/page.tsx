export default function Join() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-16">
      <h1 className="text-3xl font-bold">Join Farpy</h1>
      <p className="mt-4 text-zinc-300">Early access for Farpies (uploaders) and NodeMunchers (GPU operators).</p>
      <ul className="mt-6 list-disc pl-6 text-zinc-300">
        <li>Drop &amp; render files (Garden)</li>
        <li>Spin up a node and earn (Bazaar)</li>
      </ul>
      <div className="mt-8 flex gap-3">
        <a className="px-4 py-2 rounded-xl bg-white text-black font-medium" href="https://discord.gg/">Discord</a>
        <a className="px-4 py-2 rounded-xl border border-zinc-800" href="mailto:hello@farpy.com">Email us</a>
      </div>
    </main>
  );
}