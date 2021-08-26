import styled from 'styled-components'

export const Content = styled.div`
  width: 100%;

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: ${({ theme }) => theme.fonts.family.montserrat};
    line-height: ${({ theme }) => theme.fonts.defaults.lineHeight};
    margin-bottom: ${({ theme }) => theme.spacing.default};
  }

  h1 {
    font-size: ${({ theme }) => theme.fonts.size.h1};
    font-weight: ${({ theme }) => theme.fonts.weight.blackBold};
  }
  h2 {
    font-size: ${({ theme }) => theme.fonts.size.h2};
    letter-spacing: -1px;
  }
  h3 {
    font-size: ${({ theme }) => theme.fonts.size.h3};
    letter-spacing: -1px;
  }
  h4 {
    font-size: ${({ theme }) => theme.fonts.size.h4};
    letter-spacing: -1px;
  }
  h5 {
    font-size: ${({ theme }) => theme.fonts.size.h5};
  }
  h6 {
    font-size: ${({ theme }) => theme.fonts.size.h6};
  }

  p,
  ol,
  ul {
    font-size: ${({ theme }) => theme.fonts.defaults.size};
    font-weight: ${({ theme }) => theme.fonts.defaults.weight};
    line-height: ${({ theme }) => theme.fonts.defaults.lineHeight};
    margin-bottom: ${({ theme }) => theme.spacing.default};
  }

  blockquote {
    border-left: 12px solid #eee;
    margin-bottom: ${({ theme }) => theme.spacing.default};
    padding-top: ${({ theme }) => theme.spacing.small};
    padding-bottom: ${({ theme }) => theme.spacing.small};
    padding-left: ${({ theme }) => theme.spacing.small};
  }

  ul {
    margin-left: 1em;
    list-style-type: disc;
  }
  ol {
    margin-left: 1em;
  }

  & > :not(pre) > code[class*='language-'] {
    border-radius: ${({ theme }) => theme.shape.borderRadius.default};
    padding: ${({ theme }) => theme.spacing.atom};
  }
  .gatsby-highlight {
    background-color: ${({ theme }) => theme.palette.background.oneDarkPro};
    border-radius: ${({ theme }) => theme.shape.borderRadius.default};
    margin-bottom: ${({ theme }) => theme.spacing.default};
    margin-left: ${({ theme }) => theme.spacing.default};
    margin-right: ${({ theme }) => theme.spacing.default};
    overflow: auto;
    padding: ${({ theme }) => theme.spacing.default};
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
    margin-left: -${({ theme }) => theme.spacing.default};
    margin-right: -${({ theme }) => theme.spacing.default};
    padding-left: 1.5625rem;
    padding-right: ${({ theme }) => theme.spacing.default};
  }
`
