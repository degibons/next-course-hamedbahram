import ContactButton from '@/components/ui/ContactButton'
import { wait } from '@/lib/posts'

const page = async () => {
  await wait(1000)
  return (
    <>
      <h1>About</h1>
      <div className="mt-6">
        <ContactButton />
      </div>
    </>
  )
}
export default page
