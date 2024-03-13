import Link from 'next/link'

export default function NotFound() {
  return (
    <div className='flex justify-center items-center flex-col w-full overflow-hidden p-4 h-80'>
      <h2 className='flex flex-col justify-center items-center'>
        <span className='text-7xl'>404</span> Not Found
      </h2>
      <p>Could not find requested resource</p>
      <Link href='/'>Return Home</Link>
    </div>
  )
}
