import { gql } from 'graphql-request'

export const GET_PROJECTS = gql`
  query GET_PROJECTS {
    projects {
      id
      title
      slug
      excerpt
      createdAt
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
export const GET_PROJECTS_BY_SLUG = gql`
  query GET_PROJECTS_BY_SLUG($categorySlug: String!) {
    projects(where: { categories_some: { slug: $categorySlug } }) {
      id
      title
      slug
      excerpt
      cover {
        url
      }
      categories {
        slug
        title
      }
    }
  }
`
export const GET_PROJECT_BY_SLUG = gql`
  query GET_PROJECT_BY_SLUG($postSlug: String!) {
    projects(where: { slug: $postSlug }) {
      title
      slug
      excerpt
      createdAt
      cover {
        url
      }
      description {
        html
      }
      demoProject
      tags {
        title
        slug
      }
      categories {
        title
        slug
      }
    }
  }
`
