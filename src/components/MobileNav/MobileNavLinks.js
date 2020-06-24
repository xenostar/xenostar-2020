import React from 'react'
import styled from 'styled-components'
import { MobileNavLink } from 'components'
import { routes } from 'utils'

export const MobileNavLinks = props => (
  <StyledMobileNavLinks {...props}>
    <MobileNavLink to={routes.home.url}>Home</MobileNavLink>
    <MobileNavLink to={routes.portfolio.url} partiallyActive={true}>
      Portfolio
    </MobileNavLink>
    <MobileNavLink to={routes.about.url}>About</MobileNavLink>
    <MobileNavLink to={routes.blog.url} partiallyActive={true}>
      Blog
    </MobileNavLink>
  </StyledMobileNavLinks>
)

const StyledMobileNavLinks = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`
