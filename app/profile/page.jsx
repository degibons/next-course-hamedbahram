import { redirect } from 'next/navigation'
import { auth } from '@/auth'

const Profile = async () => {
  const session = await auth()

  if (!session) {
    const callbackUrl = encodeURIComponent('/profile')
    redirect(`/signin?callbackUrl=${callbackUrl}&error=SessionRequired`)
  }

  return (
    <section className="py-6">
      <div className="container">
        <h1 className="text-2xl font-bold">Profile</h1>
        <h2 className="mt-4 font-medium">You are logged in as:</h2>
        <p className="mt-4">{session?.user?.name}</p>
        <p className="mt-4">{session?.user?.email}</p>
      </div>
    </section>
  )
}

export default Profile
