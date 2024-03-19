import { getUsers } from '@/data/users'

type User = {
  id: number
  name: string
}

export default async function ShowUsersNameServer() {
  const users: User[] = await getUsers()

  return (
    <>
      <ul>
        {users.map((user: User) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </>
  )
}
