import { Container } from 'components/Container'
import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.div``

export const ContainerPosts = styled(Container)`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`

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
export const ButtonContainer = styled.div`
  ${({ theme }) => css`
    padding: 0 ${theme.spacings.large};
    margin: ${theme.spacings.large} 0;
    display: flex;
    justify-content: center;
  `}
`

export const Button = styled.button`
  ${({ theme }) => css`
    background: ${theme.colors.highlight};
    color: ${theme.colors.white};
    border: none;
    padding: ${theme.spacings.small} ${theme.spacings.large};
    border-radius: 5px;
    cursor: pointer;

    &:disabled {
      background: ${theme.colors.secondary};
      cursor: initial;
    }
  `}
`
