import { Container } from 'components/Container'
import Hero from 'components/Hero'
import Services from 'components/Services'
import Head from 'next/head'
import BaseTemplate from 'templates/Base'
import * as S from './styles'

const HomeTemplate = () => (
  <>
    <Head>
      <title>Início | Bianca Melo</title>
    </Head>
    <BaseTemplate>
      <Container>
        <S.Section>
          <Hero />
        </S.Section>
        <S.Section>
          <Services />
        </S.Section>
      </Container>
    </BaseTemplate>
  </>
)

export default HomeTemplate
