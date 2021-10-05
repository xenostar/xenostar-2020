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
  color: ${({ theme }) => theme.palette.text.primary};
  cursor: pointer;
  display: flex;
  background-color: transparent;
  padding: 0 ${({ theme }) => theme.spacing.small};
  transition: ${({ theme }) => theme.transition.default};
  &.active,
  :hover {
    color: ${({ theme }) => theme.palette.primary};
  }
`
