import BackButton from '@/components/BackButton'
import { promises as fs } from 'fs'

interface Props {
  params: {
    postFileName: string
  }
}

interface Data {
  title: string
  content: string
}

export default async function Page({ params }: Props) {
  const file = await fs.readFile(
    process.cwd() + `/data/${params.postFileName}.json`,
    'utf-8'
  )
  const data: Data = JSON.parse(file)

  return (
    <>
      <h1>{data.title}</h1>
      <p>{data.content}</p>

      <BackButton className='hover:bg-fuchsia-700'>Go Back</BackButton>
    </>
  )
}
