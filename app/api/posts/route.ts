import { posts } from '@/data/posts'

// Serve local data with Next.js Route Handlers
export async function GET() {
  return Response.json(posts)
}
