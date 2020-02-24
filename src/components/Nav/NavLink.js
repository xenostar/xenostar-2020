import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { Anchor as Anchor_ } from 'components'

export const NavLink = ({ to = '/', children, ...props }) => (
  <Anchor to={to} {...props}>
    {children}
  </Anchor>
)

NavLink.propTypes = {
  to: PropTypes.string,
  children: PropTypes.any,
}

const Anchor = styled(Anchor_)`
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
