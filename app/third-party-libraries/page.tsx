// npm install @next/third-parties@latest next@latest
import { GoogleMapsEmbed } from '@next/third-parties/google'

export default function Page() {
  // Go to the Google Cloud console, create a new project, enable the Google
  // Maps Embed API, and create an API key. Add the API key to your
  // .env.local file
  const googleMapsEmbedApiKey = process.env.GOOGLE_MAPS_EMBED_API_KEY as string

  return (
    <>
      <h1>Third Party Libraries</h1>

      <p>
        @next/third-parties is a library that provides a collection of
        components and utilities that improve the performance and developer
        experience of loading popular third-party libraries in your Next.js
        application.
      </p>

      <h2>Google Maps Embed</h2>

      <p>Google Maps Embed is part of the @next/third-parties library</p>

      <div className='relative max-w-screen-md mx-auto'>
        <GoogleMapsEmbed
          apiKey={googleMapsEmbedApiKey}
          height={500}
          width='100%'
          mode='place'
          q='Colosseum,Rome,IT' // replace spaces with + e.g. New+York
        />
      </div>
    </>
  )
}
