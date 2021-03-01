import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Section as StyledAboutGrid, Row } from 'components'
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

const Grid = styled.div`
  display: grid;
  grid-gap: ${props => props.theme.spacing.tiny};
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: auto;
  margin-bottom: ${props => props.theme.spacing.default};
  transition: ${props => props.theme.transitions.default};
  width: 100%;
  :hover {
    grid-gap: ${props => props.theme.spacing.default};
  }
  ${media.phone`
    grid-gap: ${props => props.theme.spacing.tiny};
    grid-template-columns: repeat(2, 1fr);
  `}
`
