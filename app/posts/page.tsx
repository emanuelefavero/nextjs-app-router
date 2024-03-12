async function getPosts() {
  const res = await fetch('http://localhost:3000/api/posts')
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
