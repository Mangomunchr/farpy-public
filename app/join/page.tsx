export default function Join(){
  return (
    <main className="section-k">
      <h1 className="text-3xl font-bold">Join waitlist</h1>
      <p className="mt-2 text-[var(--fp-sub)]">We’ll email you when Farpy opens.</p>
      <div className="mt-6 card-k">
        <form action="mailto:hello@farpy.com" method="GET">
          <label className="block text-sm font-medium">Email</label>
          <input
            name="email" type="email" required
            className="mt-1 w-full rounded-xl border px-3 py-2"
            style={{ borderColor: "var(--fp-line)" }}
            placeholder="you@example.com"
          />
          <button className="mt-4 btn-pill btn-primary" type="submit">Save my spot</button>
        </form>
        <p className="mt-3 text-xs text-[var(--fp-sub)]">No spam. Just launch news.</p>
      </div>
    </main>
  );
}