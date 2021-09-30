import { useState } from 'react'
import PropTypes from 'prop-types'
import { ThemeProvider } from 'styled-components'
import { StoreProvider } from 'easy-peasy'
import { HelmetProvider } from 'react-helmet-async'
import {
  StoreSync,
  SEO,
  StyleReset,
  StyleGlobal,
  TopBar,
  MobileNav
} from 'components'
import { store, darkTheme, lightTheme } from 'utils'
import 'normalize.css'

const Layout = ({ children, path }) => {
  const [isDarkMode, setIsDarkMode] = useState(false)

  const handleChangeTheme = mode => {
    setIsDarkMode(mode === 'dark' ? true : false)
  }

  return (
    <StoreProvider store={store}>
      <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
        <HelmetProvider>
          <StoreSync path={path} />
          <SEO />
          <StyleReset />
          <StyleGlobal />
          <TopBar path={path} />
          <MobileNav />
          {children}
        </HelmetProvider>
      </ThemeProvider>
    </StoreProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node,
  path: PropTypes.string
}

export default Layout
