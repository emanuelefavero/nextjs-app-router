// NOTE: Server components don't need to call the local api. (This will also cause an error when deploying to Vercel.). Instead, access the data directly by importing the file/exporting the data
import user from '@/data/user'

export default async function AboutPage() {
  return (
    <>
      <h1>This is {user.username}&apos;s About Page</h1>
    </>
  )
}
