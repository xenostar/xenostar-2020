import React, { memo, useEffect, useRef } from 'react'
import styled from 'styled-components'
import { useStoreActions, useStoreState } from 'easy-peasy'
import { Row, Col } from 'components'
import AniLink from 'gatsby-plugin-transition-link/AniLink'

export const Nav = memo(() => {
  const currentPage = useStoreState(state => state.page.currentPage)
  const isNavOpen = useStoreState(state => state.nav.isNavOpen)
  const closeNav = useStoreActions(actions => actions.nav.closeNav)
  const node = useRef()

  useEffect(() => {
    closeNav()
  }, [currentPage, closeNav])

  useEffect(() => {
    const handleOutsideClick = e => {
      if (node.current.contains(e.target)) {
        return
      }
      closeNav()
    }

    if (isNavOpen) {
      document.addEventListener('mousedown', handleOutsideClick)
    } else {
      document.removeEventListener('mousedown', handleOutsideClick)
    }

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick)
    }
  }, [isNavOpen, closeNav])

  return (
    <StyledNav open={isNavOpen}>
      <Row>
        <Col ref={node}>
          <AniLink cover direction="left" bg="#90c7a8" activeClassName="active" to="/">
            Home
          </AniLink>
          <AniLink cover direction="left" bg="#90c7a8" activeClassName="active" to="/about">
            About
          </AniLink>
          <AniLink cover direction="left" bg="#90c7a8" activeClassName="active" to="/portfolio">
            Portfolio
          </AniLink>
          <AniLink cover direction="left" bg="#90c7a8" activeClassName="active" to="/blog">
            Blog
          </AniLink>
          <AniLink cover direction="left" bg="#90c7a8" activeClassName="active" to="/components">
            Components
          </AniLink>
        </Col>
      </Row>
    </StyledNav>
  )
})

const StyledNav = styled.nav`
  border-top: 4px solid rgba(144, 199, 168, 1);
  background: rgba(144, 199, 168, 0.8);
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  padding: 0 ${props => props.theme.layout.padding};
  position: fixed;
  transition: ${props => props.theme.transitions.default};
  transform: ${props => props.open ? 'translate3d(0,0,0)' : 'translate3d(100%,0,0)'};
  user-select: none;
  z-index: 200;

  a {
    font-family: 'Ubuntu', sans-serif;
    font-weight: 900;
    font-size: 4em;
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
