type Repo = {
  full_name: string
}

type Params = {
  name: string
}

type Props = {
  params: Params
}

// TIP: generateMetadata is a nextjs built in function to generate DYNAMIC metadata
export async function generateMetadata({ params }: Props) {
  const repo: Repo = await getRepo(params.name)
  return {
    title: repo.full_name,
  }
}

async function getRepo(name: string) {
  const res = await fetch(`https://api.github.com/repos/vercel/${name}`)
  return res.json()
}

export default async function RepoDetailPage({ params }: Props) {
  const repo: Repo = await getRepo(params.name)
  return <h1>{repo.full_name}</h1>
}
