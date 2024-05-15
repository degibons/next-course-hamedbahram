import { chain } from './middleware/chain'
import { withMiddleware1 } from './middleware/middleware1'
import { withMiddleware2 } from './middleware/middleware2'

const middlewares = [withMiddleware1, withMiddleware2]
export default chain(middlewares)

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)'
  ]
}
