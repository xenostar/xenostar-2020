import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Grid as Grid_, Row, Section as StyledAboutGrid } from 'components'
import { media } from 'utils'

export const AboutGrid = ({ children }) => (
  <StyledAboutGrid>
    <Row>
      <Grid>{children}</Grid>
    </Row>
  </StyledAboutGrid>
)

AboutGrid.propTypes = {
  children: PropTypes.node
}

const Grid = styled(Grid_)`
  grid-gap: ${props => props.theme.spacing.default};
  ${media.phone`
    grid-gap: ${props => props.theme.spacing.tiny};
    grid-template-columns: repeat(2, 1fr);
  `}
`
