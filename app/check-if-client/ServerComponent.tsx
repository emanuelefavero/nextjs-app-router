export default function ServerComponent() {
  return (
    <>
      <h2>Server Component</h2>

      {/* CHECK IF CLIENT OR SERVER */}
      {typeof window === 'undefined' ? <p>server</p> : <p>client</p>}
    </>
  )
}
