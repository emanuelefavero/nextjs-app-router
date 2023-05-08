// TIP: By default nextjs components are server components. If you want to use client side code such as useEffect, you need to add 'use client' at the top of the file
'use client'

import { useState, useEffect } from 'react'

export default function Greet() {
  const [greet, setGreet] = useState('')

  useEffect(() => {
    setGreet('Hello')
  }, [])

  return <h1>{greet}</h1>
}
