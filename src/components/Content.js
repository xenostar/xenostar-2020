import styled from 'styled-components'

export const Content = styled.div`
  width: 100%;

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

  pre[class*='language-'] {
    margin: 0;
  }
  & > :not(pre) > code[class*='language-'] {
    border-radius: ${props => props.theme.layout.borderRadius};
    padding: ${props => props.theme.spacing.micro};
  }
  .gatsby-highlight {
    margin-bottom: ${props => props.theme.spacing.default};
  }
  .gatsby-highlight pre {
    border-radius: ${props => props.theme.layout.borderRadius};
    padding: ${props => props.theme.spacing.default};
  }
  .gatsby-highlight-code-line {
    background-color: rgba(97, 175, 239, 0.2);
    display: block;
    margin-right: -${props => props.theme.spacing.default};
    margin-left: -${props => props.theme.spacing.default};
    padding-right: ${props => props.theme.spacing.default};
    padding-left: 1.5625rem;
    border-left: 0.3125rem solid rgba(97, 175, 239, 0.5);
  }
`
