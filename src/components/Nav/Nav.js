import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'components'
import { media, routes } from 'utils'

export const Nav = () => (
  <StyledNav>
    <NavLink to={routes.home}>home</NavLink>
    <NavLink to={routes.portfolio} partiallyActive={true}>portfolio</NavLink>
    <NavLink to={routes.about}>about</NavLink>
    <NavLink to={routes.blog} partiallyActive={true}>blog</NavLink>
    {/* <NavLink to={routes.components}>components</NavLink> */}
  </StyledNav>
)

const StyledNav = styled.nav`
  display: flex;
  margin-left: auto;
  pointer-events: auto;
  user-select: none;
  ${media.tablet`
    display: none;
  `}
`
