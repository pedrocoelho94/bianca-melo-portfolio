import client from 'graphql/client'
import { GET_PROJECT_BY_SLUG } from 'graphql/queries'
import { Get_Project_By_SlugQuery } from 'graphql/generated/graphql'
import { GetStaticPaths, GetStaticProps } from 'next'
import ProjectTemplate from 'templates/ProjectTemplate'
import formatDate from 'utils/format-date'

type category = {
  slug: string
  title: string
}

type Project = {
  title: string
  excerpt?: string
  createdAt: string
  cover: {
    url: string
  }
  categories: category[]
  description: {
    html: string
  }
  demoProject: string
}

export type ProjectProps = {
  project: Project
}

export default function ProjectPage({ project }: ProjectProps) {
  return <ProjectTemplate project={project} />
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: 'blocking'
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { projects } = await client.request<Get_Project_By_SlugQuery>(
    GET_PROJECT_BY_SLUG,
    {
      postSlug: params?.slug
    }
  )
  if (!projects.length) return { notFound: true }

  const project = projects[0]

  const post = {
    ...project,
    createdAt: formatDate(project.createdAt as string)
  }

  return {
    revalidate: 60, // 1 minute
    props: { project: post }
  }
}
