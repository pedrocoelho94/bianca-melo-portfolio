import Head from 'next/head'
import BaseTemplate from 'templates/Base'
import { Container } from 'components/Container'
import * as S from './styles'

const ContactTemplate = () => (
  <>
    <Head>
      <title>Contato | Bianca Melo</title>
    </Head>

    <BaseTemplate>
      <Container>
        <S.Wrapper>
          <S.Title>Contato</S.Title>

          <S.Description>
            Se interessou pelo meu trabalho? Não perca tempo e entre em contato!
          </S.Description>
          <br />
          <S.Description>
            E-mail:{' '}
            <a href="mailto:biancamariamelo@gmail.com">
              biancamariamelo@gmail.com
            </a>
          </S.Description>
          <S.Description>
            WhatsApp:{' '}
            <a
              href="https://wa.me/5582988103864"
              target="_blank"
              rel="noreferrer"
            >
              +55 (82) 9 8810-3864
            </a>
          </S.Description>
        </S.Wrapper>
      </Container>
    </BaseTemplate>
  </>
)

export default ContactTemplate
