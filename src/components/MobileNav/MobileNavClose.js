import React from 'react'
import styled from 'styled-components'
import { useStoreActions } from 'easy-peasy'
import { IoMdClose as IoMdClose_ } from 'react-icons/io'

export const MobileNavClose = props => {
  const closeNav = useStoreActions(actions => actions.nav.closeNav)

  return (
    <StyledMobileNavClose {...props}>
      <IoMdClose onClick={closeNav} />
    </StyledMobileNavClose>
  )
}

const StyledMobileNavClose = styled.div`
  align-items: center;
  display: flex;
  justify-content: right;
  height: 5rem;
  margin: ${props => props.theme.layout.padding};
`
const IoMdClose = styled(IoMdClose_)`
  background-color: ${props => props.theme.colors.white};
  border-radius: ${props => props.theme.layout.borderRadius};
  color: ${props => props.theme.colors.primary};
  cursor: pointer;
  font-size: 2.25rem;
  transition: ${props => props.theme.transitions.default};
  :hover {
    color: ${props => props.theme.colors.secondary};
  }
`
