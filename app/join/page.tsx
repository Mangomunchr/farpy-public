export const metadata = { title: "Join — Farpy" };

export default function Page() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-16">
      <h1 className="text-3xl font-bold">Join the early access</h1>
      <p className="mt-2 text-zinc-400">
        Drop your email and what you want to render. We’ll invite waves weekly.
      </p>

      <form className="mt-6 grid gap-3"
            onSubmit={(e) => {
              e.preventDefault();
              const email = (document.getElementById("email") as HTMLInputElement)?.value || "";
              const note  = (document.getElementById("note")  as HTMLTextAreaElement)?.value || "";
              location.href = `mailto:hi@farpy.com?subject=Farpy%20Early%20Access&body=Email:%20${encodeURIComponent(email)}%0A%0ANote:%0A${encodeURIComponent(note)}`;
            }}>
        <input id="email" type="email" required placeholder="you@studio.com"
               className="w-full rounded-xl border border-zinc-800 bg-black px-3 py-2" />
        <textarea id="note" rows={4} placeholder="What do you want to render?"
               className="w-full rounded-xl border border-zinc-800 bg-black px-3 py-2"></textarea>
        <button className="btn-pill btn-primary w-fit">Request access</button>
      </form>

      <p className="mt-6 text-sm text-zinc-500">
        Prefer Discord? <a className="underline" href="https://discord.gg/v3g4V2GtzT" target="_blank" rel="noopener">Join the Discord</a>.
      </p>
    </main>
  );
}
