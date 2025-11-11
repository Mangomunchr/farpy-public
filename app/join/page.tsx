export const metadata = { title: "Join — Farpy" };
import JoinForm from "./JoinForm";

export default function Page() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-16">
      <h1 className="text-3xl font-bold">Join Farpy (Early Access)</h1>
      <p className="mt-2 text-zinc-400">Plug in via form or Discord. Waves go out weekly.</p>
      <JoinForm />
      <p className="mt-6 text-sm text-zinc-500">
        Prefer Discord?{" "}
        <a className="underline" href="https://discord.gg/v3g4V2GtzT" target="_blank" rel="noopener">Join Discord</a>.
      </p>
    </main>
  );
}