import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import AniLink_ from 'gatsby-plugin-transition-link/AniLink'
import Img from 'gatsby-image'
import { routes } from 'utils'

export const PortfolioItem = ({
  featuredImage: { fluid, alt = '', title = '' },
  // image: { fluid, alt = '', title = '' },
  // slug,
  name = '',
  number,
}) => (
  <StyledPortfolioItem number={'a' + number} className={'a' + number}>
    <AniLink bg="#90c7a8" cover direction="right" to={routes.portfolio}>
      <Image fluid={fluid} alt={alt} />
      <Name>{name}</Name>
    </AniLink>
  </StyledPortfolioItem>
)

PortfolioItem.propTypes = {
  featuredImage: PropTypes.object,
  image: PropTypes.object,
  name: PropTypes.string,
  number: PropTypes.number,
  slug: PropTypes.string,
}

const StyledPortfolioItem = styled.div`
  display: block;
  /* overflow: hidden; */
  /* transition: ${props => props.theme.transitions.default}; */
  grid-area: ${({ number }) => number};
  :active {
    transform: ${props => props.theme.transforms.active};
  }
`
const AniLink = styled(AniLink_)`
  display: block;
  position: relative;
  :hover > p {
    opacity: 1;
    transform: translateY(0px) rotate(90deg) translateZ(0);
  }
`
const Name = styled.p`
  font-family: ${props => props.theme.fonts.bebasNeue};
  font-size: 14px;
  letter-spacing: 1px;
  position: absolute;
  bottom: 100%;
  left: 100%;
  line-height: 38px;
  opacity: 0;
  text-transform: uppercase;
  transform: translateY(-10px) rotate(90deg) translateZ(0);
  transform-origin: bottom left;
  transition: ${props => props.theme.transitions.default};
  white-space: nowrap;
  z-index: 20;
`
const Image = styled(Img)`
  border-radius: ${props => props.theme.layout.borderRadius};
  transition: ${props => props.theme.transitions.default};
  :hover {
    box-shadow: 0 10px 20px -10px rgba(0, 0, 0, 1);
    /* box-shadow: 0 10px 20px red; */
    z-index: 10;
  }
`
