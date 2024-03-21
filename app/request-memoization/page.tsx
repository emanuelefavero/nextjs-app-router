import ServerComponent from './ServerComponent'

interface User {
  id: number
  name: string
  email: string
}

async function getUsers() {
  const res = await fetch('https://jsonplaceholder.typicode.com/users?_limit=3')
  return res.json()
}

export default async function Page() {
  const users = await getUsers()

  return (
    <>
      <h1>Request Memoization</h1>
      <p>
        React extends the fetch API to automatically memoize requests that have
        the same URL and options. This means you can call a fetch function for
        the same data in multiple places in a React component tree while only
        executing it once.
      </p>
      <p className='text-emerald-500 font-bold'>
        This avoids having to pass data through component props!
      </p>

      <h2 className='text-purple-500'>Page</h2>

      {users.map((user: User) => (
        <div key={user.id}>
          <h3>{user.name}</h3>
          <p>{user.email}</p>
        </div>
      ))}

      <ServerComponent />
    </>
  )
}
