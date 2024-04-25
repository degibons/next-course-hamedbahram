import ContactButton from '@/components/ui/ContactButton'

async function getData() {
  return new Promise((resolve, reject) =>
    setTimeout(() => {
      const random = Math.random()
      if (random > 0.3) {
        reject('Failed to get data')
      }

      resolve()
    }, 1000)
  )
}

const page = async () => {
  await getData()

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
