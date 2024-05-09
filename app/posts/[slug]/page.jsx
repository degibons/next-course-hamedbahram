import PageViews from '@/app/components/PageViews'
import BlogImage from '@/app/components/ui/BlogImage'
import { getAllPosts, getPostBySlug, wait } from '@/lib/posts'
import { Suspense } from 'react'

// export async function generateStaticParams() {
//   const posts = await getAllPosts()

//   return posts.map(post => ({ slug: post.slug }))
// }

async function getData() {
  return new Promise((resolve, reject) =>
    setTimeout(() => {
      const random = Math.random()
      if (random > 0.5) {
        reject('Failed to get data')
      }

      resolve()
    }, 500)
  )
}

const Page = async ({ params }) => {
  const { slug } = params

  const { content, frontmatter } = await getPostBySlug(slug)
  const imageFile = 'girl.jpg'

  // try {
  //   await getData()
  // } catch (error) {
  //   throw new Error(error)
  // }

  return (
    <section>
      <BlogImage file={imageFile} />
      <header className="rounded bg-slate-100 p-8">
        <h1 className="font-serif text-3xl font-bold">{frontmatter.title}</h1>
        <p className="mt-1 text-sm font-light uppercase text-slate-400">
          {frontmatter.author}
        </p>
        <div className="mt-4">
          <Suspense
            fallback={<div className="text-xs text-slate-400">Loading...</div>}
          >
            <PageViews slug={slug} />
          </Suspense>
        </div>
      </header>
      <main className="prose mt-12">{content}</main>
    </section>
  )
}
export default Page
