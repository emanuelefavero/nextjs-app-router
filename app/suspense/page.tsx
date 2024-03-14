import { Suspense } from 'react'
import ShowUsersNameServer from '@/components/ShowUsersNameServer'
import ShowUsersNameSkeleton from '@/components/ShowUsersNameSkeleton'

export default function Page() {
  return (
    <>
      <h1>Streaming with Suspense</h1>

      <Suspense fallback={<ShowUsersNameSkeleton />}>
        <ShowUsersNameServer />
      </Suspense>
    </>
  )
}

// TIP: Streaming allows you to break down the page's HTML into smaller chunks and progressively send those chunks from the server to the client
// TIP: Suspense allows you to show a loading state while waiting for the server to send the next chunk of HTML
