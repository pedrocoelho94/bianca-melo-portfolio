import { Container } from 'components/Container'
import HeaderLink from 'components/HeaderLink'
import Link from 'next/link'
import { useState } from 'react'
import * as S from './styles'

const Header = () => {
  const [toggle, setToggle] = useState(false)

  return (
    <S.Wrapper>
      <Container>
        <S.Content>
          <Link href="/" prefetch={false}>
            <a onClick={() => setToggle(false)}>
              <S.Logo src="/img/biancaMelo.svg" alt="Logo" />
            </a>
          </Link>
          <S.Menu>
            <HeaderLink href="/portfolio">Portfolio</HeaderLink>
            <HeaderLink href="/posts">Blog</HeaderLink>
            <HeaderLink href="/contato">Contato</HeaderLink>
          </S.Menu>

          <S.NavIcon
            onClick={() => setToggle(!toggle)}
            title={toggle ? 'Fechar menu' : 'Abrir menu'}
          >
            <S.Line open={toggle} />
            <S.Line open={toggle} />
            <S.Line open={toggle} />
          </S.NavIcon>
        </S.Content>
      </Container>

      <S.MenuMobile open={toggle}>
        <S.MenuMobileLinks open={toggle}>
          <HeaderLink href="/portfolio">Portfolio</HeaderLink>
          <HeaderLink href="/posts">Blog</HeaderLink>
          <HeaderLink href="/contato">Contato</HeaderLink>
        </S.MenuMobileLinks>
      </S.MenuMobile>
    </S.Wrapper>
  )
}

export default Header
