import styled, { css } from 'styled-components'

export const Wrapper = styled.footer`
  ${({ theme }) => css`
    height: 20rem;
    background-color: ${theme.colors.secondary};
  `}
`
export const Content = styled.div`
  ${({ theme }) => css`
    height: 20rem;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    padding: ${theme.spacings.large} 0;
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

export const Developer = styled.div`
  display: block;
  text-align: center;

  span {
    display: block;
  }
`
