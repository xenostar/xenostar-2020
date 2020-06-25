import PropTypes from 'prop-types'
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
      : p}
`

Typography.propTypes = {
  size: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6'])
}

const h1 = css`
  font-family: ${props => props.theme.fonts.montserrat};
  font-size: ${props => props.theme.fonts.h1Size};
  font-weight: ${props => props.theme.fonts.boldBlack};
  line-height: ${props => props.theme.fonts.defaultLineHeight};
`
const h2 = css`
  font-family: ${props => props.theme.fonts.montserrat};
  font-size: ${props => props.theme.fonts.h2Size};
  font-weight: ${props => props.theme.fonts.bold};
  letter-spacing: -1px;
  line-height: ${props => props.theme.fonts.defaultLineHeight};
`
const h3 = css`
  font-family: ${props => props.theme.fonts.montserrat};
  font-size: ${props => props.theme.fonts.h3Size};
  font-weight: ${props => props.theme.fonts.bold};
  letter-spacing: -1px;
  line-height: ${props => props.theme.fonts.defaultLineHeight};
`
const h4 = css`
  font-family: ${props => props.theme.fonts.montserrat};
  font-size: ${props => props.theme.fonts.h4Size};
  font-weight: ${props => props.theme.fonts.bold};
  letter-spacing: -1px;
  line-height: ${props => props.theme.fonts.defaultLineHeight};
`
const h5 = css`
  font-family: ${props => props.theme.fonts.montserrat};
  font-size: ${props => props.theme.fonts.h5Size};
  font-weight: ${props => props.theme.fonts.bold};
  line-height: ${props => props.theme.fonts.defaultLineHeight};
`
const h6 = css`
  font-family: ${props => props.theme.fonts.montserrat};
  font-size: ${props => props.theme.fonts.h6Size};
  font-weight: ${props => props.theme.fonts.bold};
  line-height: ${props => props.theme.fonts.defaultLineHeight};
`
const p = css`
  font-size: ${props => props.theme.fonts.defaultSize};
  font-weight: ${props => props.theme.fonts.defaultWeight};
  line-height: ${props => props.theme.fonts.defaultLineHeight};
`
