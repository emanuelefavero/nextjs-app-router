// NOTE: Do not convert the while page to a client component if it's not necessary, create a separate client component instead
'use client'

import Link from 'next/link'
import { useSearchParams } from 'next/navigation'

export default function Page() {
  const searchParams = useSearchParams()
  const name = searchParams.get('name')

  return (
    <>
      <h1>useSearchParams</h1>

      <p>Check the url to see changes</p>

      <Link href='/use-search-params?name=John&age=30'>
        Append query string to this page
      </Link>

      {name && <p>Name: {name}</p>}
    </>
  )
}
