import Image from 'next/image'
import nightSkyPic from './night-sky.webp'

export default function page() {
  return (
    <div className='flex flex-col items-center'>
      <h1>Images</h1>

      <div className='max-w-xl'>
        <Image src={nightSkyPic} alt='Night Sky' className='mx-auto' />
      </div>
    </div>
  )
}

// TIP: Images imported this way (from local server) are optimized by default and don't need the width and height attributes
// TIP: Use the priority attribute in the image that is the "Largest Contentful Paint Element" (the first image that appears on the screen and the largest and most important one)
// TIP: You can also put external urls in the src attribute or even the public folder with (e.g. '/night-sky.webp')
// TIP: To expand the image to its parent element use the fill attribute or objectFit attribute with 'fill', 'contain' or 'cover' and objectPosition to position the image (e.g. 'objectFit: 'cover', objectPosition: 'center'). If those don't work, you can still use the <img> tag instead of the Image component
// TIP: You could also style the image with:
/*
style={{
  width: '100%',
  height: 'auto',
}}
*/
