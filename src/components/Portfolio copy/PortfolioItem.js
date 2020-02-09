import React from 'react'
import styled from 'styled-components'
import AniLink_ from 'gatsby-plugin-transition-link/AniLink'
import Img from 'gatsby-image'

export const PortfolioItem = ({
  // featuredImage: { fluid, alt = '', title = '' },
  image: { fluid, alt = '', title = '' },
  slug,
}) => (
  <StyledPortfolioItem>
    <AniLink to={'/portfolio/#' + slug}>
      <Image fluid={fluid} alt={alt} title={title} />
    </AniLink>
  </StyledPortfolioItem>
)

const StyledPortfolioItem = styled.div`
  background: ${props => props.theme.colors.primary};
  border-radius: ${props => props.theme.layout.borderRadius};
  box-shadow: 0 2px 20px rgba(0,0,0,0.2);
  display: block;
  overflow: hidden;
  transform: skew(-10deg);
`
const AniLink = styled(AniLink_)`
  display: block;
`
const Image = styled(Img)`
  opacity: 0.9;
  filter: grayscale(100%);
  transition: ${props => props.theme.transitions.default};
  width: 120%;
  transform: translateX(-10%) skew(10deg);
  :hover {
    opacity: 1;
    filter: grayscale(0);
  }
`