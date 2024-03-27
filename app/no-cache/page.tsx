import { posts } from '@/data/posts'
import { redirect } from 'next/navigation'

// * Server Action
async function newPost(formData: FormData) {
  'use server'

  const newPost = {
    id: (posts.length + 1).toString(),
    title: formData.get('title') as string,
    content: formData.get('content') as string,
  }

  posts.push(newPost)

  // TIP: Thanks to the disabled cache, we will see the new post immediately after adding it
  redirect('/no-cache')
}

// * Disable cache for this page
// export const fetchCache = 'force-no-store'

// TIP: If you want to disable cache for each fetch request, pass {cache: 'no-store' } as the second argument to the fetch function
// TIP: Sometimes we need to disable cache because fetch requests are cached by default. If we don't use fetch requests (like in this example), we don't need to disable cache

export default function Page() {
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
