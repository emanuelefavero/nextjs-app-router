import { posts } from '@/data/posts'

// * generateStaticParams statically generates routes at build time instead of on-demand at request time
export async function generateStaticParams() {
  return posts.map((post) => ({
    id: post.id,
  }))
}

// * We can then use the id from the params to fetch the specific post
export default async function Page({ params }: { params: { id: string } }) {
  const { id } = params

  const post = posts.find((post) => post.id === id) // fetch also works

  return (
    <>
      <h1>Blog {id}</h1>
      <h3>{post?.title}</h3>
      <p>{post?.content}</p>
    </>
  )
}
