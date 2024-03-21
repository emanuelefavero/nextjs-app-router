interface User {
  id: number
  name: string
  email: string
}

async function getUsers() {
  const res = await fetch(
    'https://jsonplaceholder.typicode.com/users?_limit=3',
    {
      next: {
        // Revalidate data every 2 seconds (only when a new request is made)
        // TIP: Every 10 seconds, the data will be revalidated (re-fetched) and the page will be re-rendered (if the data has changed)
        revalidate: 2,

        // To revalidate data at each request:
        // revalidate: 0,
      },
    }
  )
  return res.json()
}

export default async function Page() {
  const users = await getUsers()

  return (
    <>
      <h1>Revalidate</h1>

      <p>
        This page uses the `revalidate` option to revalidate the data every 2
        seconds (only when a new request is made).
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
