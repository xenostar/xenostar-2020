import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  html {
    color: ${props => props.theme.colors.secondary};
    font-family: ${props => props.theme.fonts.openSans};
    font-size: 1em;
    font-style: ${props => props.theme.fonts.defaultStyle};
    font-weight: ${props => props.theme.fonts.defaultWeight};
  }

  body {
    background-color: ${props => props.theme.colors.background};
    overflow-y: scroll;
  }

  a {
    color: ${props => props.theme.colors.secondary};
    text-decoration: none;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: ${props => props.theme.fonts.montserrat};
    line-height: 1.5;
  }

  h1, h2, h3, h4, h5, h6,
  blockquote, p, ol, ul, code, pre {
    margin-bottom: ${props => props.theme.layout.spacing};
  }
`
