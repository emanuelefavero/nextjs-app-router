import { server } from '@/config/server'

type User = {
  username: string
}

async function getUser() {
  // TIP: Relative urls don't work in server components
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
