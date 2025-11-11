export default function Page(){
  const steps = [
    {t:'Drop it', d:'Upload your file.'},
    {t:'Farpy it', d:'We schedule across the Digital Highway.'},
    {t:'Watch magic', d:'GPUs render while you chill.'},
    {t:'Done', d:'Download. NodeMunchers earn cash.'},
  ];
  return (
    <div className='space-y-6'>
      <h1 className='text-3xl font-bold'>How it works</h1>
      <ol className='space-y-3'>
        {steps.map((s,i)=>(
          <li key={i} className='border rounded-2xl p-5'>
            <div className='font-semibold'>{i+1}?? {s.t}</div>
            <div className='text-sm text-gray-600'>{s.d}</div>
          </li>
        ))}
      </ol>
    </div>
  );
}
