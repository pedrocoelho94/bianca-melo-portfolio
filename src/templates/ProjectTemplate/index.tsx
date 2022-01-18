import BaseTemplate from 'templates/Base'
import Head from 'next/head'
import { Container } from 'components/Container'

//import * as S from './styles'
import { ProjectProps } from 'pages/portfolio/[slug]'
import Post from 'components/Post'

const ProjectTemplate = ({ project }: ProjectProps) => {
  return (
    <>
      <Head>
        <title>{project.title} - Bianca Melo</title>
      </Head>
      <BaseTemplate>
        <Container>
          <Post
            title={project.title}
            excerpt={project.excerpt}
            cover={project.cover.url}
            createdAt={project.createdAt}
            categories={project.categories}
            demoProject={project.demoProject}
            description={project.description.html}
            route="portfolio/cat"
          />
        </Container>
      </BaseTemplate>
    </>
  )
}

export default ProjectTemplate
