import client from 'graphql/client'
import { Get_Posts_By_CategoryQuery } from 'graphql/generated/graphql'
import { GET_POSTS_BY_CATEGORY } from 'graphql/queries'
import { GetStaticPaths, GetStaticProps } from 'next'
import { useRouter } from 'next/router'

import PostsTemplate from 'templates/PostsTemplate'
import formatDate from 'utils/format-date'
import { PostsProps } from '..'

export default function PostsCategoryPage({ posts }: PostsProps) {
  const router = useRouter()

  const categoryName = posts[0].categories.filter(
    (category) => category.slug === router.query.slug
  )[0].title

  return <PostsTemplate posts={posts} categoryName={categoryName} />
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: 'blocking'
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { posts } = await client.request<Get_Posts_By_CategoryQuery>(
    GET_POSTS_BY_CATEGORY,

    {
      slug: params?.slug
    }
  )

  const newPosts = posts.map((post) => {
    // organiza as categorias em ordem alfabetica

    return {
      ...post,
      createdAt: formatDate(post.createdAt as string)
    }
  })

  if (!posts.length) {
    return { notFound: true }
  }

  return {
    revalidate: 60 * 60 * 24, // 1 day
    props: { posts: newPosts }
  }
}
