import { CgSun, CgMoon } from 'react-icons/cg'
import { useStoreActions, useStoreState } from 'easy-peasy'
import styled from 'styled-components'

export const ThemeToggler = () => {
  const isDarkMode = useStoreState(state => state.theme.isDarkMode)
  const toggleDarkMode = useStoreActions(
    actions => actions.theme.toggleDarkMode
  )

  const handleToggleDarkMode = () => {
    toggleDarkMode()
  }

  return (
    <StyledButton onClick={handleToggleDarkMode}>
      {isDarkMode ? <CgSun /> : <CgMoon />}
    </StyledButton>
  )
}

const StyledButton = styled.button`
  align-items: center;
  background-color: transparent;
  color: ${({ theme }) => theme.palette.text.primary};
  cursor: pointer;
  display: flex;
  font-size: ${({ theme }) => theme.fonts.size.h4};
  padding: 0 ${({ theme }) => theme.spacing.small};
  transition: ${({ theme }) => theme.transition.theme.color};
  &.active,
  :hover {
    color: ${({ theme }) => theme.palette.primary};
  }
`
