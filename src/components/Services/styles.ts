import styled from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  align-self: center;
  justify-self: center;

  ${media.lessThan('large')`
    grid-template-columns: repeat(3, 1fr);
  `}

  ${media.lessThan('medium')`
    grid-template-columns: repeat(2, 1fr);
  `}

  ${media.lessThan('small')`
    grid-template-columns: 1fr;
  `}

  div {
    justify-self: center;
  }
`
