import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const response = NextResponse.next()

  // Force headers para prevenir dark mode
  response.headers.set('Content-Security-Policy', "style-src 'self' 'unsafe-inline'")
  response.headers.set('X-Content-Type-Options', 'nosniff')
  response.headers.set('X-Frame-Options', 'SAMEORIGIN')
  
  return response
}

export const config = {
  matcher: '/:path*',
}