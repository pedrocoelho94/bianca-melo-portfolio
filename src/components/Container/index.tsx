import styled, { css } from 'styled-components'
import media, { generateMedia } from 'styled-media-query'

const customMedia = generateMedia({
  tiny: '360px'
})

export const Container = styled.div`
  ${({ theme }) => css`
    width: 100%;
    max-width: ${theme.grid.container};
    margin-left: auto;
    margin-right: auto;
    padding-left: calc(${theme.grid.gutter});
    padding-right: calc(${theme.grid.gutter});

    ${media.lessThan('medium')`
      padding-left: calc(${theme.grid.gutter} * 0.6);
      padding-right: calc(${theme.grid.gutter}* 0.6);
    `}

    ${customMedia.lessThan('tiny')`
      padding-left: calc(${theme.grid.gutter} * 0.3);
      padding-right: calc(${theme.grid.gutter}* 0.3);
    `}
  `}
`
