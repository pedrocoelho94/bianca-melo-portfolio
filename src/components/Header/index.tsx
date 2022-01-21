import { Container } from 'components/Container'
import HeaderLink from 'components/HeaderLink'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { KeyboardArrowDown } from '@styled-icons/material-outlined'

import * as S from './styles'

const portfolioCat = [
  {
    title: 'Reportagens Multimídia',
    slug: 'reportagens-multimidia'
  },
  {
    title: 'Artes Gráficas',
    slug: 'artes-graficas'
  },
  {
    title: 'Ensaios Fotográficos',
    slug: 'ensaios-fotograficos'
  },
  {
    title: 'Rádio e Podcast',
    slug: 'radio-e-podcastt'
  },
  {
    title: 'Artigos Acadêmicos',
    slug: 'artigos-academicos'
  },
  {
    title: 'Produções Audiovisuais',
    slug: 'producoes-audiovisuais'
  }
]

const Header = () => {
  const [toggle, setToggle] = useState(false)
  const [isPortfolioOpen, setIsPortfolioOpen] = useState(false)

  useEffect(() => {
    setIsPortfolioOpen(false)
    setToggle(false)
  }, [])

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
            <S.Dropdown>
              <S.Dropbtn>
                <HeaderLink href="/portfolio">
                  Portfólio <KeyboardArrowDown size={24} />
                </HeaderLink>
              </S.Dropbtn>
              <S.DropdownContent>
                {portfolioCat.map((cat) => (
                  <HeaderLink
                    key={`cat-${cat.slug}`}
                    href={`/portfolio/cat/${cat.slug}`}
                  >
                    {cat.title}
                  </HeaderLink>
                ))}
              </S.DropdownContent>
            </S.Dropdown>

            <HeaderLink href="/posts">Posts</HeaderLink>
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

      <S.SidenavContainer open={toggle}>
        <S.Sidenav>
          <S.DropdownBtn
            isPortfolioOpen={isPortfolioOpen}
            onClick={() => setIsPortfolioOpen(!isPortfolioOpen)}
          >
            Portfolio <KeyboardArrowDown size={24} />{' '}
          </S.DropdownBtn>

          <S.DropdownContainer isPortfolioOpen={isPortfolioOpen}>
            {portfolioCat.map((cat) => (
              <HeaderLink
                key={`cat-${cat.slug}`}
                href={`/portfolio/cat/${cat.slug}`}
              >
                {cat.title}
              </HeaderLink>
            ))}
          </S.DropdownContainer>

          <HeaderLink href="/posts">Blog</HeaderLink>
          <HeaderLink href="/contato">Contato</HeaderLink>
        </S.Sidenav>
      </S.SidenavContainer>

      <S.shadowBg open={toggle} onClick={() => setToggle(false)} />
    </S.Wrapper>
  )
}

export default Header
