import React from 'react'
import styled from 'styled-components'
import { Anchor as Anchor_ } from 'components'
import { routes } from 'utils'

export const Logo = () => (
  <StyledLogo>
    <Anchor
      direction="left"
      to={routes.home}
    >
      <Text>
        X<TextColor>S</TextColor>
        <HomeText>Home</HomeText>
      </Text>
    </Anchor>
  </StyledLogo>
)

const StyledLogo = styled.div`
  border-radius: ${props => props.theme.layout.borderRadius};
  display: flex;
  transition: ${props => props.theme.transitions.default};
  :active {
    transform: ${props => props.theme.transforms.active};
  }
  :hover {
    box-shadow: ${props => props.theme.colors.boxShadow};
    z-index: 10;
  }
`
const Anchor = styled(Anchor_)`
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
    background-color: ${props => props.theme.colors.transparent};
  }
  :before {
    content: '';
    border-radius: ${props => props.theme.layout.borderRadius};
    background-image: ${props => props.theme.colors.gradient};
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: -1;
  }
`
const Text = styled.div`
  padding-top: 0.4375rem; /* 7px */
  position: relative;
`
const TextColor = styled.span`
  color: ${props => props.theme.colors.primary};
  opacity: 1;
  transition: ${props => props.theme.transitions.default};
  ${Anchor}:hover & {
    opacity: 0;
  }
`
const HomeText = styled.div`
  color: ${props => props.theme.colors.white};
  font-size: 25.7px;
  opacity: 0;
  position: absolute;
  top: -14px;
  right: -4px;
  transform: rotate(-90deg) translateZ(0);
  transform-origin: bottom right;
  transition: ${props => props.theme.transitions.default};
  ${Anchor}:hover & {
    opacity: 1;
  }
`
