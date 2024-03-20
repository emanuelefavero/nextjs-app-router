'use client'

import { createContext, useState } from 'react'

export const UserContext = createContext({
  user: { name: 'John' },
  setUser: (user: { name: string }) => {},
})

export default function UserProvider({
  children,
}: {
  children: React.ReactNode
}) {
  const [user, setUser] = useState({ name: 'John' })

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  )
}
