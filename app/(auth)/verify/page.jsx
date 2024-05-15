import { getServerSession } from 'next-auth/next'
import { authOptions } from '@/app/api/auth/_options'
import { redirect } from 'next/navigation'

export const dynamic = 'force-dynamic'

const page = async () => {
  const session = await getServerSession(authOptions)

  if (session) {
    redirect('/')
  }

  return (
    <div className="flex items-center justify-center">
      <div className="z-10 w-full max-w-md overflow-hidden rounded-2xl border border-gray-100 shadow-xl">
        <div className="flex flex-col items-center justify-center space-y-3 bg-white px-4 py-6 pt-8 text-center sm:px-16">
          <h3 className="text-xl font-semibold">Проверьте почту</h3>
          <p className="text-sm text-gray-500">
            На указанный вами емейл отправлено сообщение. Перейдите по ссылке в
            письме для авторизации.
          </p>
        </div>
      </div>
    </div>
  )
}
export default page
