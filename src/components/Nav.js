import styled from 'styled-components'
import { NavLink, ThemeToggler } from 'components'
import { media, routes } from 'utils'

export const Nav = () => (
  <StyledNav>
    <NavLink to={routes.home.url}>{routes.home.name}</NavLink>
    <NavLink to={routes.portfolio.url} partiallyActive={true}>
      {routes.portfolio.name}
    </NavLink>
    <NavLink to={routes.about.url}>{routes.about.name}</NavLink>
    <NavLink to={routes.blog.url} partiallyActive={true}>
      {routes.blog.name}
    </NavLink>
    <ThemeToggler />
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
