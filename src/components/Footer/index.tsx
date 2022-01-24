import { Container } from 'components/Container'
import { Instagram, LinkedinIn } from '@styled-icons/fa-brands'
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
        <S.Socials>
          <a
            href="https://www.instagram.com/srtabiancamelo/"
            target="_blank"
            rel="noreferrer"
          >
            <Instagram />
          </a>

          <a
            href="https://www.linkedin.com/in/bianca-melo-615774140/"
            target="_blank"
            rel="noreferrer"
          >
            <LinkedinIn />
          </a>
        </S.Socials>
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
