import { gql } from 'graphql-request'

export const GET_PROJECTS = gql`
  query GET_PROJECTS {
    projects {
      id
      title
      slug
      cover {
        url
      }
      categories {
        slug
        title
      }
      demoProject
      description {
        html
      }
    }
  }
`
