export const metadata = { title: "About — Farpy" };

export default function Page() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-16">
      <h1 className="text-3xl font-bold">About Farpy</h1>
      <p className="mt-3 text-zinc-300">
        Farpy is distributed GPU power for everyone. Creators drop files; NodeMunchers render; payouts are verified.
      </p>

      <ul className="mt-6 text-zinc-400 list-disc pl-5 space-y-2">
        <li>Simple: Drop → Farpy it → Done.</li>
        <li>Reliable: versioned API, canaries, DLQ, public status.</li>
        <li>Trust: SHA256 proof packets and a transparent payout ledger (coming soon).</li>
      </ul>

      <h2 id="discord" className="mt-8 text-xl font-semibold">Community</h2>
      <p className="mt-2 text-zinc-400">
        Join the Discord for updates and early access:{" "}
        <a className="underline" href="https://discord.gg/v3g4V2GtzT" target="_blank" rel="noopener">
          https://discord.gg/v3g4V2GtzT
        </a>
      </p>
    </main>
  );
}