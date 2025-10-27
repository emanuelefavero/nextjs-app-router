import { cookies } from 'next/headers'
import Link from 'next/link'

export default function Page() {
  async function setCookie(formData: FormData) {
    'use server'

    cookies().set('name', formData.get('name') as string)
  }

  const hasNameCookie = cookies().has('name')
  const nameCookie = cookies().get('name')?.value

  return (
    <>
      <h1>Cookie Page</h1>

      <Link href='/cookies/route-handler-cookies'>
        Go to Route Handler Cookies Page
      </Link>

      {hasNameCookie ? <p>Welcome back, {nameCookie}</p> : <p>Set your name</p>}

      {/* SET COOKIE */}
      <form action={setCookie}>
        <input type='text' name='name' placeholder='Name' />
        <button type='submit'>Set Cookie</button>
      </form>
    </>
  )
}
