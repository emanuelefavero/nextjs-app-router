'use client'

import { useRouter } from 'next/navigation'

export default function Logout() {
  const router = useRouter()

  const handleLogout = async () => {
    const res = await fetch('/api/cookies', {
      method: 'DELETE',
      credentials: 'include',
    })

    const data = await res.json()
    console.log(data.message)

    router.refresh()
  }

  return <button onClick={handleLogout}>Log Out</button>
}
