import Link from 'next/link'

export default function Page() {
  const pStyle = 'mb-2'

  return (
    <>
      <h1>Vitest Unit Testing</h1>

      <p className={pStyle}>
        You can use either Vitest or Jest for unit tests in Next.js. Vitest is
        easier to setup and has the same syntax of Jest.
      </p>

      <p className={pStyle}>
        Check{' '}
        <Link href='https://nextjs.org/docs/app/building-your-application/testing/vitest'>
          Next.js Vitest Documentation
        </Link>{' '}
        to see how to setup and run Vitest tests in Next.js
      </p>

      <p className={pStyle}>
        Check{' '}
        <span className='text-amber-500'>
          {'/vitest-unit-testing'}/page.test.tsx
        </span>{' '}
        to see the test for this page
      </p>
    </>
  )
}
