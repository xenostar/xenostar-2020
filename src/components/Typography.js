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
  margin-bottom: ${props => props.mb && props.theme.spacing.default};
  ${({ noWrap }) => noWrap && noWrapText};
`

Typography.propTypes = {
  size: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6']),
  noWrap: PropTypes.bool
}

const h1 = css`
  font-family: ${props => props.theme.fonts.family.montserrat};
  font-size: ${props => props.theme.fonts.size.h1};
  font-weight: ${props => props.theme.fonts.weight.blackBold};
  line-height: ${props => props.theme.fonts.defaults.lineHeight};
`
const h2 = css`
  font-family: ${props => props.theme.fonts.family.montserrat};
  font-size: ${props => props.theme.fonts.size.h2};
  font-weight: ${props => props.theme.fonts.weight.bold};
  letter-spacing: -1px;
  line-height: ${props => props.theme.fonts.defaults.lineHeight};
`
const h3 = css`
  font-family: ${props => props.theme.fonts.family.montserrat};
  font-size: ${props => props.theme.fonts.size.h3};
  font-weight: ${props => props.theme.fonts.weight.bold};
  letter-spacing: -1px;
  line-height: ${props => props.theme.fonts.defaults.lineHeight};
`
const h4 = css`
  font-family: ${props => props.theme.fonts.family.montserrat};
  font-size: ${props => props.theme.fonts.size.h4};
  font-weight: ${props => props.theme.fonts.weight.bold};
  letter-spacing: -1px;
  line-height: ${props => props.theme.fonts.defaults.lineHeight};
`
const h5 = css`
  font-family: ${props => props.theme.fonts.family.montserrat};
  font-size: ${props => props.theme.fonts.size.h5};
  font-weight: ${props => props.theme.fonts.weight.bold};
  line-height: ${props => props.theme.fonts.defaults.lineHeight};
`
const h6 = css`
  font-family: ${props => props.theme.fonts.family.montserrat};
  font-size: ${props => props.theme.fonts.size.h6};
  font-weight: ${props => props.theme.fonts.weight.bold};
  line-height: ${props => props.theme.fonts.defaults.lineHeight};
`
const p = css`
  font-size: ${props => props.theme.fonts.defaults.size};
  font-weight: ${props => props.theme.fonts.defaults.weight};
  line-height: ${props => props.theme.fonts.defaults.lineHeight};
`
const noWrapText = css`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`
