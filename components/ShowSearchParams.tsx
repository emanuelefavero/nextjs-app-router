'use client'

import { useSearchParams } from 'next/navigation'

// NOTE: useSearchParams is a client-side hook, it will not work on the server

export default function ShowSearchParams() {
  const searchParams = useSearchParams()
  const name = searchParams.get('name')

  return <>{name && <p>Name: {name}</p>}</>
}
