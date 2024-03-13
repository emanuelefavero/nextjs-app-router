type Props = {
  params: {
    id: string
  }
}

type Post = {
  title: string
  body: string
}

async function getPost(id: string) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
  return res.json()
}

export default async function page({ params }: Props) {
  const post: Post = await getPost(params.id)

  return (
    <>
      <h1>Blog {params.id}</h1>
      <h3>{post.title}</h3>
      <p>{post.body}</p>
    </>
  )
}
