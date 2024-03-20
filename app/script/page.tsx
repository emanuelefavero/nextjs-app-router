'use client'

import Script from 'next/script'

export default function Page() {
  return (
    <>
      <h1 id='script-page-title'>Script Page</h1>

      <p>Check the console to see the log message from the Script</p>

      <Script
        src='/script.js' // script file in public directory
        // Optional attributes:
        onLoad={() => console.log('Script has loaded!')}
        onError={() => console.log('Script has failed to load!')}
      />
    </>
  )
}

// TIP: The Script component is used to load a script file in the browser. You can also load third-party scripts
