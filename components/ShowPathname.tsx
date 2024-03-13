'use client'

import { usePathname } from 'next/navigation'

export default function ShowPathname() {
  const pathname = usePathname()

  return (
    <>
      <p>This is the name of the current relative URL:</p>
      <p>{pathname}</p>
    </>
  )
}
