import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import { routes } from 'utils'

export const Anchor = ({
  activeClassName = 'active',
  children = 'Link Text',
  to = routes.home.url,
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
