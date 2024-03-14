'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'

export default function HomeLink() {
  const pathname = usePathname()

  return (
    <>{pathname !== '/' ? <Link href='/'>Home</Link> : <span>Home</span>}</>
  )
}
