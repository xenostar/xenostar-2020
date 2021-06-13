import styled from 'styled-components'
import { useStoreState } from 'easy-peasy'

export const PageName = props => {
  const currentPage = useStoreState(state => state.page.currentPage)

  return <StyledPageName {...props}>{currentPage}</StyledPageName>
}

const StyledPageName = styled.h1`
  color: ${props => props.theme.palette.secondary};
  display: flex;
  font-family: ${props => props.theme.fonts.family.bebasNeue};
  font-size: ${props => props.theme.fonts.defaults.size};
  font-weight: ${props => props.theme.fonts.weight.blackBold};
  justify-content: center;
  line-height: 1;
  user-select: none;
`
