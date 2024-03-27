import { server } from '@/config/server'

type User = {
  username: string
}

async function getUser() {
  // TIP: Relative urls don't work in server components
  // NOTE: Server components don't need to call the local api. (This will also cause an error when deploying to Vercel.). Instead, access the data directly by importing the file/exporting the data
  const res = await fetch(`${server}/api/user`)
  return res.json()
}

export default async function AboutPage() {
  const user: User = await getUser()

  return (
    <>
      <h1>This is {user.username}&apos;s About Page</h1>
    </>
  )
}
