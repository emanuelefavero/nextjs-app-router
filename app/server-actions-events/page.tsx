'use client'

import { useState } from 'react'
import { incrementLike } from '@/app/actions'

export default function Page() {
  const [likes, setLikes] = useState(99)
  const [liked, setLiked] = useState(false)

  return (
    <>
      <h1>Server Actions in Event Handlers</h1>

      <p>
        Server Actions can also be called in event handlers {'('}e.g. onClick
        {')'} and useEffect
      </p>

      <button
        disabled={liked}
        onClick={async () => {
          const newLikes = await incrementLike(likes)
          setLikes(newLikes)
          setLiked(true)
        }}
      >
        Increment Likes
      </button>

      <p className='mt-2'>Likes: {likes}</p>
    </>
  )
}

// TIP: You can pass additional arguments to a Server Action using the JavaScript bind method
// @see https://nextjs.org/docs/app/building-your-application/data-fetching/server-actions-and-mutations#passing-additional-arguments
// TIP: To improve the user experience, use useOptimistic and useTransition to update the UI before the Server Action finishes executing on the server
