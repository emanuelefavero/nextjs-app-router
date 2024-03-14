'use client'

// TIP: The useRouter hook allows you to programmatically change routes from Client Components

import { useRouter } from 'next/navigation'

export default function Page() {
  const router = useRouter()

  return <button onClick={() => router.push('/')}>Go Home</button>
}
