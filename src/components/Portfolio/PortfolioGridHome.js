import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Section as StyledPortfolioGridHome, Row as Row_ } from 'components'
import { media } from 'utils'

export const PortfolioGridHome = ({ children }) => (
  <StyledPortfolioGridHome>
    <Row>
      <Grid>{children}</Grid>
    </Row>
  </StyledPortfolioGridHome>
)

PortfolioGridHome.propTypes = {
  children: PropTypes.node
}

const Row = styled(Row_)`
  max-width: 87.5rem; /* 1400px */
`
const Grid = styled.div`
  display: grid;
  grid-gap: 1px;
  grid-template-columns: repeat(14, 1fr);
  grid-template-rows: auto;
  padding-bottom: ${props => props.theme.layout.spacing.default};
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
    '.   .   .   .   a11 a11 a7  a7  a7  a7  .   .   .   .';
  :hover {
    grid-gap: ${props => props.theme.layout.spacing.default};
  }
  ${media.tablet`
    grid-template-areas: none;
    grid-template-columns: repeat(3, 1fr);
  `}
  ${media.phone`
    grid-gap: ${props => props.theme.layout.spacing.tiny};
    grid-template-columns: repeat(2, 1fr);
  `}
`
