import BackButton from '@/components/BackButton'

export default function Page({ params }: { params: { slug: string[] } }) {
  return (
    <>
      <h1>Hello {params.slug.join('/')}</h1>
      <BackButton className='hover:bg-fuchsia-700'>Go Back</BackButton>
    </>
  )
}
