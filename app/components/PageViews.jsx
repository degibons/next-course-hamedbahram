import wait from '@/lib/wait'

const PageViews = async ({ slug }) => {
  await wait(2000)

  return (
    <div
      className="inline-block rounded-xl bg-sky-600
     px-3 py-1 text-xs text-white"
    >
      views: 123
    </div>
  )
}
export default PageViews
