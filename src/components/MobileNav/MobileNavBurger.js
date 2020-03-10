import React from 'react'
import styled from 'styled-components'
import { media } from 'utils'
import { useStoreActions } from 'easy-peasy'
import { FiMenu as FiMenu_ } from 'react-icons/fi'

export const MobileNavBurger = props => {
  const openNav = useStoreActions(actions => actions.nav.openNav)

  return (
    <StyledMobileNavBurger onClick={openNav} {...props}>
      <FiMenu />
    </StyledMobileNavBurger>
  )
}

const StyledMobileNavBurger = styled.div`
  align-items: center;
  display: none;
  height: 5rem;
  pointer-events: auto;
  ${media.tablet`
    display: flex;
  `}
`
const FiMenu = styled(FiMenu_)`
  background-color: ${props => props.theme.colors.white};
  border-radius: ${props => props.theme.layout.borderRadius};
  color: ${props => props.theme.colors.secondary};
  cursor: pointer;
  font-size: 2.25rem;
  pointer-events: auto;
  transform: scale(1);
  transition: ${props => props.theme.transitions.default};
  :hover {
    color: ${props => props.theme.colors.primary};
  }
`
