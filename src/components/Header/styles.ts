import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.header`
  ${({ theme }) => css`
    height: 6rem;
    background-color: ${theme.colors.secondary};
    position: fixed;
    width: 100%;
    z-index: ${theme.layers.aboveAll};
    box-shadow: 0px 0px 15px 5px rgba(0, 0, 0, 0.85);
  `}
`
export const Content = styled.div`
  height: 6rem;
  display: flex;
  align-items: center;
`

export const Logo = styled.img`
  height: 5.5rem;

  ${media.lessThan('small')`
  height: 4rem;
  `}
`

export const Menu = styled.nav`
  ${({ theme }) => css`
    margin-left: auto;
    display: flex;
    align-items: center;
    font-size: 1.8rem;
    letter-spacing: 0.2rem;
    gap: 3rem;

    a {
      color: ${theme.colors.primary};
      transition: ${theme.transitions.faster};

      &:hover {
        filter: brightness(0.7);
      }
    }

    ${media.lessThan('medium')`
      display: none;
    `}
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

export const Dropbtn = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  height: 6rem;

  a svg {
    transition: transform 0.2s ease-in-out;
  }
`

export const DropdownContent = styled.div`
  ${({ theme }) => css`
    display: none;
    flex-direction: column;
    position: absolute;
    background-color: ${theme.colors.background};
    min-width: 260px;
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.8);
    z-index: ${theme.layers.aboveAll};
    top: 6rem;
    right: 0rem;

    a {
      color: ${theme.colors.primary};
      padding: 1.2rem 1.6rem;
      text-align: right;
      font-size: ${theme.font.sizes.normal};
      letter-spacing: 0.2rem;

      &:hover {
        color: ${theme.colors.highlight};
      }
    }
  `}
`
export const Dropdown = styled.div`
  display: flex;
  position: relative;

  &:hover {
  }

  &:hover ${DropdownContent} {
    display: flex;
  }

  &:hover {
    a svg {
      transform: rotate(180deg);
    }
  }
`

// SIDENAV ####################################

type SidenavProps = {
  open?: boolean
  isPortfolioOpen?: boolean
}

export const SidenavContainer = styled.div<SidenavProps>`
  ${({ theme, open }) => css`
    height: calc(100% - 6rem);
    /* width: min(100%, 280px); */
    position: fixed;
    bottom: 0;
    left: -100%;
    z-index: ${theme.layers.layer8};
    background-color: ${theme.colors.black};
    opacity: 1;
    overflow-x: hidden;
    padding: ${theme.spacings.medium};
    transition: left 0.3s ease-in-out;

    ${media.greaterThan('medium')`
      display: none;
    `}

    ${open &&
    `
      left: 0;
    `}
  `}
`
export const shadowBg = styled.div<SidenavProps>`
  ${({ open }) => css`
    background: black;
    width: 100%;
    height: calc(100vh - 6rem);
    opacity: 0;
    transition: opacity 0.2s ease-in-out;
    pointer-events: none;

    ${open &&
    `
      opacity: 0.6;
      display: block;
      pointer-events: initial;
    `}
  `}
`

export const Sidenav = styled.nav`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    opacity: inherit;
    transition: height 0.2s ease-in-out;
    z-index: ${theme.layers.layer9};

    a,
    button {
      font-weight: 700;
      color: ${theme.colors.primary};
      transition: all 0.3s ease-in-out;
      font-size: 2.4rem;
      border: none;
      border-bottom: 2px solid transparent;
      background: transparent;
      margin-bottom: 2rem;

      &:hover {
        filter: brightness(0.6);
      }
    }
  `}
`

export const DropdownBtn = styled.button<SidenavProps>`
  ${({ isPortfolioOpen }) => css`
    text-align: left;

    svg {
      transition: transform 0.2s ease-in-out;
    }

    ${isPortfolioOpen &&
    `
      svg {
        transform: rotate(180deg);
      }
    `}
  `}
`

export const DropdownContainer = styled.div<SidenavProps>`
  ${({ theme, isPortfolioOpen }) => css`
    display: flex;
    max-height: 0;
    overflow: hidden;
    flex-direction: column;
    transition: all 0.4s ease-in-out;

    ${isPortfolioOpen &&
    `
      max-height: 20rem;
      margin-bottom: 2rem;
    `}

    a {
      font-size: ${theme.font.sizes.normal};
      margin-bottom: 1rem;
    }
  `}
`
