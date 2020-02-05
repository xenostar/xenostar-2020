import React from 'react'
import styled from 'styled-components'
import AniLink from 'gatsby-plugin-transition-link/AniLink'
import { routes } from 'utils'

export const Logo = () => (
  <StyledLogo
    activeClassName="active"
    bg="#90c7a8"
    cover
    direction="left"
    to={routes.home}>
    <Text>
      X<span>S</span>
      <HomeText>Home</HomeText>
    </Text>
  </StyledLogo>
)

const StyledLogo = styled(AniLink)`
  align-items: center;
  background-color: ${props => props.theme.colors.tertiary};
  border-radius: ${props => props.theme.layout.borderRadius};
  color: ${props => props.theme.colors.white};
  display: inline-flex;
  font-family: ${props => props.theme.fonts.bebasNeue};
  font-size: 3.75em; /* 60px */
  height: 5rem; /* 80px */
  justify-content: center;
  line-height: 1;
  pointer-events: auto;
  position: relative;
  transition: ${props => props.theme.transitions.default};
  width: 5rem; /* 80px */
  :hover {
    background-color: ${props => props.theme.colors.primary};
  }
  :hover > div > div {
    opacity: 1;
  }
  :not(.active):active {
    transform: translateY(3px);
  }
`
const Text = styled.div`
  padding-top: 0.4375rem; /* 7px */
  position: relative;
  span {
    color: ${props => props.theme.colors.primary};
  }
`
const HomeText = styled.div`
  color: ${props => props.theme.colors.tertiary};
  font-size: 26px;
  opacity: 0;
  position: absolute;
  top: -14px;
  right: -4px;
  transform: rotate(-90deg);
  transform-origin: bottom right;
  transition: ${props => props.theme.transitions.default};
`
