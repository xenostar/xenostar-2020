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
  max-width: 1200px;
`
const Grid = styled.div`
  display: grid;
  grid-gap: 60px;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: auto;
  width: 100%;
`
