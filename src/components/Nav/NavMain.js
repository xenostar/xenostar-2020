import React from 'react'
import { Nav } from 'components'
import { Link } from 'gatsby'

export const NavMain = () => (
  <Nav>
    <Link activeClassName="active" to="/">
      Home
    </Link>
    <Link activeClassName="active" to="/about">
      About
    </Link>
    <Link activeClassName="active" to="/portfolio">
      Portfolio
    </Link>
    <Link activeClassName="active" to="/blog">
      Blog
    </Link>
  </Nav>
)
