import Link from 'next/link'
import { cookies } from 'next/headers'

export default function Page() {
  const nameCookie = cookies().get('username')?.value

  return (
    <>
      <h1>Middleware</h1>

      <h3>Cookies set with middleware</h3>

      <p>
        When the <span className='text-amber-500'>/middleware</span> route is
        accessed, a cookie is set with the middleware
      </p>

      {nameCookie && (
        <p className='text-emerald-500'>
          Cookie set with the name: {nameCookie}
        </p>
      )}

      <h3>Redirect Home with middleware</h3>

      <p>
        The following link redirects home instead of going to the{' '}
        <span className='text-amber-500'>/middleware/redirect</span> route
      </p>

      <Link href='/middleware/redirect'>Redirect Home</Link>
    </>
  )
}
