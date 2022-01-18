import BaseTemplate from 'templates/Base'
import Head from 'next/head'
import { Container } from 'components/Container'

//import * as S from './styles'

import Post from 'components/Post'
import { PostTemplateProps } from 'pages/post/[slug]'

const PostTemplate = ({ post }: PostTemplateProps) => {
  return (
    <>
      <Head>
        <title>{post.title} - Bianca Melo</title>
      </Head>
      <BaseTemplate>
        <Container>
          <Post
            title={post.title}
            excerpt={post.excerpt}
            cover={post.cover.url}
            createdAt={post.createdAt}
            categories={post.categories}
            description={post.content.html}
            tags={post.tags}
            route="posts/cat"
          />
        </Container>
      </BaseTemplate>
    </>
  )
}

export default PostTemplate
