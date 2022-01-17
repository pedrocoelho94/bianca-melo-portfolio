import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.div``

export const GridContaner = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 5rem;

  ${media.lessThan('large')`
    grid-template-columns: repeat(2, 1fr);
  `}

  ${media.lessThan('medium')`
    grid-template-columns: 1fr;
  `}
`
export const Title = styled.h1`
  ${({ theme }) => css`
    margin-bottom: ${theme.spacings.large};
    padding-bottom: ${theme.spacings.xsmall};
    border-bottom: 1px solid ${theme.colors.primary};
    text-transform: capitalize;
  `}
`
