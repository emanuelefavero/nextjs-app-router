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
