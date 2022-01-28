import { GetStaticPaths, GetStaticProps } from 'next'
import { useRouter } from 'next/router'
import { loadProjects } from 'services/loadProjects'
import PortfolioTemplate from 'templates/PortfolioTemplate'
import { PortfolioProps } from '..'

export default function ProjectTemplate({
  projects,
  variables
}: PortfolioProps) {
  const router = useRouter()

  const categoryName = projects[0].categories.filter(
    (category) => category.slug === router.query.slug
  )[0].title

  return (
    <PortfolioTemplate
      projects={projects}
      variables={variables}
      categoryName={categoryName}
    />
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: 'blocking'
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const variables = {
    offset: 0,
    limit: 6,
    slug: '',
    categorySlug: params?.slug as string
  }

  const { projects } = await loadProjects(variables)

  if (!projects.length) {
    return { notFound: true }
  }

  const projectsList = projects.map((project) => {
    // organiza as categorias em ordem alfabetica
    project.categories.sort((a, b) =>
      a.title > b.title ? 1 : b.title > a.title ? -1 : 0
    )

    return {
      ...project
    }
  })

  return {
    revalidate: 60, // 1 minute
    props: { projects: projectsList, variables }
  }
}
