import { wait } from '@/lib/posts'

const PageViews = async ({ slug }) => {
  await wait(2000)

  return <span>views: 123</span>
}
export default PageViews
