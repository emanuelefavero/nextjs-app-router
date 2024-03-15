import { logUsername } from '@/app/actions'

// TIP: Check logUsername function in app/actions.tsx to see how to use the redirect function

export default function Page() {
  return (
    <>
      <p>
        The user will be redirected home after submitting the form. Check the
        server console to see the name logged
      </p>
      <form action={logUsername}>
        <input type='text' name='username' placeholder='Username' />
        <button type='submit'>Log Username</button>
      </form>
    </>
  )
}
