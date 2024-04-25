import PageViews from '@/app/components/PageViews'
import { getAllPosts, getPostBySlug, wait } from '@/lib/posts'
import { Suspense } from 'react'

// export async function generateStaticParams() {
//   const posts = await getAllPosts()

//   return posts.map(post => ({ slug: post.slug }))
// }

const Page = async ({ params }) => {
  const { slug } = params

  const { content, frontmatter } = await getPostBySlug(slug)

  await wait(500)

  return (
    <section>
      <header className="rounded bg-slate-100 p-8">
        <h1 className="font-serif text-3xl">{frontmatter.title}</h1>
        <p className="mt-1 text-sm font-light uppercase text-slate-400">
          {frontmatter.author}
        </p>
        <div className="mt-4 text-xs text-gray-400">
          <Suspense fallback="Loading view count...">
            <PageViews slug={slug} />
          </Suspense>
        </div>
      </header>
      <main className="prose mt-12">{content}</main>
    </section>
  )
}
export default Page
