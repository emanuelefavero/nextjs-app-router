import { posts } from '@/data/posts'

// Serve local data with Next.js Route Handlers
export async function GET() {
  return Response.json(posts)
}

// Add a new post with post title, content, id (the id is just the index of the new post in the array + 1)
export async function POST(request: Request) {
  const data = await request.json()
  const newPost = {
    id: (posts.length + 1).toString(),
    title: data.title,
    content: data.content,
  }

  posts.push(newPost)

  return Response.json(newPost)
}
