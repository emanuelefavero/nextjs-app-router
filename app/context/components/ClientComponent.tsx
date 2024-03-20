'use client'

import { useContext } from 'react'
import { UserContext } from '@/context/UserProvider'

export default function ClientComponent() {
  const { user, setUser } = useContext(UserContext)

  return (
    <>
      <p className='text-green-500'>User: {user.name}</p>
      <button
        onClick={() =>
          setUser({ name: user.name === 'John' ? 'Jane' : 'John' })
        }
      >
        Change User
      </button>
    </>
  )
}
