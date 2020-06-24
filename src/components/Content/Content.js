import styled from 'styled-components'

export const Content = styled.div`
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

  p,
  ol,
  ul {
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
    list-style-position: inside;
  }

  pre.hljs {
    border-radius: ${props => props.theme.layout.borderRadius};
    padding: ${props => props.theme.layout.spacing};
    position: relative;
  }
  [data-language]:before {
    content: attr(data-language);
    opacity: 0.25;
    position: absolute;
    right: ${props => props.theme.layout.spacingTiny};
    text-transform: capitalize;
    top: ${props => props.theme.layout.spacingTiny};
  }
`
