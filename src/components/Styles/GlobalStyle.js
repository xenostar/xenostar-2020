import { createGlobalStyle } from 'styled-components'
// import BackgroundImage from 'assets/papyrus.png'
// import BackgroundImage from 'assets/bg.png'
// import BackgroundTop from 'assets/bg_top.png'
// import BackgroundBot from 'assets/bg_bot.png'

export const GlobalStyle = createGlobalStyle`
  html {
    color: #222;
    font-family: 'Open Sans', sans-serif;
    font-size: 1em;
    font-style: normal;
    font-weight: 400;
  }

  body {
    background-color: #fff;
    overflow-y: scroll;
  }

  h1, h2, h3, h4, h5, h6 {
    line-height: 1.5;
  }

  a {
    color: #90c7a8;
    text-decoration: none;
  }

  p, ol, ul {
    font-size: 1.25em;
    font-weight: 300;
    line-height: 1.5;
  }

  ul {
    list-style-position: inside;
    list-style-type: disc;
  }
  ol {
    list-style-position:  inside;
  }

  code {
    background-color: #ED5429;
    border-radius: 3px;
    color: #fff;
    padding: 5px 3px;
  }

  .gatsby-plugin-transition-link-portal {
    cursor: pointer;
  }
`
