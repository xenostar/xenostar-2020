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
  padding-bottom: ${props => props.theme.spacing.default};
  transition: ${props => props.theme.transitions.default};
  width: 100%;
  grid-template-areas:
    '.   .   .   a4  a4  a5  a1  a1  a1  a1  .   .   .   .'
    '.   .   .   a4  a4  a6  a1  a1  a1  a1  a7  .   .   .'
    'a8  a8  a2  a2  a2  a2  a1  a1  a1  a1  a9  a9  a10 a10'
    'a8  a8  a2  a2  a2  a2  a1  a1  a1  a1  a9  a9  a10 a10'
    '.   a11 a2  a2  a2  a2  a3  a3  a3  a3  a12 a12 a13 .'
    '.   .   a2  a2  a2  a2  a3  a3  a3  a3  a12 a12 .   .'
    '.   .   .   a14 a15 a15 a3  a3  a3  a3  a16 .   .   .'
    '.   .   .   .   a15 a15 a3  a3  a3  a3  .   .   .   .';
  :hover {
    grid-gap: ${props => props.theme.spacing.default};
  }
  ${media.tablet`
    grid-template-areas: none;
    grid-template-columns: repeat(3, 1fr);
  `}
  ${media.phone`
    grid-gap: ${props => props.theme.spacing.tiny};
    grid-template-columns: repeat(2, 1fr);
  `}
`
