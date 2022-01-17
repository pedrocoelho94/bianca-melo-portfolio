import client from 'graphql/client'
import { Get_ProjectsQuery } from 'graphql/generated/graphql'
import { GET_PROJECTS } from 'graphql/queries'
import { GetStaticProps } from 'next'
import PortfolioTemplate from 'templates/PortfolioTemplate'

type category = {
  slug: string
  title: string
}

export type Portolio = {
  id: string
  title: string
  slug: string
  excerpt?: string
  cover: {
    url: string
  }
  categories: category[]
}

export type PortfolioProps = {
  projects: Portolio[]
  categoryName?: string
}

export default function PortfolioPage({ projects }: PortfolioProps) {
  return <PortfolioTemplate projects={projects} />
}

export const getStaticProps: GetStaticProps = async () => {
  const { projects } = await client.request<Get_ProjectsQuery>(GET_PROJECTS)

  if (!projects.length) return { notFound: true }

  const projectsList = projects.map((project) => {
    // organiza as categorias em ordem alfabetica
    project.categories.sort((a, b) =>
      a.title > b.title ? 1 : b.title > a.title ? -1 : 0
    )

    return {
      ...project,
      createdAt: new Date(project.createdAt as string).toLocaleDateString(
        'pt-BR',
        {
          day: '2-digit',
          month: 'long',
          year: 'numeric'
        }
      )
    }
  })

  return {
    props: { projects: projectsList }
  }
}
