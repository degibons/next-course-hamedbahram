import Google from 'next-auth/providers/google'
import Email from 'next-auth/providers/email'
import { PrismaAdapter } from '@auth/prisma-adapter'
import prisma from '@/lib/prisma'
import sendVerificationRequest from './sendVerificationRequest'

export const authOptions = {
  providers: [
    Google({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET
    }),
    Email({
      // server: process.env.EMAIL_SERVER,
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
    })
  ],
  adapter: PrismaAdapter(prisma),
  pages: {
    signIn: '/signin',
    verifyRequest: '/verify'
  }
  // events: {
  //   async session(data) {
  //     console.log('session', data)
  //   }
  // }
}
