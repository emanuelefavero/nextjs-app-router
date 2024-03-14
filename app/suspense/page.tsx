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
