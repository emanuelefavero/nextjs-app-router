export default function Page() {
  return (
    <>
      <h1>Vitest Unit Testing</h1>

      <p>
        You can use either Vitest or Jest for unit tests in Next.js. Vitest is
        easier to setup and has the same syntax of Jest.
      </p>

      <p>
        Check{' '}
        <span className='text-amber-500'>
          {'/vitest-unit-testing'}/page.test.tsx
        </span>{' '}
        to see the test for this page
      </p>
    </>
  )
}
