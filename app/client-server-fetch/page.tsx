import { getUsers } from '@/data/users'
import ShowUsersNames from '@/components/ShowUsersNames'

type User = {
  id: number
  name: string
}

export default async function ClientServerFetch() {
  const users: User[] = await getUsers()

  return (
    <>
      {/* TIP: Fetching data from server is only allowed on page components like this one */}
      <h2 className='text-xl font-bold'>Users data fetched from server</h2>
      <ul>
        {users.map((user: User) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>

      {/* TIP: Fetching data from client is allowed on any component that has 'use client' */}
      <h2 className='text-xl font-bold'>Users data fetched from client</h2>
      <ShowUsersNames />
    </>
  )
}
