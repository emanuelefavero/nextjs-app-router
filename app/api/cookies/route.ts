import { cookies } from 'next/headers'

export type SessionResponse =
  | { signedIn: false }
  | { signedIn: true; session: string }

// Check if 'session' cookie exists
export async function GET(): Promise<Response> {
  const cookieStore = cookies()
  const session = cookieStore.get('session')

  if (!session) {
    const sessionResponse: SessionResponse = { signedIn: false }
    return Response.json(sessionResponse)
  }

  const sessionResponse: SessionResponse = {
    signedIn: true,
    session: session.value,
  }

  return Response.json(sessionResponse)
}

// Create a cookie named 'session'
export async function POST() {
  const cookieStore = cookies()

  cookieStore.set({
    name: 'session',
    value: 'user123', // User identifier
    httpOnly: true,
    secure: true,
    sameSite: 'lax',
    path: '/cookies/route-handler-cookies',
    maxAge: 60 * 60 * 24 * 7, // 1 week
  })

  return Response.json({ message: 'Session Cookie set' })
}

// Delete the 'session' cookie
export async function DELETE() {
  const cookieStore = cookies()

  cookieStore.set({
    name: 'session',
    value: '',
    httpOnly: true,
    secure: true,
    sameSite: 'lax',
    path: '/cookies/route-handler-cookies',
    maxAge: 0,
  })

  return Response.json({ message: 'Session Cookie deleted' })
}
