import Link from 'next/link'

export default async function Home() {
  const categories = [
    {
      title: 'Server and Client Interactions',
      links: [
        { href: '/server-actions', text: 'Server Actions' },
        { href: '/server-actions-events', text: 'Server Actions in Events' },
        { href: '/server-component', text: 'Server Component' },
        { href: '/client-server-fetch', text: 'Client Server Fetch' },
        { href: '/client-component', text: 'Client Component' },
      ],
    },
    {
      title: 'Routing and Navigation',
      links: [
        { href: '/search-parameters', text: 'Search Parameters' },
        { href: '/use-search-params', text: 'useSearchParams' },
        { href: '/use-pathname', text: 'usePathname' },
        { href: '/nested-routes/nested-route', text: 'Nested Routes' },
        { href: '/url-state', text: 'URL State' },
        { href: '/redirect', text: 'Redirect' },
        { href: '/this-will-not-be-found', text: 'Not Found' },
        { href: '/use-router', text: 'useRouter' },
        { href: '/query-parameters', text: 'Query Parameters' },
        {
          href: '/scroll-to-an-element#myElement',
          text: 'Scroll to an Element',
        },
        { href: '/parallel-routes', text: 'Parallel Routes' },
      ],
    },
    {
      title: 'State Management and Data Fetching',
      links: [
        { href: '/context', text: 'Context' },
        { href: '/use-reducer', text: 'useReducer' },
        { href: '/use-form-status', text: 'useFormStatus' },
        { href: '/preload-data', text: 'Preload Data' },
        { href: '/no-cache', text: 'No Cache' },
        { href: '/cookies', text: 'Cookies' },
        { href: '/request-body', text: 'Request Body' },
      ],
    },
    {
      title: 'APIs and External Data',
      links: [
        { href: '/world-time-api', text: 'World Time API' },
        { href: '/vercel-api', text: 'Vercel API' },
        { href: '/repo/next.js', text: 'Repo next.js' },
        { href: '/repo/vercel', text: 'Repo vercel' },
      ],
    },
    {
      title: 'Advanced Features and Best Practices',
      links: [
        { href: '/suspense', text: 'Streaming with Suspense' },
        { href: '/error-handling', text: 'Error Handling' },
        { href: '/file-reading', text: 'File Reading' },
        { href: '/script', text: 'Script' },
        { href: '/check-if-client', text: 'Check if Client Component' },
        { href: '/static-blog', text: 'Static Blog' },
        { href: '/posts', text: 'Posts' },
      ],
    },
    {
      title: 'General Topics and Examples',
      links: [
        { href: '/about', text: 'About' },
        { href: '/blog/1', text: 'Blog 1' },
        { href: '/blog/2', text: 'Blog 2' },
        { href: '/template-file', text: 'Template File' },
        { href: '/back-button', text: 'Back Button' },
      ],
    },
  ]

  return (
    <>
      <h1>Home</h1>

      {categories.map((category, categoryIndex) => (
        <div key={categoryIndex}>
          <h2>{category.title}</h2>
          <ul>
            {category.links.map((link, linkIndex) => (
              <li key={linkIndex}>
                <Link href={link.href}>{link.text}</Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </>
  )
}
