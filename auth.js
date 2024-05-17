import NextAuth from 'next-auth'
import Google from 'next-auth/providers/google'
// import Nodemailer from 'next-auth/providers/nodemailer'
import { PrismaAdapter } from '@auth/prisma-adapter'
import prisma from '@/lib/prisma'
import sendVerificationRequest from '@/lib/sendVerificationRequest'

export const { auth, handlers, signIn, signOut } = NextAuth({
  providers: [
    Google({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET
    }),
    {
      id: 'http-email',
      type: 'email',
      server: {
        host: process.env.EMAIL_SERVER_HOST,
        port: process.env.EMAIL_SERVER_PORT,
        auth: {
          user: process.env.EMAIL_SERVER_USER,
          pass: process.env.EMAIL_SERVER_PASSWORD
        }
      },
      from: process.env.EMAIL_FROM,
      sendVerificationRequest
    }
  ],
  adapter: PrismaAdapter(prisma),
  pages: {
    signIn: '/signin',
    verifyRequest: '/verify'
  },
  session: { strategy: 'jwt' }
})
