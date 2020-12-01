import PropTypes from 'prop-types'
import styled from 'styled-components'

export const Col = styled.div`
  align-items: ${({ align }) => align ?? 'flex-start'};
  display: flex;
  flex-direction: ${({ direction }) => direction ?? 'column'};
  justify-content: ${({ justify }) => justify ?? 'flex-start'};
  margin-bottom: ${props => props.theme.layout.spacing.default};
  width: ${({ width }) => width ?? '100%'};
  *:last-child {
    margin-bottom: 0;
  }
`

Col.propTypes = {
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
  justify: PropTypes.oneOf([
    'justify-content',
    'flex-start',
    'flex-end',
    'center',
    'space-between',
    'space-around',
    'initial',
    'inherit'
  ]),
  width: PropTypes.string
}
