import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  height: calc(100vh - 17rem);
`
export const Title = styled.h1`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.huge};
  `}
`

export const Description = styled.p`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.medium};
  `}
`
export const GoHome = styled.div`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.medium};
    transition: filter 0.2s ease-in-out;

    &:hover {
      filter: brightness(0.8);
    }
  `}
`
