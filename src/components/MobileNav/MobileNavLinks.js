import React from 'react'
import styled from 'styled-components'
import { MobileNavLink } from 'components'
import { routes } from 'utils'

export const MobileNavLinks = props => (
  <StyledMobileNavLinks {...props}>
    <MobileNavLink to={routes.home}>Home</MobileNavLink>
    <MobileNavLink to={routes.portfolio}>Portfolio</MobileNavLink>
    <MobileNavLink to={routes.about}>About</MobileNavLink>
    <MobileNavLink to={routes.blog}>Blog</MobileNavLink>
    <MobileNavLink to={routes.components}>Components</MobileNavLink>
  </StyledMobileNavLinks>
)

const StyledMobileNavLinks = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`
