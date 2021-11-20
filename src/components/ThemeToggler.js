import { CgSun, CgMoon } from 'react-icons/cg'
import styled from 'styled-components'

import { useDarkMode } from 'hooks'

export const ThemeToggler = () => {
  const { isDarkMode, handleToggleTheme } = useDarkMode()

  return (
    <StyledButton onClick={handleToggleTheme}>
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
