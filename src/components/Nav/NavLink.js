import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import AniLink_ from 'gatsby-plugin-transition-link/AniLink'

export const NavLink = ({ to = '/', children, ...props }) => (
  <AniLink cover direction="right" bg="#90c7a8" activeClassName="active" to={to} {...props}>
    {children}
  </AniLink>
)

NavLink.propTypes = {
  to: PropTypes.string
}

const AniLink = styled(AniLink_)`
  color: ${props => props.theme.colors.primary};
  font-family: ${props => props.theme.fonts.ubuntu};
  font-weight: ${props => props.theme.fonts.bold800};
  font-size: 4em;
  line-height: 60px;
  transition: ${props => props.theme.transitions.default};
  &.active,
  :hover {
    color: ${props => props.theme.colors.white};
  }
`
