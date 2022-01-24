import styled, { css } from 'styled-components'

export const Wrapper = styled.footer`
  ${({ theme }) => css`
    background-color: ${theme.colors.secondary};
  `}
`
export const Content = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    padding: ${theme.spacings.xhuge} 0;
    gap: 2rem;
    height: 100%;
  `}
`

export const Nav = styled.nav`
  ${({ theme }) => css`
    width: 100%;
    display: flex;
    gap: 2rem;
    justify-content: center;

    a {
      border-bottom: 2px solid transparent;
      transition: ${theme.transitions.faster};
    }

    a:hover {
      border-bottom: 2px solid ${theme.colors.highlight};
    }
  `}
`

export const Socials = styled.div`
  ${({ theme }) => css`
    width: 100%;
    display: flex;
    gap: 2rem;
    justify-content: center;
    color: white;

    a {
      height: 3.5rem;
      width: 3.5rem;
      color: ${theme.colors.primary};
      transition: color 0.2s ease-in-out;

      &:hover {
        color: ${theme.colors.highlight};
      }
    }
  `}
`

export const Developer = styled.div`
  ${({ theme }) => css`
    display: block;
    text-align: center;
    padding-top: ${theme.spacings.large};

    span {
      display: block;
    }
  `}
`
