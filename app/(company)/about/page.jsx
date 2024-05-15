import RefreshButton from '@/app/components/ui/RefreshButton'
import ContactButton from '@/components/ui/ContactButton'
import wait from '@/lib/wait'

export const dynamic = 'force-dynamic'

const page = async () => {
  await wait(1000)
  return (
    <>
      <h1>About {Math.random()}</h1>
      <div className="mt-6">
        <ContactButton />
      </div>
      <div className="mt-6">
        <RefreshButton />
      </div>
    </>
  )
}
export default page
