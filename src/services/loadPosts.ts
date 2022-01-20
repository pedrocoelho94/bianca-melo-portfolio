import client from 'graphql/client'
import { GET_POSTS_BY } from 'graphql/queries'
import { PostsProps } from 'pages/posts'

export type LoadPostsVariables = {
  categorySlug?: string
  tagSlug?: string
  limit?: number
  offset?: number
  slug?: string // string com espaço pega todos os posts
}

export const loadPosts = async (
  variables: LoadPostsVariables
): Promise<PostsProps> => {
  const data = await client.request(GET_POSTS_BY, {
    ...variables
  })

  return data
}
