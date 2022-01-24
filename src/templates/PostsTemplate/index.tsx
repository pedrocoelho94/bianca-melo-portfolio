import BaseTemplate from 'templates/Base'
import Head from 'next/head'
import * as S from './styles'
import { PostsProps } from 'pages/posts'
import PostsCard from 'components/PostsCard'
import { useEffect, useState } from 'react'
import formatDate from 'utils/format-date'
import { loadPosts } from 'services/loadPosts'

import { Container } from 'components/Container'

const PostsTemplate = ({ posts, variables, titlePage }: PostsProps) => {
  const [statePosts, setStatePosts] = useState(posts)
  const [stateVariables, setStateVariables] = useState(variables)
  const [buttonDisabled, setButtonDisabled] = useState(false)
  const [noMorePosts, setNoMorePosts] = useState(false)

  useEffect(() => {
    setStatePosts(posts)

    if (posts.length < Number(variables?.limit)) {
      setButtonDisabled(true)
      setNoMorePosts(true)
    }
  }, [posts, variables])

  const handleLoadMorePosts = async () => {
    setButtonDisabled(true)

    const newVariables = {
      ...stateVariables,
      offset: Number(stateVariables?.offset) + Number(stateVariables?.limit),
      limit: stateVariables?.limit
    }

    const data = await loadPosts(newVariables)

    const morePosts = data.posts.map((post) => {
      return {
        ...post,
        createdAt: formatDate(post.createdAt as string)
      }
    })

    setButtonDisabled(false)
    setStateVariables(newVariables)
    setStatePosts((p) => [...p, ...morePosts])

    if (morePosts.length < Number(variables?.limit)) {
      setButtonDisabled(true)
      setNoMorePosts(true)
    }
  }

  return (
    <>
      <Head>
        <title>{titlePage} | Bianca Melo</title>
      </Head>
      <BaseTemplate>
        <Container>
          <S.ContainerPosts>
            <S.Title>{titlePage}</S.Title>
            <S.PostContainer>
              {statePosts.map((post) => (
                <PostsCard
                  key={post.id}
                  title={post.title}
                  slug={post.slug}
                  excerpt={post.excerpt}
                  createdAt={post.createdAt}
                />
              ))}
            </S.PostContainer>

            <S.ButtonContainer>
              <S.Button onClick={handleLoadMorePosts} disabled={buttonDisabled}>
                {noMorePosts ? 'Sem mais posts' : 'Carregar mais'}
              </S.Button>
            </S.ButtonContainer>
          </S.ContainerPosts>
        </Container>
      </BaseTemplate>
    </>
  )
}

export default PostsTemplate
