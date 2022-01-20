import { GetStaticPaths, GetStaticProps } from 'next'
import { useRouter } from 'next/router'

import PostsTemplate from 'templates/PostsTemplate'
import formatDate from 'utils/format-date'
import { PostsProps } from '..'

import { loadPosts } from 'services/loadPosts'

export default function PostsCategoryPage({ posts, variables }: PostsProps) {
  const router = useRouter()

  const categoryName = posts[0].categories.filter(
    (category) => category.slug === router.query.slug
  )[0].title

  return (
    <PostsTemplate
      posts={posts}
      variables={variables}
      titlePage={`Categoria: ${categoryName}`}
    />
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: 'blocking'
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const variables = {
    offset: 0,
    limit: 10,
    slug: '',
    categorySlug: params?.slug as string
  }
  const { posts } = await loadPosts(variables)

  if (!posts.length) {
    return {
      notFound: true
    }
  }

  const newPosts = posts.map((post) => {
    return {
      ...post,
      createdAt: formatDate(post.createdAt as string)
    }
  })

  return {
    revalidate: 60 * 60 * 24, // 1 day
    props: {
      posts: newPosts,
      variables
    }
  }
}
