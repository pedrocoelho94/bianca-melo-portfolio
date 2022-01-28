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

export type SinglePostProps = {
  id: string
  title: string
  slug: string
  excerpt: string
  createdAt: string
  categories: Category[]
  tags: Tag[]
  cover: {
    url: string
  }
}

type VariablesProps = {
  limit: number
  offset: number
}

export type PostsProps = {
  posts: SinglePostProps[]
  categoryName?: string
  variables: VariablesProps
  titlePage: string
}

export default function PostsPage({ posts, variables }: PostsProps) {
  return (
    <PostsTemplate
      posts={posts}
      variables={variables}
      titlePage={'Postagens Recentes'}
    />
  )
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
    revalidate: 60, // 1 minute
    props: {
      posts: newPosts,
      variables
    }
  }
}
