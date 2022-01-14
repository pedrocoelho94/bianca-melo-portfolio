import client from 'graphql/client'
import { Get_ProjectsQuery } from 'graphql/generated/graphql'
import { GET_PROJECTS } from 'graphql/queries'
import { GetStaticProps } from 'next'
import HomeTemplate from 'templates/HomeTemplate'

export default function Home() {
  return <HomeTemplate />
}

export const getStaticProps: GetStaticProps = async () => {
  const { projects } = await client.request<Get_ProjectsQuery>(GET_PROJECTS)

  console.log(projects)

  return {
    revalidate: 24 * 60 * 60,
    props: { projects }
  }
}
