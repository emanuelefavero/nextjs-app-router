export default function Page() {
  // TIP: Usually, you would fetch the video URL from an API or save it in a database or CMS, AWS S3, etc...
  const videoURL = '/michael-marek-video.mp4'

  return (
    <>
      <h1>Videos</h1>

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
    </>
  )
}

// TIP: For advanced needs, consider third-party players like react-player or video.js, which offer accessible controls and consistent browser experience
