import styled from 'styled-components'
import { useStoreActions } from 'easy-peasy'
import { FaTimes as FaTimes_ } from 'react-icons/fa'

export const MobileNavClose = props => {
  const closeNav = useStoreActions(actions => actions.nav.closeNav)

  return (
    <StyledMobileNavClose {...props}>
      <FaTimes onClick={closeNav} />
    </StyledMobileNavClose>
  )
}

const StyledMobileNavClose = styled.div`
  align-items: center;
  display: flex;
  justify-content: right;
  height: 5rem;
  margin: ${props => props.theme.spacing.default};
`
const FaTimes = styled(FaTimes_)`
  background-color: ${props => props.theme.palette.common.white};
  border-radius: ${props => props.theme.shape.borderRadius.default};
  color: ${props => props.theme.palette.primary};
  cursor: pointer;
  font-size: 2.25rem;
  padding: 4px;
  transition: ${props => props.theme.transition.default};
  :hover {
    color: ${props => props.theme.palette.secondary};
  }
`
