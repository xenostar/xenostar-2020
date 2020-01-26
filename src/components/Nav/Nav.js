import React, { memo, useEffect, useRef } from 'react'
import styled from 'styled-components'
import { useStoreActions, useStoreState } from 'easy-peasy'
import { NavLinks } from 'components'

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
    <StyledNav ref={node} open={isNavOpen}>
      <NavLinks />
    </StyledNav>
  )
})

const StyledNav = styled.nav`
  border-top: 4px solid rgba(144, 199, 168, 1);
  background: ${props => props.theme.colors.secondary};
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-end;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  padding: ${props => props.theme.layout.padding};
  padding-top: ${props => props.theme.layout.paddingBig};
  position: fixed;
  transition: 0.5s all ease;
  transform: ${props => props.open ? 'translate3d(0,0,0)' : 'translate3d(100%,0,0)'};
  user-select: none;
  z-index: 200;
`
