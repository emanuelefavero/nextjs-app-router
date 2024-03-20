'use client'

import { getUsers } from '@/data/users'
import { useState, useEffect } from 'react'

type User = {
  id: number
  name: string
}

export default function ShowUsersName() {
  const [users, setUsers] = useState([])

  useEffect(() => {
    async function fetchUsers() {
      const users = await getUsers()
      setUsers(users)
    }
    fetchUsers()
  }, [])

  return (
    <div>
      <h2>USERS</h2>
      <ul>
        {users.map((user: User) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  )
}
