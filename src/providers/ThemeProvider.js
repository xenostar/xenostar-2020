import { darkTheme, lightTheme } from 'utils'
import { ThemeProvider as StyledThemeProvider } from 'styled-components'
import PropTypes from 'prop-types'

import { useDarkMode } from 'hooks'

export const ThemeProvider = ({ children }) => {
  const { isDarkMode } = useDarkMode()

  return (
    <StyledThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      {children}
    </StyledThemeProvider>
  )
}

ThemeProvider.propTypes = {
  children: PropTypes.node
}
