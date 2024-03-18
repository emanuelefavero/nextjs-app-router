import { server } from '@/config/server'
import { redirect } from 'next/navigation'

// TIP: Fetch requests in Next.js are cached by default

async function getPosts() {
  // TIP: Opt-out of cache by using the `cache` option
  const res = await fetch(`${server}/api/posts`, { cache: 'no-store' })
  return res.json()
}

async function newPost(formData: FormData) {
  'use server'

  const res = await fetch(`${server}/api/posts`, {
    method: 'POST',
    body: JSON.stringify({
      title: formData.get('title'),
      content: formData.get('content'),
    }),
  })

  // TIP: Thanks to the `cache: 'no-store'` option, we will see the new post immediately after adding it
  redirect('/no-cache')
}

export default async function Page() {
  const posts = await getPosts()

  return (
    <>
      <h1>Revalidate Server Action</h1>

      {/* LIST POSTS */}
      <ul>
        {posts.map((post: any) => (
          <li key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.content}</p>
          </li>
        ))}
      </ul>

      {/* ADD NEW POST */}
      <h2>Add New Post</h2>
      <form action={newPost}>
        <div className='flex flex-col max-w-screen-sm mb-2'>
          <input
            type='text'
            name='title'
            placeholder='Title'
            className='mb-2'
          />
          <textarea name='content' placeholder='Content' />
        </div>
        <button type='submit'>Add Post</button>
      </form>
    </>
  )
}
