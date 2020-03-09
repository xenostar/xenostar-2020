import React from 'react'
import styled from 'styled-components'
import { Section, Row as Row_ } from 'components'

export const PortfolioGrid = ({ children }) => (
  <StyledPortfolioGrid>
    <Row>
      <Grid>
        {children}
      </Grid>
    </Row>
  </StyledPortfolioGrid>
)

const StyledPortfolioGrid = styled(Section)``
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
`
