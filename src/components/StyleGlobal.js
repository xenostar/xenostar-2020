import { createGlobalStyle } from 'styled-components'

export const StyleGlobal = createGlobalStyle`
  html {
    color: ${({ theme }) => theme.palette.text.primary};
    font-family: ${({ theme }) => theme.fonts.family.openSans};
    font-size: 1em;
    font-style: ${({ theme }) => theme.fonts.defaults.style};
    font-weight: ${({ theme }) => theme.fonts.defaults.weight};
  }

  body {
    background-color: ${({ theme }) => theme.palette.background.default};
    overflow-y: scroll;
  }

  a {
    color: ${({ theme }) => theme.palette.text.primary};
    text-decoration: none;
  }
`
