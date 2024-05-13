import { fetchData } from '@/app/photos/page'
import Modal from '@/components/ui/PhotoModal'
import PhotoCard from '@/components/ui/PhotoCard'

export default async function PhotoModal({ params: { id } }) {
  const photos = await fetchData()
  const photo = photos.find(p => p.id === id - 0)

  return (
    <Modal>
      <PhotoCard photo={photo} />
    </Modal>
  )
}
