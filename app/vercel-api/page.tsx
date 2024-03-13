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
