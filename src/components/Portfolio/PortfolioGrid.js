import React from 'react'
import styled from 'styled-components'
import { Section, Row as Row_ } from 'components'
// import bgImg from 'assets/papyrus.png'
// import bgImg from 'assets/bg_white.png'
import img from 'assets/portfolio/full_vector_persona_2020.jpg'

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
  grid-template-columns: repeat(14, 1fr);
  grid-template-rows: auto;
  transition: ${props => props.theme.transitions.default};
  width: 100%;
  grid-template-areas:
    ".   .   .   a12 a1  a1  a2  a2  a2  a2  .    .   .   ."
    ".   .   .   a14 a1  a1  a2  a2  a2  a2  a15  .   .   ."
    "a3  a3  a4  a4  a4  a4  a2  a2  a2  a2  a5  a5  a6  a6"
    "a3  a3  a4  a4  a4  a4  a2  a2  a2  a2  a5  a5  a6  a6"
    ".   a16 a4  a4  a4  a4  a7  a7  a7  a7  a8  a8  a9  ."
    ".   .   a4  a4  a4  a4  a7  a7  a7  a7  a8  a8  .   ."
    ".   .   .   a10 a11 a11 a7  a7  a7  a7  a13 .   .   ."
    ".   .   .   .   a11 a11 a7  a7  a7  a7  .   .   .   ."
  ;
  :hover {
    grid-gap: 20px;
  }
`
