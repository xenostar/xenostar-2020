import styled from 'styled-components'

export const Content = styled.div`
  width: 100%;

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: ${props => props.theme.fonts.family.montserrat};
    line-height: ${props => props.theme.fonts.defaultLineHeight};
    margin-bottom: ${props => props.theme.spacing.default};
  }

  h1 {
    font-size: ${props => props.theme.fonts.size.h1};
    font-weight: ${props => props.theme.fonts.weight.blackBold};
  }
  h2 {
    font-size: ${props => props.theme.fonts.size.h2};
    letter-spacing: -1px;
  }
  h3 {
    font-size: ${props => props.theme.fonts.size.h3};
    letter-spacing: -1px;
  }
  h4 {
    font-size: ${props => props.theme.fonts.size.h4};
    letter-spacing: -1px;
  }
  h5 {
    font-size: ${props => props.theme.fonts.size.h5};
  }
  h6 {
    font-size: ${props => props.theme.fonts.size.h6};
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
    margin-left: 1em;
    list-style-type: disc;
  }
  ol {
    margin-left: 1em;
  }

  & > :not(pre) > code[class*='language-'] {
    border-radius: ${props => props.theme.shape.borderRadius.default};
    padding: ${props => props.theme.spacing.micro};
  }
  .gatsby-highlight {
    background-color: ${props => props.theme.colors.background.oneDarkPro};
    border-radius: ${props => props.theme.shape.borderRadius.default};
    margin-bottom: ${props => props.theme.spacing.default};
    overflow: auto;
    padding: ${props => props.theme.spacing.default};
  }
  .gatsby-highlight pre {
    background-color: transparent;
    float: left;
    margin: 0;
    min-width: 100%;
    overflow: initial;
    padding: 0;
  }
  .gatsby-highlight-code-line {
    background-color: rgba(97, 175, 239, 0.2);
    border-left: 0.3125rem solid rgba(97, 175, 239, 0.5);
    display: block;
    margin-left: -${props => props.theme.spacing.default};
    margin-right: -${props => props.theme.spacing.default};
    padding-left: 1.5625rem;
    padding-right: ${props => props.theme.spacing.default};
  }
`
