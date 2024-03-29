import Link from 'next/link'
import mdxPosts from '@/data/mdxPosts'

export default function Page() {
  return (
    <>
      <h1>MDX Blog</h1>

      {mdxPosts.map((post, postIndex) => (
        <div key={postIndex}>
          <h2>{post.category}</h2>
          <ul>
            {post.links.map((link, linkIndex) => (
              <li key={linkIndex}>
                <Link href={`mdx-blog/${link.href}`}>{link.text}</Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </>
  )
}
