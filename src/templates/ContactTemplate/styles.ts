import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  min-height: 50rem;
  max-width: 80rem;
  margin: 0 auto;
`

export const Title = styled.h1`
  ${({ theme }) => css`
    margin-bottom: ${theme.spacings.large};
    padding-bottom: ${theme.spacings.xsmall};
    border-bottom: 1px solid ${theme.colors.primary};
    text-transform: capitalize;
    margin-bottom: 2rem;
  `}
`
export const Description = styled.p`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.normal};
  `}
`
