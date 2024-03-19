import User, { preload } from '@/components/User'

export default function Page() {
  const id = 1

  // Preload the data for the User component
  preload(id)

  // HERE you can perform other async actions, like fetching other data

  return (
    <>
      <h1>Preload Data</h1>

      <User id={id} />
    </>
  )
}
