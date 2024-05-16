'use client'

import { signIn, signOut, useSession } from 'next-auth/react'

const SignIn = ({ children }) => {
  const { data: session } = useSession()

  return (
    <div className="flex" onClick={() => (session ? signOut() : signIn())}>
      {children}
    </div>
  )
}

export default SignIn
