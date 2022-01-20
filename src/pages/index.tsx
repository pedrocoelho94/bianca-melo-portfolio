import { GetStaticProps } from 'next'
import { loadPosts } from 'services/loadPosts'
import { loadProjects } from 'services/loadProjects'
import HomeTemplate from 'templates/HomeTemplate'
import { Portfolio } from './portfolio'
import { SinglePostProps } from './posts'

export type HomeProps = {
  projects: Portfolio[]
  posts: SinglePostProps[]
}

export default function Home({ projects, posts }: HomeProps) {
  return <HomeTemplate projects={projects} posts={posts} />
}

export const getStaticProps: GetStaticProps = async () => {
  const { projects } = await loadProjects({
    offset: 0,
    limit: 3,
    slug: ' '
  })

  const { posts } = await loadPosts({
    offset: 0,
    limit: 1,
    slug: ' '
  })

  return {
    revalidate: 24 * 60 * 60,
    props: { projects, posts }
  }
}
