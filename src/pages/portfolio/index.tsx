import { GetStaticProps } from 'next'
import { loadProjects } from 'services/loadProjects'
import PortfolioTemplate from 'templates/PortfolioTemplate'
import formatDate from 'utils/format-date'

type category = {
  slug: string
  title: string
}

export type Portfolio = {
  id: string
  title: string
  slug: string
  excerpt?: string
  cover: {
    url: string
  }
  categories: category[]
  createdAt: string
}

type VariablesProps = {
  limit: number
  offset: number
}

export type PortfolioProps = {
  projects: Portfolio[]
  categoryName?: string
  variables: VariablesProps
}

export default function PortfolioPage({ projects, variables }: PortfolioProps) {
  return <PortfolioTemplate projects={projects} variables={variables} />
}

export const getStaticProps: GetStaticProps = async () => {
  const variables = {
    offset: 0,
    limit: 10,
    slug: ' '
  }

  const { projects } = await loadProjects(variables)

  if (!projects.length) return { notFound: true }

  const projectsList = projects.map((project) => {
    // organiza as categorias em ordem alfabetica
    project.categories.sort((a, b) =>
      a.title > b.title ? 1 : b.title > a.title ? -1 : 0
    )

    return {
      ...project,
      createdAt: formatDate(project.createdAt as string)
    }
  })

  return {
    revalidate: 60, // 1 minute
    props: {
      projects: projectsList,
      variables
    }
  }
}
