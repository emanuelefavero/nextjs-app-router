'use client'

import { useSearchParams, useRouter, usePathname } from 'next/navigation'
import { Suspense } from 'react'

const PRODUCTS = ['iPhone', 'iPad', 'MacBook', 'AirPods', 'Apple Watch']

function SearchProducts() {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()

  // Get the search parameter from the URL
  const search = searchParams.get('search') || ''

  const filteredProducts = PRODUCTS.filter((product) => {
    return product.toLowerCase().includes(search.toLowerCase())
  })

  return (
    <>
      {/* SEARCH INPUT */}
      <input
        id='search'
        type='search'
        placeholder='Search product...'
        value={search}
        onChange={(e) => {
          // if search is empty, remove search param from url
          e.target.value === ''
            ? router.push(pathname)
            : router.replace(`${pathname}?search=${e.target.value}`)
        }}
      />

      {/* PRODUCTS */}
      {filteredProducts.length > 0 ? (
        <ul>
          {filteredProducts.map((product) => (
            <li key={product}>{product}</li>
          ))}
        </ul>
      ) : (
        <p>No products found</p>
      )}
    </>
  )
}

export default function Page() {
  return (
    <>
      <h1>URL State</h1>

      <p>
        TIP: We can use the URL to manage state in Client Components instead of
        useState! One of the advantages other than don&apos;t need to use
        useState anymore is that the state is maintained even if the user
        refreshes the page or goes back and forth in the browser history
      </p>

      <Suspense>
        <SearchProducts />
      </Suspense>
    </>
  )
}
