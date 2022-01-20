import { Container } from 'components/Container'
import Link from 'next/link'
import * as S from './styles'

const Footer = () => (
  <S.Wrapper>
    <Container>
      <S.Content>
        <S.Nav>
          <Link href="/portfolio">
            <a>Portfolio</a>
          </Link>
          <Link href="/posts">
            <a>Blog</a>
          </Link>
          <Link href="/contato">
            <a>Contato</a>
          </Link>
        </S.Nav>
        <S.Developer>
          <span>Desenvolvido por </span>
          <a
            href="https://github.com/pedrocoelho94"
            target="_blank"
            rel="noreferrer"
          >
            Pedro Coelho
          </a>
        </S.Developer>
      </S.Content>
    </Container>
  </S.Wrapper>
)

export default Footer
