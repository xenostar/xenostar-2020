import React from 'react'
import styled from 'styled-components'
import { Section, Row as Row_ } from 'components'
// import bgImg from 'assets/papyrus.png'
// import bgImg from 'assets/bg_white.png'

export const PortfolioGrid = ({ children }) => (
  <StyledPortfolioGrid>
    <Row>
      <Grid>
        {children}
      </Grid>
    </Row>
  </StyledPortfolioGrid>
)

const StyledPortfolioGrid = styled(Section)`
  background-size: 200px;
`
const Row = styled(Row_)`
  max-width: 1400px;
`
const Grid = styled.div`
  display: grid;
  grid-gap: 1px;
  grid-template-columns: repeat(7, 1fr);
  grid-template-rows: auto;
  width: 100%;
  grid-template-areas:
    ".   .   a1  a2  a2  .   ."
    "a3  a4  a4  a2  a2  a5  a6"
    ".   a4  a4  a7  a7  a8  a9"
    ".   .   a11 a7  a7  .   ."
  ;
`
