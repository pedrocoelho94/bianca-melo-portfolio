import { Container } from 'components/Container'
import Hero from 'components/Hero'
import Services from 'components/Services'
import Head from 'next/head'
import Link from 'next/link'
import { HomeProps } from 'pages'
import BaseTemplate from 'templates/Base'
import * as S from './styles'
import PortfolioCards from 'components/PortfolioCards'

const HomeTemplate = ({ projects, posts }: HomeProps) => (
  <>
    <Head>
      <title>Início | Bianca Melo</title>
    </Head>
    <BaseTemplate>
      <Container>
        <S.Section>
          <Hero />
        </S.Section>

        <S.Section>
          <Services />
        </S.Section>

        <S.Section>
          <S.SectionTitle>
            <S.Title>Projetos Recentes</S.Title>
            <S.More>
              <Link href="/portfolio">
                <a>ver mais</a>
              </Link>
            </S.More>
          </S.SectionTitle>

          <S.GridHomeContainer>
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
          </S.GridHomeContainer>
        </S.Section>

        <S.Section>
          <S.SectionTitle>
            <S.Title>Último Post</S.Title>
            <S.More>
              <Link href="/posts">
                <a>ver mais</a>
              </Link>
            </S.More>
          </S.SectionTitle>

          {posts.map((post) => (
            <S.PostContainer key={post.id}>
              <S.Cover src={post.cover.url} alt="" />
              <S.InfoContent>
                <S.TitlePost>{post.title}</S.TitlePost>
                <S.ExcerptPost>{post.excerpt}</S.ExcerptPost>
                <S.Link>
                  <Link href={`/post/${post.slug}`}>
                    <a>Continuar lendo</a>
                  </Link>
                </S.Link>
              </S.InfoContent>
            </S.PostContainer>
          ))}
        </S.Section>
      </Container>
    </BaseTemplate>
  </>
)

export default HomeTemplate
