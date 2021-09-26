import styled from 'styled-components'
import { useStoreState } from 'easy-peasy'

export const PageName = props => {
  const currentPage = useStoreState(state => state.page.currentPage)

  return <StyledPageName {...props}>{currentPage}</StyledPageName>
}

const StyledPageName = styled.h1`
  color: ${({ theme }) => theme.palette.text.primary};
  display: flex;
  font-family: ${({ theme }) => theme.fonts.family.bebasNeue};
  font-size: ${({ theme }) => theme.fonts.defaults.size};
  font-weight: ${({ theme }) => theme.fonts.weight.blackBold};
  justify-content: center;
  line-height: 1;
  user-select: none;
`
