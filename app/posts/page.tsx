import { server } from '@/config/server'

async function getPosts() {
  // NOTE: Server components don't need to call the local api. (This will also cause an error when deploying to Vercel.). Instead, access the data directly by importing the file/exporting the data
  const res = await fetch(`${server}/api/posts`)
  return res.json()
}

export default async function Page() {
  const posts = await getPosts()

  return (
    <>
      <h1>Posts fetched with Next.js Route Handlers</h1>

      <ul>
        {posts.map((post: any) => (
          <li key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.content}</p>
          </li>
        ))}
      </ul>
    </>
  )
}
