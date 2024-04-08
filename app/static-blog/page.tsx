import Link from 'next/link'
import { posts } from '@/data/posts'

export default function Page() {
  return (
    <>
      <h1>Static Blog (generateStaticParams)</h1>

      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <Link href={`/static-blog/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </>
  )
}
