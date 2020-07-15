import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Section as StyledPortfolioGrid, Row as Row_ } from 'components'
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

const Row = styled(Row_)`
  max-width: 62.5rem; /* 1000px */
`
const Grid = styled.div`
  display: grid;
  grid-gap: 1px;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: auto;
  padding-bottom: ${props => props.theme.layout.spacing};
  transition: ${props => props.theme.transitions.default};
  width: 100%;
  :hover {
    grid-gap: ${props => props.theme.layout.spacing};
  }
  ${media.phone`
    grid-gap: ${props => props.theme.layout.spacingTiny};
    grid-template-columns: repeat(2, 1fr);
  `}
`
