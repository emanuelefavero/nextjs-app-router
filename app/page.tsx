import Link from 'next/link'
import Greet from '@/components/Greet'

type Time = {
  datetime: string
}

type Repo = {
  id: number
  full_name: string
}

// TIP: You can use different fetch strategies in the same page!

// getTime uses getServerSideProps
async function getTime() {
  const res = await fetch(
    'http://worldtimeapi.org/api/timezone/Europe/Rome',

    // TIP: If you pass this, fetch will use getServerSideProps
    {
      cache: 'no-store',
    }

    // TIP: Add this instead to use Incremental Static Regeneration (ISR)
    // {
    //   next: {
    //     revalidate: 1, // re-generate page every 1 second
    //   },
    // }
  )
  return res.json()
}

// getRepo uses getStaticProps
async function getRepo() {
  // TIP: If don't pass any options, fetch will use getStaticProps
  // TIP: Click on the url with cmd + click to open the result in the browser
  const res = await fetch('https://api.github.com/repos/vercel/next.js')
  return res.json()
}

export default async function Home() {
  const time: Time = await getTime()
  const repo: Repo = await getRepo()

  return (
    <>
      <Greet />

      <h2>USERS</h2>

      <Link href='/about'>About</Link>
      <Link href='/blog/1'>Blog 1</Link>
      <Link href='/blog/2'>Blog 2</Link>
      <Link href='/client-server-fetch'>Client Server Fetch</Link>
      <Link href='/posts'>Posts</Link>

      <p>{time.datetime}</p>

      {/* BEWARE: This result is from the github vercel api, yu could get a blank result if you exceed limit (very likely) */}
      <p>{repo.full_name}</p>

      <Link href='/repo/next.js'>Repo next.js</Link>
      <Link href='/repo/vercel'>Repo vercel</Link>
    </>
  )
}
