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

  h1, h2, h3, h4, h5, h6 {
    line-height: 1.5;
  }

  h1 {
    font-family: ${props => props.theme.fonts.montserrat};
    font-weight: 900;
    font-size: 5em;
    /* letter-spacing: 0; */
    user-select: none;
  }
  h2 {
    font-family: ${props => props.theme.fonts.montserrat};
    font-size: 2.5em;
    user-select: none;
  }
  h3 {
    font-family: ${props => props.theme.fonts.montserrat};
    font-size: 2em;
    user-select: none;
  }
  h4 {
    font-family: ${props => props.theme.fonts.montserrat};
    font-size: 1.5em;
    user-select: none;
  }
  h5 {
    font-family: ${props => props.theme.fonts.montserrat};
    font-size: 1.25em;
    font-weight: 800;
    text-transform: uppercase;
    user-select: none;
  }
  h6 {
    font-size: 1em;
    font-weight: 800;
    text-transform: uppercase;
    user-select: none;
  }

  a {
    color: ${props => props.theme.colors.secondary};
    text-decoration: none;
  }

  p, ol, ul {
    font-size: ${props => props.theme.fonts.defaultSize};
    font-weight: ${props => props.theme.fonts.defaultWeight};
    line-height: ${props => props.theme.fonts.lineHeight};
  }

  ul {
    list-style-position: inside;
    list-style-type: disc;
  }
  ol {
    list-style-position:  inside;
  }

  code {
    background-color: ${props => props.theme.colors.secondary};
    border-radius: ${props => props.theme.layout.borderRadius};
    color: ${props => props.theme.colors.white};
    padding: ${props => props.theme.layout.padding};
  }

  .gatsby-plugin-transition-link-portal {
    cursor: pointer;
  }
`
