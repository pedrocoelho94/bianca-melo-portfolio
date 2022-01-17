import BaseTemplate from 'templates/Base'
import Head from 'next/head'
import * as S from './styles'
import { Container } from 'components/Container'
import { PortfolioProps } from 'pages/portfolio'
import PostsBox from 'components/PostsBox'

const PortfolioTemplate = ({ projects, categoryName }: PortfolioProps) => {
  return (
    <>
      <Head>
        <title>Portfólio - Bianca Melo</title>
      </Head>
      <BaseTemplate>
        <Container>
          <S.Title>{categoryName ? categoryName : 'Portfólio'}</S.Title>
          <S.GridContaner>
            {projects.map((project) => (
              <PostsBox
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
        </Container>
      </BaseTemplate>
    </>
  )
}

export default PortfolioTemplate
