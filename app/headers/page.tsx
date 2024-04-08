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

  const languageHeader = headers().get('accept-language')

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

      <h2>Get header values directly</h2>

      <h3>Accept-Language header</h3>

      <p>
        The <span className='text-amber-500'>Accept-Language</span> header
        specifies the preferred language of the user
      </p>

      {languageHeader && (
        <>
          <p className='text-emerald-500'>
            Accept-Language header: {languageHeader}
          </p>
          <p>
            TIP: The <span className='text-amber-500'>q</span> factor indicates
            the relative degree of preference for that language.
          </p>
        </>
      )}
    </>
  )
}
