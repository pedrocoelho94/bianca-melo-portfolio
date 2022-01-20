import { Container } from 'components/Container'
import Link from 'next/link'
import BaseTemplate from 'templates/Base'
import * as S from './styles'

const NotFoundTemplate = () => (
  <BaseTemplate>
    <Container>
      <S.Wrapper>
        <S.Title>ERRO 404</S.Title>
        <S.Description>
          O link que você está tentando acessar não existe.
        </S.Description>
        <S.GoHome>
          <Link href="/">
            <a>Voltar para Home</a>
          </Link>
        </S.GoHome>
      </S.Wrapper>
    </Container>
  </BaseTemplate>
)

export default NotFoundTemplate
