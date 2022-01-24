import styled, { css } from 'styled-components'

export const Wrapper = styled.div``

export const ContainerPosts = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: 2rem;
    margin: 0 auto;
    max-width: ${theme.grid.maxContent};
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

export const PostContainer = styled.div``

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
