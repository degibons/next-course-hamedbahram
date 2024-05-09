export function withMiddleware1(middleware) {
  return async (request, event) => {
    const { pathname } = request.nextUrl
    console.log('middleware1 => ', { pathname })

    return middleware(request, event)
  }
}
