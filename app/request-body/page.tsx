// NOTE: Only Client Components can call local api routes
'use client'

import { server } from '@/config/server'

// NOTE: Server Actions are now the preferred method for handling form submissions in Next.js.
// @see /server-actions/page.tsx

export default function Page() {
  return (
    <>
      <h1>Request Body Page</h1>

      <p>Send Request Body to API</p>

      <form action={`${server}/api/request-body`} method='post'>
        <input type='text' name='name' placeholder='Name' />
        <button type='submit'>Send</button>
      </form>
    </>
  )
}
