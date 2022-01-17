import styled, { css } from 'styled-components'

export const Wrapper = styled.article`
  max-width: 80rem;
  margin: 0 auto;
`

export const Title = styled.h1`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xlarge};
    margin-bottom: ${theme.spacings.medium};
  `}
`

export const Excerpt = styled.h2`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.medium};
    margin-bottom: ${theme.spacings.medium};
  `}
`

export const Cover = styled.img`
  ${({ theme }) => css`
    margin-bottom: ${theme.spacings.medium};
  `}
`

export const Info = styled.div`
  ${({ theme }) => css`
    display: flex;
    gap: 2rem;
    margin-bottom: ${theme.spacings.xsmall};
  `}
`

export const Date = styled.time``

export const Categories = styled.div`
  display: inline-flex;
  gap: 1rem;
`

export const Tags = styled.div``

export const Demo = styled.p``

export const Description = styled.div`
  letter-spacing: 0.2px;
  line-height: 1.5;
  font-size: 1.8rem;

  p {
    margin-bottom: 4rem;
  }
`
