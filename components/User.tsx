import { getUser } from '@/data/users'

export const preload = (id: number) => {
  // void evaluates the given expression and returns undefined
  void getUser(id)
}

export default async function User({ id }: { id: number }) {
  const result = await getUser(id)

  return (
    <>
      <h1>User</h1>
      <p>{result.name}</p>
      <p>{result.email}</p>
    </>
  )
}
