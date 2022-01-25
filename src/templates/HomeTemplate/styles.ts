import styled, { css } from 'styled-components'
import media from 'styled-media-query'
import { GridContaner } from 'templates/PortfolioTemplate/styles'

export const Section = styled.section`
  ${({ theme }) => css`
    margin-bottom: ${theme.spacings.xhuge};
  `}
`
export const GridHomeContainer = styled(GridContaner)``

export const SectionTitle = styled.div`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: end;
    margin-bottom: ${theme.spacings.large};
    padding-bottom: ${theme.spacings.xsmall};
    border-bottom: 1px solid ${theme.colors.primary};
    text-transform: capitalize;
  `}
`

export const Title = styled.h2``

export const More = styled.span`
  justify-self: end;

  a {
    transition: filter 0.2s ease-in-out;
  }

  a:hover {
    filter: brightness(0.8);
  }
`

export const PostContainer = styled.div`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: 1fr 2fr;
    background: ${theme.colors.secondary};
    border-radius: 1rem;
    box-shadow: 5px 5px 10px 0px rgba(0, 0, 0, 0.5);

    ${media.lessThan('medium')`
    grid-template-columns: 1fr;
    `}
  `}
`
export const Cover = styled.img`
  border-radius: 1rem 0 0 1rem;
  height: 30rem;
  object-fit: cover;

  ${media.lessThan('medium')`
    height: 20rem;
    border-radius: 1rem 1rem 0 0;
  `}
`

export const InfoContent = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0 ${theme.spacings.medium};
    gap: 2rem;

    ${media.lessThan('medium')`
      padding: ${theme.spacings.medium};
    `}
  `}
`

export const TitlePost = styled.h2``

export const ExcerptPost = styled.p``

export const Link = styled.span`
  a {
    transition: filter 0.2s ease-in-out;

    &:hover {
      filter: brightness(0.8);
    }
  }
`
