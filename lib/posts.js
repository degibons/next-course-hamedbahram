import path from 'path'
import fs from 'fs'
import { compileMDX } from 'next-mdx-remote/rsc'
import NewsLetter from '@/app/components/md/NewsLetter'
import EngText from '@/app/components/md/EngText'
import { cache } from 'react'
import wait from './wait'

const rootDirectory = path.join(process.cwd(), 'content')

// custom components
const components = {
  h1: props => (
    <h2 {...props} className="text-emerald-400">
      {props.children}
    </h2>
  ),
  NewsLetter,
  EngText,
  Example: props => (
    <div className="not-prose mb-6 rounded-lg bg-gray-100 p-6" {...props}>
      {props.children}
    </div>
  ),
  ExampleGroup: props => (
    <div className="mt-6 first:mt-0" {...props}>
      {props.children}
    </div>
  ),
  RusText: props => (
    <div className="text-gray-400 peer-[.audio]:ml-[1.6rem]" {...props}>
      {props.children}
    </div>
  )
}

export const getPostBySlug = cache(async slug => {
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
})

export async function getAllPosts() {
  const files = fs.readdirSync(rootDirectory)

  let posts = []
  for (const file of files) {
    const post = await getPostBySlug(file)
    posts.push(post)
  }

  await wait(500)

  return posts
}
