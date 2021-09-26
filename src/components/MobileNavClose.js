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
  margin: ${({ theme }) => theme.spacing.default};
`
const FaTimes = styled(FaTimes_)`
  background-color: ${({ theme }) => theme.palette.common.white};
  border-radius: ${({ theme }) => theme.shape.borderRadius.default};
  color: ${({ theme }) => theme.palette.primary};
  cursor: pointer;
  font-size: 2.25rem;
  padding: 4px;
  transition: ${({ theme }) => theme.transition.default};
  :hover {
    color: ${({ theme }) => theme.palette.text.primary};
  }
`
