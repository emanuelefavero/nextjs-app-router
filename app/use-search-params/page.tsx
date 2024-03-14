import Link from 'next/link'
import ShowSearchParams from '@/components/ShowSearchParams'

export default function Page() {
  return (
    <>
      <h1>useSearchParams</h1>

      <p>Check the url to see changes</p>

      <Link href='/use-search-params?name=John&age=30'>
        Append query string to this page
      </Link>

      <ShowSearchParams />
    </>
  )
}
