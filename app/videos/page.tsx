export default function Page() {
  // TIP: Usually, you would fetch the video URL from an API or save it in a database or CMS, AWS S3, etc...
  const videoURL = '/michael-marek-video.mp4'

  return (
    <>
      <h1>Videos</h1>

      <h2>Video Tag</h2>
      <p>
        Use the video tag to embed self hosted, locally stored videos or videos
        in the public folder. The video tag delivers more controls on the style
        of the video player
      </p>

      <video
        width='640'
        height='360'
        // controls
        loop
        autoPlay
        playsInline // autoPlay for iOS
        muted // needed for autoPlay
        // preload='none' // don't preload the video
      >
        <source src={videoURL} type='video/mp4' />
        {/* ADD SUBTITLES */}
        {/* <track
          src='/path/to/captions.vtt'
          kind='subtitles'
          srcLang='en'
          label='English'
        /> */}
        Your browser does not support the video tag.
      </video>

      <h2 className='mt-4'>iFrame</h2>
      <p>
        Use the iFrame tag to embed videos from YouTube, Vimeo, or other video
      </p>

      <div
        className='
        w-full relative flex
      '
      >
        <iframe
          width='560'
          height='315'
          src='https://www.youtube.com/embed/PavYAOpVpJI?si=0491o4i-i4Bf7vkk'
          allowFullScreen
          title='YouTube video player'
        />
      </div>
    </>
  )
}

// TIP: For advanced needs, consider third-party players like react-player or video.js, which offer accessible controls and consistent browser experience
// TIP: For iframe embeds, use React Suspense for fallbacks
// TIP: Expect lots of errors in development when using the iframe tag and you you tube. To avoid these errors use react-player instead
