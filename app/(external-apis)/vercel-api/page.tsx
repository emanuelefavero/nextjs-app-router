type Repo = {
  id: number
  full_name: string
}

async function getRepo() {
  // TIP: Click on the url with cmd + click to open the result in the browser
  const res = await fetch('https://api.github.com/repos/vercel/next.js')
  return res.json()
}

export default async function Page() {
  const repo: Repo = await getRepo()

  return (
    <>
      <h1>Vercel API</h1>

      {/* BEWARE: This result is from the github vercel api, you could get a blank result if you exceed limit (very likely) */}
      <p>{repo.full_name}</p>
    </>
  )
}

// TIP: This route is located inside a (external-api) folder. This is called "route grouping" and is just meant to organize your code. It doesn't affect the route itself.
// BEWARE: Routes that include a route group should not resolve to the same URL path as other routes. For example, since route groups don't affect URL structure, (marketing)/about/page.js and (shop)/about/page.js would both resolve to /about and cause an error
