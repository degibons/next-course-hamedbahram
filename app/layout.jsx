import { Roboto_Flex } from 'next/font/google'
import { Roboto_Serif } from 'next/font/google'
import './globals.css'
import Header from '@/app/components/layout/Header'
import Footer from '@/app/components/layout/Footer'
import Providers from './providers'

const robotoFlex = Roboto_Flex({
  subsets: ['cyrillic']
})

const robotoSerif = Roboto_Serif({
  subsets: ['cyrillic'],
  variable: '--font-roboto-serif'
})

export const metadata = {
  title: 'Next App',
  description: 'Generated by create next app'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${robotoFlex.className} ${robotoSerif.variable}`}>
        <Providers>
          <Header />
          <main className="container py-6">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  )
}
