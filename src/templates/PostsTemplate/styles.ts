import styled, { css } from 'styled-components'
import { Container } from 'components/Container'

export const Wrapper = styled.div``

export const ContainerPosts = styled(Container)`
  display: flex;
  flex-direction: column;
  gap: 2rem;
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
