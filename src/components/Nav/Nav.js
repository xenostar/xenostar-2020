import React from 'react'
import styled from 'styled-components'
import { Row as Row_ } from 'components'
import AniLink from 'gatsby-plugin-transition-link/AniLink'

export const Nav = () => (
  <StyledNav>
    <Row>
      <AniLink cover direction="left" bg="#90c7a8" activeClassName="active" to="/">
        home
      </AniLink>
      <AniLink cover direction="left" bg="#90c7a8" activeClassName="active" to="/about">
        about
      </AniLink>
      <AniLink cover direction="left" bg="#90c7a8" activeClassName="active" to="/portfolio">
        portfolio
      </AniLink>
      <AniLink cover direction="left" bg="#90c7a8" activeClassName="active" to="/blog">
        blog
      </AniLink>
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
