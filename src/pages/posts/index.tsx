import client from 'graphql/client'
import { Get_PostsQuery } from 'graphql/generated/graphql'
import { GET_POSTS } from 'graphql/queries'
import { GetStaticProps } from 'next'
import PostsTemplate from 'templates/PostsTemplate'

import formatDate from 'utils/format-date'

type Category = {
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
}

export type PostsProps = {
  posts: PostProps[]
  categoryName?: string
}

export default function PostsPage({ posts }: PostsProps) {
  return <PostsTemplate posts={posts} />
}

export const getStaticProps: GetStaticProps = async () => {
  const { posts } = await client.request<Get_PostsQuery>(GET_POSTS)

  const newPosts = posts.map((post) => {
    return {
      ...post,
      createdAt: formatDate(post.createdAt as string)
    }
  })

  return {
    revalidate: 60 * 60 * 24,
    props: {
      posts: newPosts
    }
  }
}
