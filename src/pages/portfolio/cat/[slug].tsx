import client from 'graphql/client'
import { Get_Projects_By_SlugQuery } from 'graphql/generated/graphql'
import { GET_PROJECTS_BY_SLUG } from 'graphql/queries'
import { GetStaticPaths, GetStaticProps } from 'next'
import { useRouter } from 'next/router'
import PortfolioTemplate from 'templates/PortfolioTemplate'
import { PortfolioProps } from '..'

export default function ProjectTemplate({ projects }: PortfolioProps) {
  const router = useRouter()

  const categoryName = projects[0].categories.filter(
    (category) => category.slug === router.query.slug
  )[0].title

  return <PortfolioTemplate projects={projects} categoryName={categoryName} />
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: 'blocking'
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { projects } = await client.request<Get_Projects_By_SlugQuery>(
    GET_PROJECTS_BY_SLUG,
    {
      categorySlug: params?.slug
    }
  )

  const projectsList = projects.map((project) => {
    // organiza as categorias em ordem alfabetica
    project.categories.sort((a, b) =>
      a.title > b.title ? 1 : b.title > a.title ? -1 : 0
    )

    return {
      ...project
    }
  })

  if (!projects.length) {
    return { notFound: true }
  }

  return {
    revalidate: 60 * 60 * 24, // 1 day
    props: { projects: projectsList }
  }
}
