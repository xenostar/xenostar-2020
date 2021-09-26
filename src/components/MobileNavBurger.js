import styled from 'styled-components'
import { media } from 'utils'
import { useStoreActions } from 'easy-peasy'
import { FaBars as FaBars_ } from 'react-icons/fa'

export const MobileNavBurger = props => {
  const openNav = useStoreActions(actions => actions.nav.openNav)

  return (
    <StyledMobileNavBurger onClick={openNav} {...props}>
      <FaBars />
    </StyledMobileNavBurger>
  )
}

const StyledMobileNavBurger = styled.div`
  align-items: center;
  display: none;
  pointer-events: auto;
  ${media.tablet`
    display: flex;
  `}
`
const FaBars = styled(FaBars_)`
  background-color: ${({ theme }) => theme.palette.common.white};
  border-radius: ${({ theme }) => theme.shape.borderRadius.default};
  color: ${({ theme }) => theme.palette.text.primary};
  cursor: pointer;
  font-size: 2.25rem;
  padding: 4px;
  pointer-events: auto;
  transform: scale(1);
  transition: ${({ theme }) => theme.transition.default};
  :hover {
    color: ${({ theme }) => theme.palette.primary};
  }
`
