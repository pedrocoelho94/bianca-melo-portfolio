import client from 'graphql/client'
import { GET_PROJECTS_BY } from 'graphql/queries'
import { PortfolioProps } from 'pages/portfolio'

export type LoadProjectsVariables = {
  categorySlug?: string
  limit?: number
  offset?: number
  slug?: string // string com espaço pega todos os posts
}

export const loadProjects = async (
  variables: LoadProjectsVariables
): Promise<PortfolioProps> => {
  const data = await client.request(GET_PROJECTS_BY, {
    ...variables
  })

  return data
}
