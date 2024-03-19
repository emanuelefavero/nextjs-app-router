import Link from 'next/link'

export default async function Home() {
  return (
    <>
      <h1>Home</h1>
      <ul>
        <li>
          <Link href='/server-actions'>Server Actions</Link>
        </li>
        <li>
          <Link href='/server-actions-events'>Server Actions in Events</Link>
        </li>
        <li>
          <Link href='/search-parameters'>Search Parameters</Link>
        </li>
        <li>
          <Link href='/use-pathname'>usePathname</Link>
        </li>
        <li>
          <Link href='/use-search-params'>useSearchParams</Link>
        </li>
        <li>
          <Link href='/client-component'>Client Component</Link>
        </li>
        <li>
          <Link href='/back-button'>Back Button</Link>
        </li>
        <li>
          <Link href='/nested-routes/nested-route'>Nested Routes</Link>
        </li>
        <li>
          <Link href='/template-file'>Template File</Link>
        </li>
        <li>
          <Link href='/url-state'>URL State</Link>
        </li>
        <li>
          <Link href='/about'>About</Link>
        </li>
        <li>
          <Link href='/blog/1'>Blog 1</Link>
        </li>
        <li>
          <Link href='/blog/2'>Blog 2</Link>
        </li>
        <li>
          <Link href='/client-server-fetch'>Client Server Fetch</Link>
        </li>
        <li>
          <Link href='/posts'>Posts</Link>
        </li>
        <li>
          <Link href='/no-cache'>No Cache</Link>
        </li>
        <li>
          <Link href='/static-blog'>Static Blog</Link>
        </li>
        <li>
          <Link href='/use-router'>useRouter</Link>
        </li>
        <li>
          <Link href='/redirect'>Redirect</Link>
        </li>
        <li>
          <Link href='/this-will-not-be-found'>Not Found</Link>
        </li>
        <li>
          <Link href='/parallel-routes'>Parallel Routes</Link>
        </li>
        <li>
          <Link href='/server-component'>Server Component</Link>
        </li>
        <li>
          <Link href='/world-time-api'>World Time API</Link>
        </li>
        <li>
          <Link href='/vercel-api'>Vercel API</Link>
        </li>
        <li>
          <Link href='/repo/next.js'>Repo next.js</Link>
        </li>
        <li>
          <Link href='/repo/vercel'>Repo vercel</Link>
        </li>
        <li>
          <Link href='/scroll-to-an-element#myElement'>
            Scroll to an element
          </Link>
        </li>
        <li>
          <Link href='/suspense'>Streaming with Suspense</Link>
        </li>
        <li>
          <Link href='/error-handling'>Error Handling</Link>
        </li>
        <li>
          <Link href='/file-reading'>File Reading</Link>
        </li>
        <li>
          <Link href='/cookies'>Cookies</Link>
        </li>
        <li>
          <Link href='/query-parameters'>Query Parameters</Link>
        </li>
        <li>
          <Link href='/request-body'>Request Body</Link>
        </li>
        <li>
          <Link href='/use-reducer'>useReducer</Link>
        </li>
        <li>
          <Link href='/use-form-status'>useFormStatus</Link>
        </li>
        <li>
          <Link href='/preload-data'>Preload Data</Link>
        </li>
        <li>
          <Link href='/script'>Script</Link>
        </li>
      </ul>
    </>
  )
}
