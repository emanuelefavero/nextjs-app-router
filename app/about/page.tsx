type User = {
  username: string
}

async function getUser() {
  const res = await fetch('http://localhost:3000/api/user')
  return res.json()
}

export default async function AboutPage() {
  const user: User = await getUser()
  return <div>AboutPage, {user.username}</div>
}
