import styled from 'styled-components'

export const Content = styled.div`
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: ${props => props.theme.fonts.montserrat};
    line-height: ${props => props.theme.fonts.defaultLineHeight};
    margin-bottom: ${props => props.theme.spacing.default};
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

  p,
  ol,
  ul {
    font-size: ${props => props.theme.fonts.defaultSize};
    font-weight: ${props => props.theme.fonts.defaultWeight};
    line-height: ${props => props.theme.fonts.defaultLineHeight};
    margin-bottom: ${props => props.theme.spacing.default};
  }

  blockquote {
    border-left: 12px solid #eee;
    margin-bottom: ${props => props.theme.spacing.default};
    padding-top: ${props => props.theme.spacing.small};
    padding-bottom: ${props => props.theme.spacing.small};
    padding-left: ${props => props.theme.spacing.default};
  }

  ul {
    list-style-position: inside;
    list-style-type: disc;
  }
  ol {
    list-style-position: inside;
  }

  code,
  code.hljs {
    background: ${props => props.theme.colors.background.oneDarkPro};
    border-radius: ${props => props.theme.layout.borderRadius};
    display: inline;
    padding: ${props => props.theme.spacing.micro};
    white-space: nowrap;
  }
  pre,
  pre.hljs {
    background: ${props => props.theme.colors.background.oneDarkPro};
    border-radius: ${props => props.theme.layout.borderRadius};
    margin-bottom: ${props => props.theme.spacing.default};
    padding: ${props => props.theme.spacing.default};
    position: relative;
  }
  [data-language]:before {
    content: attr(data-language);
    opacity: 0.25;
    position: absolute;
    right: ${props => props.theme.spacing.tiny};
    text-transform: capitalize;
    top: ${props => props.theme.spacing.tiny};
  }
`
