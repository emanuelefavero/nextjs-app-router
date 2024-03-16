import Link from 'next/link'

export default function Page() {
  return (
    <>
      <h1>Static Blog Page</h1>

      <Link href='/static-blog/1'>Blog 1</Link>
      <br />
      <Link href='/static-blog/2'>Blog 2</Link>
    </>
  )
}
