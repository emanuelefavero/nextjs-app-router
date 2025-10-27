'use client'

import { useRouter } from 'next/navigation'

export default function Login() {
  const router = useRouter()

  const handleLogin = async () => {
    const res = await fetch('/api/cookies', {
      method: 'POST',
      credentials: 'include',
    })

    const data = await res.json()
    console.log(data.message)

    router.refresh()
  }

  return <button onClick={handleLogin}>Log In</button>
}
