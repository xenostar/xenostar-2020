import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import AniLink_ from 'gatsby-plugin-transition-link/AniLink'

export const NavLink = ({ to = '/', children, ...props }) => (
  <AniLink
    activeClassName="active"
    bg="#90c7a8"
    cover
    direction="right"
    to={to}
    {...props}
  >
    {children}
  </AniLink>
)

NavLink.propTypes = {
  to: PropTypes.string
}

const AniLink = styled(AniLink_)`
  color: ${props => props.theme.colors.secondary};
  display: flex;
  font-family: ${props => props.theme.fonts.montserrat};
  font-size: 1em;
  font-weight: ${props => props.theme.fonts.bold};
  justify-content: flex-end;
  line-height: 80px;
  padding: 0 15px;
  transition: ${props => props.theme.transitions.default};
  &.active,
  :hover {
    color: ${props => props.theme.colors.primary};
  }
`
