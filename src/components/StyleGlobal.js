import { createGlobalStyle } from 'styled-components'

export const StyleGlobal = createGlobalStyle`
  html {
    color: ${props => props.theme.palette.secondary};
    font-family: ${props => props.theme.fonts.family.openSans};
    font-size: 1em;
    font-style: ${props => props.theme.fonts.defaults.style};
    font-weight: ${props => props.theme.fonts.defaults.weight};
  }

  body {
    background-color: ${props => props.theme.palette.background.default};
    overflow-y: scroll;
  }

  a {
    color: ${props => props.theme.palette.secondary};
    text-decoration: none;
  }
`
