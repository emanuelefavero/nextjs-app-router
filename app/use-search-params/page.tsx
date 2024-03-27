import Link from 'next/link'
import ShowSearchParams from '@/components/ShowSearchParams'
import { Suspense } from 'react'

export default function Page() {
  return (
    <>
      <h1>useSearchParams</h1>

      <p>Check the url to see changes</p>

      <Link href='/use-search-params?name=John&age=30'>
        Append query string to this page
      </Link>

      {/* TIP: It is necessary to wrap any component that uses useSearchParams inside a suspense boundary @see https://nextjs.org/docs/messages/missing-suspense-with-csr-bailout */}
      <Suspense>
        <ShowSearchParams />
      </Suspense>
    </>
  )
}
