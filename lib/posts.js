import path from 'path'
import fs from 'fs'
import { compileMDX } from 'next-mdx-remote/rsc'
import NewsLetter from '@/app/components/NewsLetter'

const rootDirectory = path.join(process.cwd(), 'content')

// custom components
const components = {
  h1: props => (
    <h2 {...props} className="text-emerald-400">
      {props.children}
    </h2>
  ),
  NewsLetter
}

export async function getPostBySlug(slug) {
  const realSlug = slug.replace(/\.mdx$/, '')
  const filePath = path.join(rootDirectory, `${realSlug}.mdx`)
  const fileContent = fs.readFileSync(filePath, { encoding: 'utf8' })

  const { content, frontmatter } = await compileMDX({
    source: fileContent,
    components,
    options: {
      parseFrontmatter: true
    }
  })

  return { slug: realSlug, content, frontmatter }
}

export async function getAllPosts() {
  const files = fs.readdirSync(rootDirectory)

  let posts = []
  for (const file of files) {
    const post = await getPostBySlug(file)
    posts.push(post)
  }

  return posts
}
