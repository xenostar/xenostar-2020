import PropTypes from 'prop-types'
import styled from 'styled-components'
import { media } from 'utils'

export const Row = styled.div`
  align-items: ${({ align }) => align ?? 'stretch'};
  display: flex;
  flex-direction: ${({ direction }) => direction ?? 'row'};
  flex-wrap: ${({ wrap }) => wrap ?? 'wrap'};
  justify-content: ${({ justify }) => justify ?? 'space-between'};
  max-width: ${({ theme }) => theme.layout.maxWidthFixedUltrawide};
  width: ${({ width }) => width ?? '100%'};
  ${media.ultrawide`
    max-width: ${({ theme }) => theme.layout.maxWidthFixed};
  `}
`

Row.propTypes = {
  align: PropTypes.oneOf([
    'stretch',
    'center',
    'flex-start',
    'flex-end',
    'baseline',
    'initial',
    'inherit'
  ]),
  direction: PropTypes.oneOf(['row', 'row-reverse']),
  wrap: PropTypes.oneOf(['nowrap', 'wrap', 'wrap-reverse']),
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
