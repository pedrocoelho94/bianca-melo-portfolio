import styled, { css } from 'styled-components'

export const Overlay = styled.div`
  ${({ theme }) => css`
    position: absolute;
    background: ${theme.colors.highlight};
    height: 0;
    width: 100%;
    bottom: 0;
    left: 0;
    right: 0;
    transition: height 0.4s ease-in-out;
  `}
`

export const Wrapper = styled.div`
  ${({ theme }) => css`
    height: 25rem;
    width: 100%;
    position: relative;

    a {
      padding: 5rem 0 2rem;
      height: 100%;
      cursor: pointer;
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      font-size: ${theme.font.sizes.medium};

      svg,
      span {
        transition: color 0.4s ease-in-out;
        z-index: ${theme.layers.layer1};
      }

      > svg {
        color: ${theme.colors.highlight};
      }

      span {
        text-align: center;
        color: ${theme.colors.primary};
      }
    }

    &:hover {
      ${Overlay} {
        width: 100%;
        height: 25rem;
      }

      a {
        svg,
        span {
          color: ${theme.colors.gray1};
        }
      }
    }
  `}
`
