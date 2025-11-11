export default function Page() {
  return (
    <div className='space-y-8'>
      <h1 className='text-4xl md:text-5xl font-bold'>Distributed GPU power for everyone.</h1>
      <p className='text-lg text-gray-600'>Tiny taps. Big compute.</p>
      <div className='flex gap-3'>
        <a className='px-5 py-3 rounded-2xl bg-farpyBlue text-white' href='/join'>Render Now</a>
        <a className='px-5 py-3 rounded-2xl bg-farpyPink text-white' href='/join#nodes'>Become a NodeMuncher</a>
      </div>
      <div className='rounded-2xl border p-6'>
        <div className='text-sm uppercase text-gray-500 mb-3'>Pipeline</div>
        <div className='text-lg'>
          <span>Render Garden ??</span>
          <span className='mx-2'>?</span>
          <span>Render Bazaar ??</span>
          <span className='mx-2'>?</span>
          <span>NodeMunchers ??</span>
          <span className='mx-2'>?</span>
          <span>Payout ??</span>
        </div>
      </div>
      <div className='grid md:grid-cols-4 gap-4'>
        {[
          {t:'Drop', d:'Upload your render or AI job.'},
          {t:'Farpy it', d:'We queue and route to free GPUs.'},
          {t:'Watch', d:'Jobs finish fast; you sip coffee.'},
          {t:'Done', d:'Download results; nodes get paid.'},
        ].map((s,i)=>(
          <div key={i} className='border rounded-2xl p-5'>
            <div className='font-semibold'>{s.t}</div>
            <div className='text-sm text-gray-600 mt-1'>{s.d}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
