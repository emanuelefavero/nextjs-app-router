import Link from 'next/link'

export default function Page() {
  return (
    <>
      <h1>Middleware</h1>

      <h3>Redirect Home with middleware</h3>

      <p>
        The following link redirects home instead of going to the{' '}
        <span className='text-amber-500'>/middleware/redirect</span> route
      </p>

      <Link href='/middleware/redirect'>Redirect Home</Link>
    </>
  )
}
