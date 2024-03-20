'use client'

export default function ClientComponent() {
  return (
    <>
      <h2>Client Component</h2>

      {/* CHECK IF CLIENT OR SERVER */}
      {typeof window === 'undefined' ? <p>server</p> : <p>client</p>}
    </>
  )
}
