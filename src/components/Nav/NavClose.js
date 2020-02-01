import React from 'react'
import styled from 'styled-components'
import { useStoreActions } from 'easy-peasy'
import { IoMdClose as IoMdClose_ } from 'react-icons/io'

export const NavClose = props => {
  const closeNav = useStoreActions(actions => actions.nav.closeNav)

  return (
    <StyledNavClose {...props}>
      <IoMdClose onClick={closeNav} />
    </StyledNavClose>
  )
}

const StyledNavClose = styled.div`
  display: flex;
  justify-content: right;
`
const IoMdClose = styled(IoMdClose_)`
  color: ${props => props.theme.colors.white};
  cursor: pointer;
  font-size: 2.25rem;
  transition: ${props => props.theme.transitions.default};
  :hover {
    color: ${props => props.theme.colors.primary};
  }
`
