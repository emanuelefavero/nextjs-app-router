import Link from 'next/link'

export default function Page() {
  const pStyle = 'mb-2'

  return (
    <>
      <h1>Playwright E2E Testing</h1>

      <p className={pStyle}>
        You can use either Playwright or Cypress for E2E testing in Next.js.
        Playwright is easier to setup.
      </p>

      <p className={pStyle}>
        Check{' '}
        <Link href='https://nextjs.org/docs/app/building-your-application/testing/playwright'>
          Next.js Playwright Documentation
        </Link>{' '}
        to see how to setup and run Playwright tests in Next.js
      </p>

      <p className={pStyle}>
        Check{' '}
        <span className='text-amber-500'>
          {'e2e/example.spec.ts'}/page.test.tsx
        </span>{' '}
        to see the E2E test for this page
      </p>

      <Link href='/playwright-e2e-testing/hello'>Hello</Link>
    </>
  )
}
