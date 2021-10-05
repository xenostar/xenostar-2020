import { darkTheme, lightTheme } from 'utils'
import { ThemeProvider as StyledThemeProvider } from 'styled-components'
import { useStoreState } from 'easy-peasy'
import PropTypes from 'prop-types'

export const ThemeProvider = ({ children }) => {
  const isDarkMode = useStoreState(state => state.theme.isDarkMode)

  return (
    <StyledThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      {children}
    </StyledThemeProvider>
  )
}

ThemeProvider.propTypes = {
  children: PropTypes.node
}
