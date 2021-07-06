import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Grid as Grid_, Row, Section as StyledPortfolioGrid } from 'components'
import { media } from 'utils'

export const PortfolioGrid = ({ children }) => (
  <StyledPortfolioGrid>
    <Row>
      <Grid>{children}</Grid>
    </Row>
  </StyledPortfolioGrid>
)

PortfolioGrid.propTypes = {
  children: PropTypes.node
}

const Grid = styled(Grid_)`
  :hover {
    grid-gap: ${({ theme }) => theme.spacing.default};
  }
  ${media.phone`
    grid-gap: ${({ theme }) => theme.spacing.tiny};
    grid-template-columns: repeat(2, 1fr);
  `}
`
