export function TrustBlock() {
  return (
    <section className="w-full max-w-4xl mx-auto py-16 px-4">
      <h2 className="text-xl font-semibold text-center">Verified Compute</h2>
      <p className="text-sm text-center mt-2 text-neutral-600">
        Every job includes a verifiable proof packet. Farpy guarantees output integrity
        before any payout is issued.
      </p>
      <div className="mt-6 rounded-2xl border p-6 bg-white/70 text-xs text-neutral-600">
        <p>Pwoof System ? Input/Output hashing</p>
        <p>Payload Engine ? Verified payouts only</p>
        <p>Bottle Goggle ? Full system observability</p>
      </div>
    </section>
  );
}
