import Link from 'next/link'

export default function Page() {
  return (
    <>
      <h1>Search Parameters</h1>

      {/* Send search parameters to an api route to be then logged by the server */}
      <Link href='http://localhost:3000/api/search-parameters?name=John&age=30'>
        Send search parameters
      </Link>
    </>
  )
}
