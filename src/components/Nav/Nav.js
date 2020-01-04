import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'


export const Nav = () => (
  <StyledNav>
    <Link activeClassName="active" to="/">Home</Link>
    <Link activeClassName="active" to="/about">About</Link>
    <Link activeClassName="active" to="/portfolio">Portfolio</Link>
    <Link activeClassName="active" to="/blog">Blog</Link>
  </StyledNav>
)

const StyledNav = styled.nav`
  display: flex;
  justify-content: center;
  margin-bottom: 80px;
  a {
    border: 2px solid #000;
    border-radius: 100px;
    color: #000;
    font-size: 14px;
    font-weight: 700;
    margin-left: 20px;
    padding: 8px;
    text-transform: uppercase;
    text-transform: uppercase;
    text-align: center;
    width: 130px;
  }
  a:first-child {
    margin-left: 0;
  }
  a.active,
  a:hover {
    background: #000;
    color: #fff;
    transition: all 0.2s ease;
  }
`
