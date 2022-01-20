import { gql } from 'graphql-request'

export const GET_PROJECTS_BY = gql`
  query GET_PROJECTS_BY(
    $categorySlug: String
    $limit: Int!
    $offset: Int!
    $slug: String
  ) {
    projects(
      first: $limit
      skip: $offset
      orderBy: createdAt_DESC
      where: {
        OR: [
          { categories_some: { slug: $categorySlug } }
          { slug_not_contains: $slug }
        ]
      }
    ) {
      id
      title
      excerpt
      slug
      createdAt
      cover {
        url
      }
      categories {
        id
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
      categories {
        title
        slug
      }
    }
  }
`

export const GET_POSTS_BY = gql`
  query GET_POSTS_BY(
    $categorySlug: String
    $tagSlug: String
    $limit: Int!
    $offset: Int!
    $slug: String
  ) {
    posts(
      first: $limit
      skip: $offset
      orderBy: createdAt_DESC
      where: {
        OR: [
          { categories_some: { slug: $categorySlug } }
          { tags_some: { slug: $tagSlug } }
          { slug_not_contains: $slug }
        ]
      }
    ) {
      id
      title
      slug
      excerpt
      createdAt
      cover {
        url
      }
      categories {
        title
        slug
      }
      tags {
        title
        slug
      }
    }
  }
`

export const GET_POST_BY_SLUG = gql`
  query GET_POST_BY_SLUG($slug: String!) {
    posts(where: { slug: $slug }) {
      id
      title
      slug
      excerpt
      createdAt
      cover {
        url
      }
      content {
        html
      }
      categories {
        title
        slug
      }
      tags {
        title
        slug
      }
    }
  }
`
