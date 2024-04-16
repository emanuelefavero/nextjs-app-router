import Link from 'next/link'

export default function Page() {
  return (
    <>
      <h1>Catch All Routes</h1>

      <p className='mb-2'>
        Dynamic Segments can be extended to catch-all subsequent segments by
        adding an ellipsis inside the brackets [...folderName]
      </p>

      <Link href='/catch-all-routes/one'>
        Go To: <code>/catch-all-routes/one</code>
      </Link>
      <br />
      <Link href='/catch-all-routes/one/two'>
        Go To: <code>/catch-all-routes/one/two</code>
      </Link>
      <br />
      <Link href='/catch-all-routes/one/two/three'>
        Go To: <code>/catch-all-routes/one/two/three</code>
      </Link>

      <p className='mt-2'>
        TIP: Catch-all Segments can be made optional by including the parameter
        in double square brackets: [[...folderName]]. This way, the route
        without the parameter is also matched (e.g. /catch-all-routes)
      </p>
    </>
  )
}
