import React from 'react'
import styled from 'styled-components'
import AniLink_ from 'gatsby-plugin-transition-link/AniLink'
import { routes } from 'utils'

export const Logo = () => (
  <StyledLogo>
    <AniLink to={routes.home} cover direction="left" bg="#90c7a8">
      <Text>
        X<span>S</span>
        <HomeText>Home</HomeText>
      </Text>
    </AniLink>
  </StyledLogo>
)

const StyledLogo = styled.div`
  display: inline-flex;
  align-items: center;
  :active {
    transform: translateY(3px);
  }
`
const AniLink = styled(AniLink_)`
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
`
const Text = styled.div`
  padding-top: 0.4375rem; /* 7px */
  span {
    color: ${props => props.theme.colors.primary};
  }
`
const HomeText = styled.div`
  color: ${props => props.theme.colors.tertiary};
  font-size: 26px;
  opacity: 0;
  position: absolute;
  bottom: -9px;
  right: -5px;
  transform: rotate(-90deg);
  transform-origin: top left;
  transition: ${props => props.theme.transitions.default};
`
