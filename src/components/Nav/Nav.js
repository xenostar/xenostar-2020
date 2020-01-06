import React from 'react'
import styled from 'styled-components'
import { Row as Row_ } from 'components'
import { Link } from 'gatsby'

export const Nav = () => (
  <StyledNav>
    <Row>
      <Link activeClassName="active" to="/">
        home
      </Link>
      <Link activeClassName="active" to="/about">
        about
      </Link>
      <Link activeClassName="active" to="/portfolio">
        portfolio
      </Link>
      <Link activeClassName="active" to="/blog">
        blog
      </Link>
    </Row>
  </StyledNav>
)

const StyledNav = styled.nav`
  border-top: 4px solid rgba(144, 199, 168, 1);
  background: rgba(144, 199, 168, 0.075);
  display: flex;
  justify-content: center;
  padding: 0 30px;
  user-select: none;

  a {
    font-family: 'Ubuntu', sans-serif;
    font-weight: 900;
    font-size: 1.25em;
    /* text-transform: uppercase; */
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
