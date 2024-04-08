import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  // TIP: You can use if statements to apply different middleware based on conditions
  if (request.nextUrl.pathname === '/middleware/redirect') {
    return NextResponse.redirect(new URL('/', request.url))
  }
}

// TIP: You can also use `matching paths` to apply middleware to specific pages:
// export const config = {
//   matcher: ['/middleware/redirect'],
// }
