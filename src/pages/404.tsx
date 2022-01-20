import { GetStaticProps } from 'next'
import NotFoundTemplate from 'templates/NotFoundTemplate'

export default function Page404() {
  return <NotFoundTemplate />
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    revalidate: 60 * 60 * 24 * 30,
    props: {}
  }
}
