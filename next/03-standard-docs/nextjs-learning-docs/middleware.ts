import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  if (request.nextUrl.pathname.startsWith("/about")) {
    return NextResponse.rewrite(new URL("/about-2", request.url));
  }

  if (request.nextUrl.pathname.startsWith("/dashboard")) {
    return NextResponse.rewrite(new URL("/dashboard/user", request.url));
  }
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: "/about/:path*",
};

// ⬇️ USING COOKIES

// export function middleware(request: NextRequest) {
//   // Assume a "Cookie:nextjs=fast" header to be present on the incoming request
//   // Getting cookies from the request using the `RequestCookies` API
//   let cookie = request.cookies.get('nextjs')?.value
//   console.log(cookie) // => 'fast'
//   const allCookies = request.cookies.getAll()
//   console.log(allCookies) // => [{ name: 'nextjs', value: 'fast' }]

//   request.cookies.has('nextjs') // => true
//   request.cookies.delete('nextjs')
//   request.cookies.has('nextjs') // => false

//   // Setting cookies on the response using the `ResponseCookies` API
//   const response = NextResponse.next()
//   response.cookies.set('vercel', 'fast')
//   response.cookies.set({
//     name: 'vercel',
//     value: 'fast',
//     path: '/test',
//   })
//   cookie = response.cookies.get('vercel')
//   console.log(cookie) // => { name: 'vercel', value: 'fast', Path: '/test' }
//   // The outgoing response will have a `Set-Cookie:vercel=fast;path=/test` header.

//   return response
// }

// ⬇️ SETTING HEADERS

// export function middleware(request: NextRequest) {
//   // Clone the request headers and set a new header `x-hello-from-middleware1`
//   const requestHeaders = new Headers(request.headers)
//   requestHeaders.set('x-hello-from-middleware1', 'hello')

//   // You can also set request headers in NextResponse.rewrite
//   const response = NextResponse.next({
//     request: {
//       // New request headers
//       headers: requestHeaders,
//     },
//   })

//   // Set a new response header `x-hello-from-middleware2`
//   response.headers.set('x-hello-from-middleware2', 'hello')
//   return response
// }

// ⬇️ PRODUCING A RESPONSE

// import { isAuthenticated } from '@lib/auth'

// // Limit the middleware to paths starting with `/api/`
// export const config = {
//   matcher: '/api/:function*',
// }

// export function middleware(request: NextRequest) {
//   // Call our authentication function to check the request
//   if (!isAuthenticated(request)) {
//     // Respond with JSON indicating an error message
//     return new NextResponse(
//       JSON.stringify({ success: false, message: 'authentication failed' }),
//       { status: 401, headers: { 'content-type': 'application/json' } }
//     )
//   }
// }
