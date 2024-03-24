'use client'

import { useState } from 'react'
import dynamic from 'next/dynamic'

// * The component will be loaded in a separate client bundle
const ClientComponent = dynamic(() => import('./ClientComponent'))

// * Same as above but with no server-side rendering
// const ClientComponent = dynamic(() => import('./ClientComponent'), {
//   ssr: false,
// })

// * Normal import
// import ClientComponent from './ClientComponent'

export default function Page() {
  const [show, setShow] = useState(false)

  return (
    <>
      <h1>Lazy Loading</h1>

      <button onClick={() => setShow(!show)}>Toggle Client Component</button>

      {/* With dynamic import, the component will be loaded only if the condition is met */}
      {show && <ClientComponent />}
    </>
  )
}

// // TIP: Lazy Loading allows you to defer loading of Client Components and imported libraries, and only include them in the client bundle when they're needed
// TIP: Only the client components can be lazy-loaded. Server Components are split by default
// TIP: You can also lazy load external libraries: @see https://nextjs.org/docs/app/building-your-application/optimizing/lazy-loading#loading-external-libraries
