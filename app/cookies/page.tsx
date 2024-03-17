import { cookies } from 'next/headers'

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

      {hasNameCookie ? <p>Welcome back, {nameCookie}</p> : <p>Set your name</p>}

      {/* SET COOKIE */}
      <form action={setCookie}>
        <input type='text' name='name' placeholder='Name' />
        <button type='submit'>Set Cookie</button>
      </form>
    </>
  )
}
