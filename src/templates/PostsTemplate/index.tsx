import { Container } from 'components/Container'
import BaseTemplate from 'templates/Base'
import Head from 'next/head'
import * as S from './styles'
import { PostsProps } from 'pages/posts'
import PostsCard from 'components/PostsCard'

const PostsTemplate = ({ posts }: PostsProps) => (
  <>
    <Head>
      <title>Posts | Bianca Melo</title>
    </Head>
    <BaseTemplate>
      <Container>
        <S.PostContainer>
          {posts.map((post) => (
            <PostsCard
              key={post.id}
              title={post.title}
              slug={post.slug}
              excerpt={post.excerpt}
              createdAt={post.createdAt}
            />
          ))}
        </S.PostContainer>
      </Container>
    </BaseTemplate>
  </>
)

export default PostsTemplate
