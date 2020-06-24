import styled, { css } from 'styled-components'

export const Typography = styled.p`
  ${({ size }) =>
    size === 'h1'
      ? h1
      : size === 'h2'
      ? h2
      : size === 'h3'
      ? h3
      : size === 'h4'
      ? h4
      : size === 'h5'
      ? h5
      : size === 'h6'
      ? h6
      : size === 'p'
      ? p
      : p}
`

const h1 = css`
  font-size: ${props => props.theme.fonts.h1Size};
  font-weight: ${props => props.theme.fonts.boldBlack};
`
const h2 = css`
  font-size: ${props => props.theme.fonts.h2Size};
  letter-spacing: -1px;
`
const h3 = css`
  font-size: ${props => props.theme.fonts.h3Size};
  letter-spacing: -1px;
`
const h4 = css`
  font-size: ${props => props.theme.fonts.h4Size};
  letter-spacing: -1px;
`
const h5 = css`
  font-size: ${props => props.theme.fonts.h5Size};
`
const h6 = css`
  font-size: ${props => props.theme.fonts.h6Size};
`
const p = css`
  font-size: ${props => props.theme.fonts.defaultSize};
  font-weight: ${props => props.theme.fonts.defaultWeight};
  line-height: ${props => props.theme.fonts.defaultLineHeight};
`
