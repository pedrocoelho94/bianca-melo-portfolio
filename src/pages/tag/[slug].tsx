import { GetStaticPaths, GetStaticProps } from 'next'
import { useRouter } from 'next/router'
import { PostsProps } from 'pages/posts'
import { loadPosts } from 'services/loadPosts'
import PostsTemplate from 'templates/PostsTemplate'

import formatDate from 'utils/format-date'

export default function TagPage({ posts, variables }: PostsProps) {
  const router = useRouter()

  const categoryName = posts[0].tags.filter(
    (tag) => tag.slug === router.query.slug
  )[0].title

  return (
    <PostsTemplate
      posts={posts}
      categoryName={categoryName}
      variables={variables}
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
    tagSlug: params?.slug as string
  }
  const { posts } = await loadPosts(variables)

  const newPosts = posts.map((post) => {
    return {
      ...post,
      createdAt: formatDate(post.createdAt as string)
    }
  })

  console.log(newPosts)

  return {
    revalidate: 60 * 60 * 24,
    props: {
      posts: newPosts,
      variables
    }
  }
}
