import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  // TIP: You can use if statements to apply different middleware based on conditions
  if (request.nextUrl.pathname === '/middleware') {
    // * Set Cookies
    const response = NextResponse.next()
    response.cookies.set('username', 'John')

    // Get Cookies and log
    // const newCookie = response.cookies.get('username')
    // console.log('New cookie set:', newCookie)

    // * Set Headers
    response.headers.set('x-my-custom-header', 'Hello')

    return response
  }

  // * Redirect
  if (request.nextUrl.pathname === '/middleware/redirect') {
    return NextResponse.redirect(new URL('/', request.url))
  }
}

// TIP: You can also use `matching paths` to apply middleware to specific pages:
// export const config = {
//   matcher: ['/middleware/redirect'],
// }
