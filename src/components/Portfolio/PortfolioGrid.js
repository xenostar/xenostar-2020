import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Section as StyledPortfolioGrid, Row } from 'components'
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

const Grid = styled.div`
  display: grid;
  grid-gap: 1px;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: auto;
  padding-bottom: ${props => props.theme.spacing.default};
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
