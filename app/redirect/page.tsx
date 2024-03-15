import Link from 'next/link'
import { logUsername } from '@/app/actions'

// TIP: Check logUsername function in app/actions.tsx to see how to use the redirect function

export default function Page() {
  return (
    <>
      <h1>Redirect</h1>

      <h2 className='mt-10'>Redirect after server action</h2>
      <p>
        The user will be redirected home after submitting the form. Check the
        server console to see the name logged
      </p>
      <form action={logUsername}>
        <input type='text' name='username' placeholder='Username' />
        <button type='submit'>Log Username</button>
      </form>

      <h2 className='mt-10'>Redirect from config file</h2>
      <p>
        The user will be redirected home. The redirect path is being configured
        in the next.config.js file
      </p>
      <Link href='/redirect-from-config-file'>Redirect from config file</Link>
    </>
  )
}
