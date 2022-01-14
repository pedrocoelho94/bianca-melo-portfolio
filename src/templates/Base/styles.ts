import styled, { css } from 'styled-components'

export const Wrapper = styled.main`
  display: flex;
  min-height: 100vh;
  height: 100%;
  flex-direction: column;
  justify-content: space-between;
`

export const Content = styled.div`
  ${({ theme }) => css`
    height: calc(100vh - 26rem);
    padding: ${theme.spacings.large} 0;
  `}
`
