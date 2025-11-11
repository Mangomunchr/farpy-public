"use client";
export default function JoinForm() {
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const email = (document.getElementById("email") as HTMLInputElement)?.value || "";
    const note  = (document.getElementById("note")  as HTMLTextAreaElement)?.value || "";
    location.href =
      `mailto:hi@farpy.com?subject=Farpy%20Early%20Access` +
      `&body=Email:%20${encodeURIComponent(email)}%0A%0ANote:%0A${encodeURIComponent(note)}`;
  };
  return (
    <form className="mt-6 grid gap-3" onSubmit={onSubmit}>
      <input id="email" type="email" required placeholder="you@studio.com"
             className="w-full rounded-xl border border-zinc-800 bg-black px-3 py-2" />
      <textarea id="note" rows={4} placeholder="What do you want to render?"
                className="w-full rounded-xl border border-zinc-800 bg-black px-3 py-2"></textarea>
      <button className="btn-pill btn-primary w-fit">Request access</button>
    </form>
  );
}