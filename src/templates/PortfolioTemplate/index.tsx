import BaseTemplate from 'templates/Base'
import Head from 'next/head'
import * as S from './styles'
import { PortfolioProps } from 'pages/portfolio'
import PortfolioCards from 'components/PortfolioCards'
import formatDate from 'utils/format-date'
import { useEffect, useState } from 'react'
import { loadProjects } from 'services/loadProjects'

const PortfolioTemplate = ({
  projects,
  categoryName,
  variables
}: PortfolioProps) => {
  const [stateProjects, setStateProjects] = useState(projects)
  const [stateVariables, setStateVariables] = useState(variables)
  const [buttonDisabled, setButtonDisabled] = useState(false)
  const [noMorePosts, setNoMorePosts] = useState(false)

  useEffect(() => {
    setStateProjects(projects)

    if (projects.length < Number(variables?.limit)) {
      setButtonDisabled(true)
      setNoMorePosts(true)
    }
  }, [projects, variables])

  const handleLoadMorePosts = async () => {
    setButtonDisabled(true)

    const newVariables = {
      ...stateVariables,
      offset: Number(stateVariables?.offset) + Number(stateVariables?.limit),
      limit: stateVariables?.limit
    }

    const data = await loadProjects(newVariables)

    const morePosts = data.projects.map((post) => {
      return {
        ...post,
        createdAt: formatDate(post.createdAt as string)
      }
    })

    setButtonDisabled(false)
    setStateVariables(newVariables)
    setStateProjects((p) => [...p, ...morePosts])

    if (morePosts.length < Number(variables?.limit)) {
      setButtonDisabled(true)
      setNoMorePosts(true)
    }
  }

  return (
    <>
      <Head>
        <title>Portfólio - {categoryName} | Bianca Melo</title>
      </Head>
      <BaseTemplate>
        <S.ContainerPosts>
          <S.Title>
            {categoryName ? `Portfólio - ${categoryName}` : 'Portfólio'}
          </S.Title>
          <S.GridContaner>
            {stateProjects.map((project) => (
              <PortfolioCards
                key={project.id}
                title={project.title}
                slug={project.slug}
                cover={project.cover}
                categories={project.categories}
                excerpt={project.excerpt}
                route="portfolio"
              />
            ))}
          </S.GridContaner>

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

export default PortfolioTemplate
