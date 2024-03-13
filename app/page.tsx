import Link from 'next/link'

export default async function Home() {
  return (
    <>
      <h1>Home</h1>
      <ul>
        <li>
          <Link href='/client-component'>Client Component</Link>
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
      </ul>
    </>
  )
}
