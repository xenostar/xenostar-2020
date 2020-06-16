import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { Anchor as Anchor_ } from 'components'

export const MobileNavLink = ({ children, to = '/', ...props }) => (
  <Anchor to={to} {...props}>
    {children}
  </Anchor>
)

MobileNavLink.propTypes = {
  children: PropTypes.node,
  to: PropTypes.string
}

const Anchor = styled(Anchor_)`
  color: ${props => props.theme.colors.primary};
  display: flex;
  font-family: ${props => props.theme.fonts.montserrat};
  font-size: 3em;
  font-weight: ${props => props.theme.fonts.boldBlack};
  justify-content: flex-end;
  line-height: 60px;
  transition: ${props => props.theme.transitions.default};
  padding: ${props => props.theme.layout.spacing};
  &.active,
  :hover {
    background-color: ${props => props.theme.colors.primary};
    color: ${props => props.theme.colors.white};
  }
`
