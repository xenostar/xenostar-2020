import PropTypes from 'prop-types'
import styled from 'styled-components'

export const Section = styled.section`
  align-items: ${({ align }) => align ?? 'center'};
  display: flex;
  flex-direction: ${({ direction }) => direction ?? 'column'};
  padding-top: ${({ theme }) => theme.spacing.huge};
  padding-right: ${({ theme }) => theme.spacing.default};
  padding-bottom: ${({ theme }) => theme.spacing.big};
  padding-left: ${({ theme }) => theme.spacing.default};
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
