import React from 'react'
import styled from 'styled-components'
import { PageName as PageName_ } from 'components'
import AniLink_ from 'gatsby-plugin-transition-link/AniLink'
import { routes } from 'utils'

export const Logo = () => (
  <StyledLogo>
    <AniLink to={routes.home} cover direction="left" bg="#90c7a8">
      <div>
        X<span>S</span>
      </div>
    </AniLink>
    {/* <PageName /> */}
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
  transition: ${props => props.theme.transitions.default};
  width: 5rem; /* 80px */
  :hover {
    background-color: ${props => props.theme.colors.primary};
    opacity: 0.75;
  }
  div {
    padding-top: 0.4375rem; /* 7px */
  }
  span {
    color: ${props => props.theme.colors.primary};
  }
`
const PageName = styled(PageName_)`
  margin-left: 10px;
`
