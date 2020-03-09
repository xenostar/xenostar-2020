import React from 'react'
import styled from 'styled-components'
import { Section, Row as Row_ } from 'components'

export const PortfolioGridHome = ({ children }) => (
  <StyledPortfolioGridHome>
    <Row>
      <Grid>
        {children}
      </Grid>
    </Row>
  </StyledPortfolioGridHome>
)

const StyledPortfolioGridHome = styled(Section)``
const Row = styled(Row_)`
  max-width: 87.5rem; /* 1400px */
`
const Grid = styled.div`
  display: grid;
  grid-gap: 1px;
  grid-template-columns: repeat(14, 1fr);
  grid-template-rows: auto;
  padding-bottom: ${props => props.theme.layout.spacing};
  transition: ${props => props.theme.transitions.default};
  width: 100%;
  grid-template-areas:
    '.   .   .   a1  a1  a12 a2  a2  a2  a2  .    .   .   .'
    '.   .   .   a1  a1  a14 a2  a2  a2  a2  a15  .   .   .'
    'a3  a3  a4  a4  a4  a4  a2  a2  a2  a2  a5  a5  a6  a6'
    'a3  a3  a4  a4  a4  a4  a2  a2  a2  a2  a5  a5  a6  a6'
    '.   a16 a4  a4  a4  a4  a7  a7  a7  a7  a8  a8  a9  .'
    '.   .   a4  a4  a4  a4  a7  a7  a7  a7  a8  a8  .   .'
    '.   .   .   a10 a11 a11 a7  a7  a7  a7  a13 .   .   .'
    '.   .   .   .   a11 a11 a7  a7  a7  a7  .   .   .   .'
  ;
  :hover {
    grid-gap: ${props => props.theme.layout.spacing};
  }
`
