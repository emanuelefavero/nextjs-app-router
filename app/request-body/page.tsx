import { server } from '@/config/server'

// NOTE: Server Actions are now the preferred method for handling form submissions in Next.js
// @see /server-actions/page.tsx

export default function Page() {
  return (
    <>
      <h1>Request Body Page</h1>

      <p>Send Request Body to API</p>
      {/* NOTE: Server components don't need to call the local api. (This will also cause an error when deploying to Vercel.). Instead, access the data directly by importing the file/exporting the data */}
      <form action={`${server}/api/request-body`} method='post'>
        <input type='text' name='name' placeholder='Name' />
        <button type='submit'>Send</button>
      </form>
    </>
  )
}
