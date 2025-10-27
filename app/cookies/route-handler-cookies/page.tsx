import { cookies } from 'next/headers'
import Login from './Login'
import Logout from './Logout'

// * This page shows how to create, read and delete cookies with route handlers

/*
- It uses the API routes defined in app/api/cookies/route.ts
- The Login and Logout components are client components that call the API routes
- The page checks for the 'session' cookie to determine if the user is logged in
*/

export default function Page() {
  const cookieStore = cookies()
  const session = cookieStore.get('session')

  return (
    <>
      <h1>Route Handler Cookies</h1>

      {session ? (
        <div>
          <h2>Welcome Back!</h2>
          <p>Session: {session.value}</p>
          <Logout />
        </div>
      ) : (
        <div>
          <h2>You are not logged in.</h2>
          <Login />
        </div>
      )}
    </>
  )
}
