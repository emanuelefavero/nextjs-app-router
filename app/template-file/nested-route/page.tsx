import Link from 'next/link'

export default function Page() {
  return (
    <>
      <h1>Nested Route</h1>

      {/* Go Back */}
      <Link href='./'>Go Back</Link>
    </>
  )
}
