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
    font-family: ${props => props.theme.fonts.montserrat};
    line-height: 1.5;
  }

  h1 {
    font-size: ${props => props.theme.fonts.h1Size};
    font-weight: ${props => props.theme.fonts.boldBlack};
  }
  h2 {
    font-size: ${props => props.theme.fonts.h2Size};
    letter-spacing: -1px;
  }
  h3 {
    font-size: ${props => props.theme.fonts.h3Size};
    letter-spacing: -1px;
  }
  h4 {
    font-size: ${props => props.theme.fonts.h4Size};
    letter-spacing: -1px;
  }
  h5 {
    font-size: ${props => props.theme.fonts.h5Size};
  }
  h6 {
    font-size: ${props => props.theme.fonts.h6Size};
  }

  a {
    color: ${props => props.theme.colors.secondary};
    text-decoration: none;
  }

  p, ol, ul {
    font-size: ${props => props.theme.fonts.defaultSize};
    font-weight: ${props => props.theme.fonts.defaultWeight};
    line-height: ${props => props.theme.fonts.defaultLineHeight};
  }

  blockquote {
    border-left: 12px solid #eee;
    padding-top: ${props => props.theme.layout.spacingSmall};
    padding-bottom: ${props => props.theme.layout.spacingSmall};
    padding-left: ${props => props.theme.layout.spacing};
  }

  ul {
    list-style-position: inside;
    list-style-type: disc;
  }
  ol {
    list-style-position:  inside;
  }

  h1, h2, h3, h4, h5, h6,
  blockquote, p, ol, ul, code, pre {
    margin-bottom: ${props => props.theme.layout.spacing};
  }

  pre.hljs {
    border-radius: ${props => props.theme.layout.borderRadius};
    padding: ${props => props.theme.layout.spacing};
    position: relative;
  }
  [data-language]:before {
    content: attr(data-language);
    opacity: 0.25;
    right: ${props => props.theme.layout.spacingTiny};
    position: absolute;
    text-transform: capitalize;
    top: 10px;
  }
`
