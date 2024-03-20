import ClientComponent from './components/ClientComponent'

export default function Page() {
  return (
    <>
      <h1>Context</h1>

      <p>
        This page shows how to import React Context variables in Client
        Components without having to convert Server Components to client
      </p>

      <ClientComponent />

      {/* CHECK IF CLIENT OR SERVER */}
      {/* {typeof window === 'undefined' ? <p>server</p> : <p>client</p>} */}
    </>
  )
}
