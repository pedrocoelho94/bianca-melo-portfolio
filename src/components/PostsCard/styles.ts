import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    max-width: ${theme.grid.maxContent};
    margin: 0 auto;

    & + div {
      padding-top: ${theme.spacings.xlarge};
      border-top: 1px solid ${theme.colors.primary};
    }
  `}
`
export const Date = styled.time`
  ${({ theme }) => css`
    display: inline-block;
    margin-bottom: ${theme.spacings.xsmall};
  `}
`

export const Title = styled.h1`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.medium};
    color: ${theme.colors.primary};
    margin-bottom: ${theme.spacings.small};

    &:hover {
      color: ${theme.colors.highlight};
    }
  `}
`

export const Excerpt = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.primary};
    margin-bottom: ${theme.spacings.xlarge};
  `}
`
