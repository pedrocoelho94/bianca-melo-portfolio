import styled, { css } from 'styled-components'

export const Container = styled.div`
  ${({ theme }) => css`
    width: 100%;
    max-width: ${theme.grid.container};
    margin-left: auto;
    margin-right: auto;
    padding-left: calc(${theme.grid.gutter});
    padding-right: calc(${theme.grid.gutter});

    @media (max-width: 480px) {
      padding-left: calc(${theme.grid.gutter} * 0.6);
      padding-right: calc(${theme.grid.gutter}* 0.6);
    }
  `}
`
