import BaseTemplate from 'templates/Base'
import Head from 'next/head'
import * as S from './styles'
import { Container } from 'components/Container'
import { PortfolioProps } from 'pages/portfolio'
import PortfolioCards from 'components/PortfolioCards'

const PortfolioTemplate = ({ projects, categoryName }: PortfolioProps) => {
  return (
    <>
      <Head>
        <title>Portfólio - {categoryName} | Bianca Melo</title>
      </Head>
      <BaseTemplate>
        <Container>
          <S.Title>
            {categoryName ? `Portfólio - ${categoryName}` : 'Portfólio'}
          </S.Title>
          <S.GridContaner>
            {projects.map((project) => (
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
        </Container>
      </BaseTemplate>
    </>
  )
}

export default PortfolioTemplate
