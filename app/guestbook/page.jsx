import { getGuestbookEntries } from '@/lib/guestbook'
import GuestbookEntryForm from '@/components/ui/GuestbookEntryForm'

export const dynamic = 'force-dynamic'

async function getData() {
  const { entries, error } = await getGuestbookEntries()

  if (!entries || error) {
    throw new Error('Failed to fetch entries')
  }

  return entries
}

const Page = async () => {
  const entries = await getData()

  return (
    <section>
      <h1 className="mb-8 text-3xl font-bold">Guestbook</h1>

      <GuestbookEntryForm />

      <ul className="mt-8 flex flex-col gap-y-2">
        {entries.map(entry => (
          <li key={entry.id} className="flex gap-x-3">
            <span className="text-gray-500">{entry.name}:</span>
            <span>{entry.message}</span>
          </li>
        ))}
      </ul>
    </section>
  )
}
export default Page
