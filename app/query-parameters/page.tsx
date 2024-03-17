'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function Page() {
  const [query, setQuery] = useState('')

  return (
    <>
      <h1>Query Parameters Page</h1>

      <p>Send Query Parameter to API</p>

      <input
        type='text'
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder='Query'
      />
      <Link href={`/api/query-parameters?query=${query}`} className='ml-2'>
        Send
      </Link>
    </>
  )
}
