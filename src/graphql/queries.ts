import { gql } from 'graphql-request'

export const GET_PROJECTS = gql`
  query GET_PROJECTS {
    projects(orderBy: createdAt_DESC) {
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
    projects(
      orderBy: createdAt_DESC
      where: { categories_some: { slug: $categorySlug } }
    ) {
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
      categories {
        title
        slug
      }
    }
  }
`

export const GET_POSTS = gql`
  query GET_POSTS($limit: Int!, $offset: Int!) {
    posts(orderBy: createdAt_DESC, first: $limit, skip: $offset) {
      id
      title
      slug
      excerpt
      createdAt
      categories {
        slug
        title
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
