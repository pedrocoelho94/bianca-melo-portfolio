import BaseTemplate from 'templates/Base'
import { GetStaticProps } from 'next'
import { Container } from 'components/Container'

export default function Page404() {
  return (
    <BaseTemplate>
      <Container>
        <h1>404: Not Found</h1>
        <p>O link que você está tentando acessar não existe.</p>
      </Container>
    </BaseTemplate>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    revalidate: 60 * 60 * 24 * 30,
    props: {}
  }
}
