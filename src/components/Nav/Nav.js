import React from 'react'
import styled from 'styled-components'
import { Row as Row_ } from 'components'
import { Link } from 'gatsby'

export const Nav = () => (
  <StyledNav>
    <Row>
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
    </Row>
  </StyledNav>
)

const StyledNav = styled.nav`
  background: rgba(#90c7a8, 0.25);
  display: flex;
  justify-content: center;
  padding: 0 30px;
  user-select: none;

  a {
    font-family: 'Ubuntu', sans-serif;
    font-weight: 700;
    text-transform: uppercase;
    margin-left: 30px;
    line-height: 60px;
    transition: 0.3s all;
  }
  a:first-child {
    margin-left: 0;
  }
  a.active,
  a:hover {
    color: #222;
  }
`

const Row = styled(Row_)`
  flex-direction: row;
`
