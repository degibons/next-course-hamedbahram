import Image from 'next/image'

const BlogImage = ({ file }) => {
  const src = `/images/${file}`
  return (
    <div className="relative h-96">
      <Image
        fill
        src={src}
        alt="girl"
        className="object-cover"
        placeholder="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mN8Uw8AAl0Bbfn0s/kAAAAASUVORK5CYII="
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
    </div>
  )
}
export default BlogImage
