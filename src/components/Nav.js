import styled from 'styled-components'
import { NavLink } from 'components'
import { media, routes } from 'utils'
import { Link } from 'gatsby'

export const Nav = () => (
  <StyledNav>
    <StyledTest activeClassName="active" to={routes.home.url}>
      {routes.home.name}
    </StyledTest>
    <NavLink to={routes.portfolio.url} partiallyActive={true}>
      {routes.portfolio.name}
    </NavLink>
    <NavLink to={routes.about.url}>{routes.about.name}</NavLink>
    <NavLink to={routes.blog.url} partiallyActive={true}>
      {routes.blog.name}
    </NavLink>
  </StyledNav>
)

const StyledTest = styled(Link)`
  align-items: center;
  color: ${props => props.theme.colors.secondary};
  display: flex;
  font-family: ${props => props.theme.fonts.montserrat};
  font-weight: ${props => props.theme.fonts.bold};
  padding: 0 15px;
  transition: ${props => props.theme.transitions.default};
  &.active,
  :hover {
    color: ${props => props.theme.colors.primary};
  }
`

const StyledNav = styled.nav`
  display: flex;
  margin-left: auto;
  pointer-events: auto;
  user-select: none;
  ${media.tablet`
    display: none;
  `}
`
