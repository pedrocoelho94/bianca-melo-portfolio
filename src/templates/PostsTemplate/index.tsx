import BaseTemplate from 'templates/Base'
import Head from 'next/head'
import * as S from './styles'
import { PostsProps } from 'pages/posts'
import PostsCard from 'components/PostsCard'
import { useEffect, useState } from 'react'
import formatDate from 'utils/format-date'
import { loadPosts } from 'services/loadPosts'

const PostsTemplate = ({ posts, variables, categoryName }: PostsProps) => {
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

    console.log(data)

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
        <title>{categoryName || 'Posts'} | Bianca Melo</title>
      </Head>
      <BaseTemplate>
        <S.ContainerPosts>
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
      </BaseTemplate>
    </>
  )
}

export default PostsTemplate
