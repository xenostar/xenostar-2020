import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { Link as Link_ } from 'gatsby'
import { routes } from 'utils'

export const Anchor = ({
  activeClassName = 'active',
  children = 'Link Text',
  to = routes.home,
  ...props
}) => (
  <Link activeClassName={activeClassName} to={to} {...props}>
    {children}
  </Link>
)

Anchor.propTypes = {
  activeClassName: PropTypes.string,
  children: PropTypes.node,
  to: PropTypes.string
}

const Link = styled(Link_)``
