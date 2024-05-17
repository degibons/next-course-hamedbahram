import NextAuth from 'next-auth'
import Google from 'next-auth/providers/google'

const { auth } = NextAuth({
  providers: [Google],
  pages: {
    signIn: '/signin'
  }
})

export default auth(req => {
  if (!req.auth) {
    console.log('unauthorized')
  } else {
    console.log('authorized')
  }
})

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)']
}
