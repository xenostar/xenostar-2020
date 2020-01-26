import React from 'react'
import styled from 'styled-components'
import { NavLink as NavLink_ } from 'components'

export const NavLinks = () => (
  <StyledNavLinks>
    <NavLink to="/">Home</NavLink>
    <NavLink to="/portfolio">Portfolio</NavLink>
    <NavLink to="/about">About</NavLink>
    <NavLink to="/blog">Blog</NavLink>
    <NavLink to="/components">Components</NavLink>
  </StyledNavLinks>
)

const StyledNavLinks = styled.div`
  align-items: flex-end;
  display: inline-flex;
  flex-direction: column;
  z-index: 200;
`
const NavLink = styled(NavLink_)`
  margin-top: ${props => props.theme.layout.padding};
`
