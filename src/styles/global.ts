import { createGlobalStyle } from 'styled-components'
import theme from './theme'

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
  }

  body {
    background: ${theme.colors.background};
    color: ${theme.colors.primary};
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif
  }

  body, input, textarea, select, button {
    font: 400 1.6rem "Roboto", sans-serif;
  }

  button{
    cursor: pointer;
  }

  a{
    color: ${theme.colors.highlight};
    text-decoration: none;
  }
`

export default GlobalStyles
