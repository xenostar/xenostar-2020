import React from 'react'
import styled from 'styled-components'
import AniLink_ from 'gatsby-plugin-transition-link/AniLink'
import { routes } from 'utils'
import Img from 'gatsby-image'

export const PortfolioItem = ({
  featuredImage: { fluid, alt = '', title = '' },
  // image: { fluid, alt = '', title = '' },
  // slug,
  number,
}) => (
  <StyledPortfolioItem number={'a' + number} className={'a' + number}>
    <AniLink
      bg="#90c7a8"
      cover
      direction="right"
      to={routes.portfolio}
    >
      <Image fluid={fluid} alt={alt} title={title} />
    </AniLink>
  </StyledPortfolioItem>
)

const StyledPortfolioItem = styled.div`
  /* background-color: ${props => props.theme.colors.primary}; */
  border-radius: ${props => props.theme.layout.borderRadius};
  display: block;
  overflow: hidden;
  /* transform: skew(-10deg); */
  transition: ${props => props.theme.transitions.default};
  grid-area: ${({ number }) => number};
  :hover {
    box-shadow: 0 10px 20px -10px rgba(0,0,0,1);
    z-index: 10;
  }
  :active {
    transform: translateY(3px);
  }
`
const AniLink = styled(AniLink_)`
  display: block;
`
const Image = styled(Img)`
  /* opacity: 0.9; */
  /* filter: grayscale(100%); */
  transition: ${props => props.theme.transitions.default};
  /* width: 140%; */
  /* transform: translateX(-20%) skew(10deg); */
  object-fit: cover;
  /* transform: skew(10deg); */
  /* height: 150px; */
  :hover {
    opacity: 1;
    filter: grayscale(0);
  }
`
