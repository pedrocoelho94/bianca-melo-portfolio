import styled, { css } from 'styled-components'

export const Wrapper = styled.div``

export const Title = styled.h1`
  ${({ theme }) => css`
    margin-bottom: ${theme.spacings.large};
    padding-bottom: ${theme.spacings.xsmall};
    border-bottom: 1px solid ${theme.colors.primary};
    text-transform: capitalize;
  `}
`
