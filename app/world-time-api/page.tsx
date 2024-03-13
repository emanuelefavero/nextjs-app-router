type Time = {
  datetime: string
}

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

export default async function Page() {
  const time: Time = await getTime()

  return (
    <>
      <h1>World Time API</h1>
      <p>{time.datetime}</p>
    </>
  )
}
