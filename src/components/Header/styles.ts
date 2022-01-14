import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.header`
  ${({ theme }) => css`
    height: 6rem;
    background-color: ${theme.colors.secondary};
  `}
`
export const Content = styled.div`
  height: 6rem;
  display: flex;
  align-items: center;
`

export const Logo = styled.img`
  height: 5.5rem;
`

export const Menu = styled.nav`
  margin-left: auto;
  display: flex;
  gap: 2rem;
  ${media.lessThan('medium')`
    display: none;
  `}
`
export const NavIcon = styled.div`
  margin-left: auto;
  cursor: pointer;
  background: none;

  ${media.greaterThan('medium')`
    display: none;
  `}
`

type OpenProps = {
  open: boolean
}

export const Line = styled.span<OpenProps>`
  ${({ theme, open }) => css`
    display: block;
    border-radius: 50px;
    width: 25px;
    height: 3px;
    margin: 5px;
    background-color: ${theme.colors.white};
    transition: ${theme.transitions.faster};

    :nth-child(2) {
      width: ${open ? '35%' : '70%'};
    }

    :nth-child(3) {
      width: ${open ? '55%' : '70%'};
    }
  `}
`
const MenuMobileModifers = {
  open: () => css`
    height: calc(100vh - 6rem);
  `
}

export const MenuMobile = styled.nav<OpenProps>`
  ${({ theme, open }) => css`
    position: absolute;
    width: 100%;
    height: 0;
    background-color: ${theme.colors.highlight};
    transition: height 0.3s ease-in-out;

    ${open && MenuMobileModifers.open()}
    ${media.greaterThan('medium')`
      display: none;
    `}
  `}
`
export const MenuMobileLinks = styled.div<OpenProps>`
  ${({ theme, open }) => css`
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    gap: 5rem;

    a {
      font-weight: 700;
      color: ${theme.colors.background};
      pointer-events: ${open ? 'initial' : 'none'};
      opacity: ${open ? 1 : 0};
      transition: all 0.3s ease-in-out;
      font-size: 2.4rem;
      border-bottom: 3px solid transparent;

      &:hover {
        border-bottom: 3px solid ${theme.colors.background};
      }
    }
  `}
`