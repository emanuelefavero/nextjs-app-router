import { Suspense } from 'react'
import { headers } from 'next/headers'

// Read the IP address using the headers function
function IP() {
  const FALLBACK_IP_ADDRESS = '0.0.0.0'
  const forwardedFor = headers().get('x-forwarded-for')

  if (forwardedFor) {
    return forwardedFor.split(',')[0] ?? FALLBACK_IP_ADDRESS
  }

  return headers().get('x-real-ip') ?? FALLBACK_IP_ADDRESS
}

export default function Page() {
  const headersList = headers()
  const referer = headersList.get('referer')

  return (
    <>
      <h1>Headers</h1>

      <p>
        The <span className='text-amber-500'>headers</span> function allows you
        to read the HTTP incoming request headers from a Server Component
      </p>

      <div className='text-emerald-500'>Referer: {referer}</div>

      <h2>Read IP Address using the headers function</h2>
      <Suspense fallback={null}>
        <IP />
      </Suspense>
    </>
  )
}
