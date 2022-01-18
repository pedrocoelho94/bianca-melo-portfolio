import client from 'graphql/client'
import { Get_Post_By_SlugQuery } from 'graphql/generated/graphql'
import { GET_POST_BY_SLUG } from 'graphql/queries'
import { GetStaticPaths, GetStaticProps } from 'next'

import PostTemplate from 'templates/PostTemplate'

import formatDate from 'utils/format-date'

type Category = {
  title: string
  slug: string
}

type Tag = {
  title: string
  slug: string
}

type PostProps = {
  id: string
  title: string
  slug: string
  excerpt: string
  createdAt: string
  cover: {
    url: string
  }
  content: {
    html: string
  }
  categories: Category[]
  tags: Tag[]
}

export type PostTemplateProps = {
  post: PostProps
}

export default function PostPage({ post }: PostTemplateProps) {
  return <PostTemplate post={post} />
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: 'blocking'
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { posts } = await client.request<Get_Post_By_SlugQuery>(
    GET_POST_BY_SLUG,
    {
      slug: params?.slug
    }
  )

  if (!posts.length) return { notFound: true }

  const post = posts[0]

  const newPost = {
    ...post,
    createdAt: formatDate(post.createdAt)
  }

  console.log(newPost)
  return {
    props: { post: newPost }
  }
}
