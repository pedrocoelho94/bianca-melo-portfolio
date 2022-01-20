import { GetStaticProps } from 'next'
import PostsTemplate from 'templates/PostsTemplate'

import { loadPosts } from 'services/loadPosts'

import formatDate from 'utils/format-date'

type Category = {
  id: string
  title: string
  slug: string
}

type Tag = {
  id: string
  title: string
  slug: string
}

type PostProps = {
  id: string
  title: string
  slug: string
  excerpt: string
  createdAt: string
  categories: Category[]
  tags: Tag[]
}

type VariablesProps = {
  limit: number
  offset: number
}

export type PostsProps = {
  posts: PostProps[]
  categoryName?: string
  variables: VariablesProps
}

export default function PostsPage({ posts, variables }: PostsProps) {
  return <PostsTemplate posts={posts} variables={variables} />
}

export const getStaticProps: GetStaticProps = async () => {
  const variables = { offset: 0, limit: 10, slug: ' ' }
  const { posts } = await loadPosts(variables)

  const newPosts = posts.map((post) => {
    return {
      ...post,
      createdAt: formatDate(post.createdAt as string)
    }
  })

  return {
    revalidate: 60 * 60 * 24,
    props: {
      posts: newPosts,
      variables
    }
  }
}
