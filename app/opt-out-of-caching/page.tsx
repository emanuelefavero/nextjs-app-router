interface User {
  id: number
  name: string
  email: string
}

async function getUsers() {
  const res = await fetch(
    'https://jsonplaceholder.typicode.com/users?_limit=3',
    {
      // * Opt out of caching for an individual fetch request
      cache: 'no-store',
    }
  )
  return res.json()
}

// * Opt out of caching for all data requests in the route segment
export const dynamic = 'force-dynamic'

export default async function Page() {
  const users = await getUsers()

  return (
    <>
      <h1>Opt out of caching</h1>

      <p>
        This page uses the `cache` option to opt out of caching for an
        individual fetch request and the `dynamic` option to opt out of caching
        for all data requests in this route
      </p>

      {users.map((user: User) => (
        <div key={user.id}>
          <h2>{user.name}</h2>
          <p>{user.email}</p>
        </div>
      ))}
    </>
  )
}
