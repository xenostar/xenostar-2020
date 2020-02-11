import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import AniLink_ from 'gatsby-plugin-transition-link/AniLink'

export const MobileNavLink = ({ to = '/', children, ...props }) => (
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

MobileNavLink.propTypes = {
  to: PropTypes.string
}

const AniLink = styled(AniLink_)`
  color: ${props => props.theme.colors.primary};
  display: flex;
  font-family: ${props => props.theme.fonts.montserrat};
  font-size: 3em;
  font-weight: ${props => props.theme.fonts.boldBlack};
  justify-content: flex-end;
  line-height: 60px;
  transition: ${props => props.theme.transitions.default};
  padding: ${props => props.theme.layout.padding};
  &.active,
  :hover {
    background-color: ${props => props.theme.colors.primary};
    color: ${props => props.theme.colors.white};
  }
`
