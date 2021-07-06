import { useEffect, useRef } from 'react'
import styled from 'styled-components'
import { useStoreActions, useStoreState } from 'easy-peasy'
import { MobileNavClose, MobileNavLinks } from 'components'

export const MobileNav = () => {
  const currentPage = useStoreState(state => state.page.currentPage)
  const isNavOpen = useStoreState(state => state.nav.isNavOpen)
  const closeNav = useStoreActions(actions => actions.nav.closeNav)
  const node = useRef()

  useEffect(() => {
    closeNav()
  }, [currentPage, closeNav])

  useEffect(() => {
    const handleOutsideClick = e => {
      if (!node.current.contains(e.target)) {
        closeNav()
      }
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
    <StyledMobileNav ref={node} isNavOpen={isNavOpen}>
      <MobileNavClose />
      <MobileNavLinks />
    </StyledMobileNav>
  )
}

const StyledMobileNav = styled.nav`
  border-top: ${({ theme }) => theme.layout.topBar} solid
    ${({ theme }) => theme.palette.primary};
  background-color: rgba(255, 255, 255, 0.95);
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-end;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  overflow-y: auto;
  position: fixed;
  transition: ${({ theme }) => theme.transition.fast};
  transform: ${props =>
    props.isNavOpen ? 'translate3d(0,0,0)' : 'translate3d(100%,0,0)'};
  user-select: none;
  z-index: ${({ theme }) => theme.zIndex.drawer};
`
