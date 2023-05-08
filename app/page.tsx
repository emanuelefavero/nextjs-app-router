import Link from 'next/link'

type Time = {
  datetime: string
}

type Repo = {
  id: number
  name: string
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
  const res = await fetch('https://api.github.com/repos/vercel/next.js')
  return res.json()
}

export default async function Home() {
  const time: Time = await getTime()
  const repo: Repo = await getRepo()

  return (
    <>
      <h1>Hello</h1>
      <Link href='/about'>About</Link>
      <Link href='/blog/1'>Blog 1</Link>

      <p>{time.datetime}</p>
      <p>{repo.name}</p>

      <Link href='/repo/next.js'>Repo next.js</Link>
      <Link href='/repo/vercel'>Repo vercel</Link>
    </>
  )
}
