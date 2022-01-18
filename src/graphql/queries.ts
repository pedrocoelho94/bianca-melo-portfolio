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
  query GET_POSTS {
    posts(orderBy: createdAt_DESC) {
      id
      title
      slug
      excerpt
      createdAt
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
export const GET_POSTS_BY_CATEGORY = gql`
  query GET_POSTS_BY_CATEGORY($slug: String!) {
    posts(
      orderBy: createdAt_DESC
      where: { categories_some: { slug: $slug } }
    ) {
      id
      title
      slug
      excerpt
      createdAt
      categories {
        id
        title
        slug
      }
    }
  }
`
export const GET_POSTS_BY_TAG = gql`
  query GET_POSTS_BY_TAG($slug: String!) {
    posts(orderBy: createdAt_DESC, where: { tags_some: { slug: $slug } }) {
      id
      title
      slug
      excerpt
      createdAt
    }
  }
`
