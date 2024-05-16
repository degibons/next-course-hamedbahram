import { getServerSession } from 'next-auth/next'
import { authOptions } from '@/app/api/auth/_options'

const SignIn = async () => {
  const session = await getServerSession(authOptions)

  return (
    <button className="rounded border border-gray-500 px-2 py-1 text-sm text-gray-500">
      {session ? 'Sign Out' : 'Sign In'}
    </button>
  )
}

export default SignIn
