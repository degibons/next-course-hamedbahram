import PhotoCard from '@/components/ui/PhotoCard'
import { fetchData } from '../page'
import NavLink from '@/app/components/ui/NavLink'

export default async function PhotoPage({ params: { id } }) {
  const photos = await fetchData()
  const photo = photos.find(p => p.id === id - 0)

  return (
    <section className="py-6">
      <div className="container">
        <div>
          <NavLink href="/photos">Back to photos</NavLink>
        </div>

        <div className="mt-10 w-1/3">
          <PhotoCard photo={photo} />
        </div>
      </div>
    </section>
  )
}
