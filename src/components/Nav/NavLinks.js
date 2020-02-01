import React from 'react'
import styled from 'styled-components'
import { NavLink as NavLink_ } from 'components'
import { routes } from 'utils'

export const NavLinks = props => (
  <StyledNavLinks {...props}>
    <NavLink to={routes.home}>Home</NavLink>
    <NavLink to={routes.portfolio}>Portfolio</NavLink>
    <NavLink to={routes.about}>About</NavLink>
    <NavLink to={routes.blog}>Blog</NavLink>
    <NavLink to={routes.components}>Components</NavLink>
  </StyledNavLinks>
)

const StyledNavLinks = styled.div`
  align-items: flex-end;
  display: flex;
  flex-direction: column;
  z-index: 200;
  width: 100%;
`
const NavLink = styled(NavLink_)`
  width: 100%;
`
