import React from 'react'
import styled from 'styled-components'
import AniLink from 'gatsby-plugin-transition-link/AniLink'

export const Logo = () => (
  <StyledLogo cover direction="left" bg="#90c7a8" to="/">
    <div>
      X<span>S</span>
    </div>
  </StyledLogo>
)

const StyledLogo = styled(AniLink)`
  background-color: #232121;
  border-radius: ${props => props.theme.layout.borderRadius};
  color: ${props => props.theme.colors.white};
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-family: ${props => props.theme.fonts.bebasNeue};
  font-size: 3.75em; /* 60px */
  height: 5rem; /* 80px */
  line-height: 1;
  pointer-events: auto;
  transition: ${props => props.theme.transitions.default};
  width: 5rem; /* 80px */

  div {
    padding-top: 0.4375rem; /* 7px */
  }
  span {
    color: ${props => props.theme.colors.primary};
  }

  :hover {
    opacity: 0.75;
  }
`
