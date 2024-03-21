async function getUsers() {
  const res = await fetch('https://jsonplaceholder.typicode.com/users?_limit=3')
  return res.json()
}

export default async function ServerComponent() {
  // this fetch request will be memoized, since it's the same URL and options in a Server Component
  const users = await getUsers()

  return (
    <>
      <h2 className='text-purple-500'>Server Component</h2>

      {users.map((user: any) => (
        <div key={user.id}>
          <h3>{user.name}</h3>
          <p>{user.email}</p>
        </div>
      ))}
    </>
  )
}

// TIP: In a real application is still better to put the fetch request in a separate file and import it in the component
