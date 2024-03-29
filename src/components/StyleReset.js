import { createGlobalStyle } from 'styled-components'

export const StyleReset = createGlobalStyle`
  html {
    box-sizing: border-box;
    line-height: normal;
  }

  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }

  audio,canvas,iframe,
  img,svg,video {
    vertical-align: middle;
  }

  html,blockquote,body,div,ol,ul,iframe,
  header,nav,section,aside,footer,
  h1,h2,h3,h4,h5,h6,p,blockquote,pre,
  button,fieldset,input,label,select,textarea {
    display: block;
    border: 0;
    margin: 0;
    outline: 0;
    padding: 0;
    vertical-align: top;
  }

  img {
    display: block;
    max-width: 100%;
  }
`
