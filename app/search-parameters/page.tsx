import Link from 'next/link'
import { server } from '@/config/server'

export default function Page() {
  return (
    <>
      <h1>Search Parameters</h1>

      {/* Send search parameters to an api route to be then logged by the server */}
      <Link href={`${server}/api/search-parameters?name=John&age=30`}>
        Send search parameters
      </Link>
    </>
  )
}
