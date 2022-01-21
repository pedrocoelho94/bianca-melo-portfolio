import styled, { css } from 'styled-components'

type ScrollProps = {
  showScroll: boolean
}

export const Wrapper = styled.a<ScrollProps>`
  ${({ theme, showScroll }) => css`
    cursor: pointer;
    position: fixed;
    background: ${theme.colors.highlight};
    color: ${theme.colors.white};
    display: flex;
    align-items: center;
    justify-content: center;
    width: 4rem;
    height: 4rem;
    bottom: 1.5rem;
    right: 2rem;
    z-index: ${theme.layers.layer5};
    border-radius: 1rem;
    transition: bottom 0.2s ease-in-out;

    ${!showScroll &&
    `
      bottom: -5rem;
    `};
  `}
`
