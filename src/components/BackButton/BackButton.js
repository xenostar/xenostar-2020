import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { NavLink as NavLink_ } from 'components'
import { FaChevronLeft as FaChevronLeft_ } from 'react-icons/fa'
import { media } from 'utils'

export const BackButton = ({ children, ...props }) => (
  <NavLink {...props}>
    <FaChevronLeft />
    {children}
  </NavLink>
)

BackButton.propTypes = {
  children: PropTypes.node
}

const NavLink = styled(NavLink_)`
  margin-left: ${props => props.theme.layout.spacing};
  margin-right: auto;
  pointer-events: auto;
  padding: 0;
  ${media.phone`
    margin-left: ${props => props.theme.layout.spacingSmall};
  `}
`
const FaChevronLeft = styled(FaChevronLeft_)`
  margin-right: ${props => props.theme.layout.spacingTiny};
`
