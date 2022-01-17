import styled, { css } from 'styled-components'
import media from 'styled-media-query'

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

    ${media.lessThan('small')`
    padding-left: calc(${theme.grid.gutter} * 0.4);
      padding-right: calc(${theme.grid.gutter}* 0.4);
    `}
  `}
`
