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
    font-family: "Source Sans Pro", Helvetica, Arial, sans-serif
  }

  body, input, textarea, select, button {
    font: 400 1.6rem "Roboto", sans-serif;
  }

  img{
    width: 100%;
  }

  @media (max-width: 235px){
    html {
      font-size: 50%;
    }
  }

  @media (max-width: 180px){
    html {
      font-size: 43.75%;
    }
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
