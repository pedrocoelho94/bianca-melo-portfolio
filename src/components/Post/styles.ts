import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.article`
  max-width: 80rem;
  margin: 0 auto;
`

export const Title = styled.h1`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xlarge};
    margin-bottom: ${theme.spacings.medium};

    ${media.lessThan('small')`
      font-size: ${theme.font.sizes.large};
    `}
  `}
`

export const Excerpt = styled.h2`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.medium};
    margin-bottom: ${theme.spacings.medium};

    ${media.lessThan('small')`
      font-size: ${theme.font.sizes.normal};
    `}
  `}
`

export const Cover = styled.img`
  ${({ theme }) => css`
    margin-bottom: ${theme.spacings.medium};
    max-height: 350px;
    object-fit: cover;
  `}
`

export const Info = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;

  ${media.lessThan('small')`
    flex-direction: column;
    align-items: flex-start;
    gap: 0;
  `}
`

export const Date = styled.time``

export const Categories = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
`

export const Tags = styled.div`
  display: flex;
  gap: 1rem;
`

export const Demo = styled.p`
  ${({ theme }) => css`
    padding: ${theme.spacings.medium} ${theme.spacings.medium};
    background: ${theme.colors.secondary};
    border-radius: 1rem;
    margin: ${theme.spacings.medium} 0;
    font-weight: bold;
    font-size: ${theme.font.sizes.normal};
    letter-spacing: 0.2rem;
    transition: filter 0.2s ease-in-out;

    a:hover {
      filter: brightness(0.8);
    }
  `}
`

export const Description = styled.div`
  ${({ theme }) => css`
    letter-spacing: 0.2px;
    line-height: 1.5;
    font-size: ${theme.font.sizes.normal};

    ${media.lessThan('small')`
      font-size: ${theme.font.sizes.small};
    `}

    p {
      margin-bottom: 4rem;
    }
  `}
`
