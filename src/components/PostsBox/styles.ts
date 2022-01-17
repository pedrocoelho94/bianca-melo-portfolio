import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    background: ${theme.colors.secondary};
    border-radius: 1rem;
    box-shadow: 5px 5px 15px 0px rgba(0, 0, 0, 0.6);
  `}
`
export const CoverContainer = styled.div``

export const Cover = styled.img`
  border-radius: 1rem 1rem 0 0;
  object-fit: cover;
  height: 220px;
`
export const Content = styled.div`
  ${({ theme }) => css`
    padding: ${theme.spacings.medium};
  `}
`
export const Date = styled.time``

export const Category = styled.div`
  ${({ theme }) => css`
    margin-top: ${theme.spacings.xsmall};
    display: flex;
    gap: 1rem;

    a {
      transition: all 0.2s ease-in-out;

      &:hover {
        filter: brightness(0.8);
      }
    }
  `}
`
export const Title = styled.h1`
  ${({ theme }) => css`
    margin-top: ${theme.spacings.small};
    font-size: 2.8rem;

    a {
      color: ${theme.colors.primary};

      &:hover {
        filter: brightness(0.8);
      }
    }
  `}
`

export const Excerpt = styled.p`
  ${({ theme }) => css`
    margin-top: ${theme.spacings.small};
    font-size: 1.8rem;

    a {
      color: ${theme.colors.primary};

      &:hover {
        filter: brightness(0.8);
      }
    }
  `}
`
