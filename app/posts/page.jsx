import { getAllPosts } from '@/lib/posts'
import Link from 'next/link'

const Page = async () => {
  const posts = await getAllPosts()

  return (
    <section>
      <h1 className="text-3xl font-bold">All blog posts</h1>

      <ul className="mt-12">
        {posts.map(post => (
          <li key={post.slug} className="mt-4 first:mt-0 ">
            <Link
              href={`/posts/${post.slug}`}
              className="text-blue-600 hover:text-cyan-500"
            >
              <h4 className="text-lg font-medium">{post.frontmatter?.title}</h4>
              <p className="text-sm text-gray-500">
                {post.frontmatter?.author}
              </p>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  )
}
export default Page
