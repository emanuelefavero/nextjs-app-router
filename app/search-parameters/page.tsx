import Link from 'next/link'
import { server } from '@/config/server'

export default function Page() {
  return (
    <>
      <h1>Search Parameters</h1>

      {/* Send search parameters to an api route to be then logged by the server */}
      {/* NOTE: Server components don't need to call the local api. (This will also cause an error when deploying to Vercel.). Instead, access the data directly by importing the file/exporting the data */}
      <Link href={`${server}/api/search-parameters?name=John&age=30`}>
        Send search parameters
      </Link>
    </>
  )
}
