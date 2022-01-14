import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.div``

export const AboutContainer = styled.div`
  text-align: center;
  max-width: 90rem;
  margin: 0 auto;
`

export const Welcome = styled.h1`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xlarge};
    text-align: center;
    margin-top: ${theme.spacings.large};
    letter-spacing: 0.05rem;

    ${media.lessThan('medium')`
      font-size: ${theme.font.sizes.large};
    `}
  `}
`

export const AboutInfo = styled.p`
  ${({ theme }) => css`
    margin-top: ${theme.spacings.medium};
    font-size: ${theme.font.sizes.medium};
    line-height: ${theme.font.sizes.large};

    ${media.lessThan('medium')`
      font-size: ${theme.font.sizes.normal};
      line-height: ${theme.font.sizes.medium};
    `}
  `}
`

export const AboutImage = styled.img`
  width: 100%;
  border-radius: 50%;
  max-width: 25rem;
`
