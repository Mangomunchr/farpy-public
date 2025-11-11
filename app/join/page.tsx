export default function Page(){
  return (
    <div className='grid md:grid-cols-2 gap-6'>
      <div className='border rounded-2xl p-6'>
        <div className='text-2xl font-bold'>For Farpies ??</div>
        <p className='text-sm text-gray-600 mt-2'>Upload & chill. Login with Discord.</p>
        <a className='inline-block mt-4 px-4 py-3 rounded-xl bg-farpyBlue text-white' href='/api/auth/discord'>Continue with Discord</a>
      </div>
      <div className='border rounded-2xl p-6' id='nodes'>
        <div className='text-2xl font-bold'>For NodeMunchers ??</div>
        <p className='text-sm text-gray-600 mt-2'>Run jobs & earn. Join the waitlist.</p>
        <a className='inline-block mt-4 px-4 py-3 rounded-xl bg-farpyPink text-white' href='https://discord.gg/'>Join waitlist</a>
      </div>
    </div>
  );
}
