import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
// import AniLink_ from 'gatsby-plugin-transition-link/AniLink'
import { Link as Link_ } from 'gatsby'
import { routes } from 'utils'

export const Anchor = ({
  activeClassName = "active",
  bg = "#90c7a8",
  direction = "right",
  children = "Link Text",
  to = routes.home,
  ...props
}) => (
  <Link
    activeClassName={activeClassName}
    // bg={bg}
    // cover
    // direction={direction}
    to={to}
    {...props}
  >
    {children}
  </Link>
)

Anchor.propTypes = {
  activeClassName: PropTypes.string,
  bg: PropTypes.string,
  children: PropTypes.element,
  direction: PropTypes.oneOf([
    'up',
    'down',
    'left',
    'right',
  ]),
  to: PropTypes.string,
}

const Link = styled(Link_)``
