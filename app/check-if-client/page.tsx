import ClientComponent from './ClientComponent'
import ServerComponent from './ServerComponent'

export default function Page() {
  return (
    <>
      <h1>Check If Client</h1>

      <p>
        To check if a component is a client component or server component you
        can use:{' '}
        <span className='text-yellow-500'>
          typeof window === {"'"}undefined{"'"}
        </span>
      </p>

      <ServerComponent />
      <ClientComponent />
    </>
  )
}
