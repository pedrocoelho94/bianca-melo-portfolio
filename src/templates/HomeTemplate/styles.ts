import styled, { css } from 'styled-components'

export const Section = styled.section`
  ${({ theme }) => css`
    margin-bottom: ${theme.spacings.large};
  `}
`
