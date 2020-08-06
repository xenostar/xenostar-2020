import PropTypes from 'prop-types'
import styled from 'styled-components'

export const Section = styled.section`
  align-items: ${({ align }) => align ?? 'center'};
  display: flex;
  flex-direction: ${({ direction }) => direction ?? 'column'};
  padding-top: ${props => props.theme.layout.spacingHuge};
  padding-right: ${props => props.theme.layout.spacing};
  padding-bottom: ${props => props.theme.layout.spacingBig};
  padding-left: ${props => props.theme.layout.spacing};
  width: ${({ width }) => width ?? '100%'};
`

Section.propTypes = {
  align: PropTypes.oneOf([
    'stretch',
    'center',
    'flex-start',
    'flex-end',
    'baseline',
    'initial',
    'inherit'
  ]),
  direction: PropTypes.oneOf(['column', 'column-reverse']),
  width: PropTypes.string
}
