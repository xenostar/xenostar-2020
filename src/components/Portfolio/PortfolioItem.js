import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import AniLink_ from 'gatsby-plugin-transition-link/AniLink'
import Img from 'gatsby-image'
import { routes } from 'utils'

export const PortfolioItem = ({
  featuredImage: { fluid, alt = '' },
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
  grid-area: ${({ number }) => number};
`
const AniLink = styled(AniLink_)`
  display: block;
  position: relative;
  transition: ${props => props.theme.transitions.default};
  :active {
    transform: ${props => props.theme.transforms.active};
  }
`
const Name = styled.div`
  font-family: ${props => props.theme.fonts.bebasNeue};
  font-size: 1em;
  position: absolute;
  bottom: 100%;
  left: 100%;
  line-height: 28px;
  opacity: 0;
  pointer-events: none;
  transform: translateY(-6px) rotate(90deg) translateZ(0);
  transform-origin: bottom left;
  transition: ${props => props.theme.transitions.default};
  white-space: nowrap;
  z-index: 20;
  ${AniLink}:hover & {
    opacity: 1;
    transform: translateY(0px) rotate(90deg) translateZ(0);
  }
`
const Image = styled(Img)`
  border-radius: ${props => props.theme.layout.borderRadius};
  transition: ${props => props.theme.transitions.default};
  :hover {
    box-shadow: ${props => props.theme.colors.boxShadow};
    z-index: 10;
  }
`
