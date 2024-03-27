// NOTE: Server components don't need to call the local api when working with data stored on the server. (This will also cause an error when deploying to Vercel.). Instead, access the data directly by importing the file/exporting the data
import { posts } from '@/data/posts'

export default async function Page() {
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
