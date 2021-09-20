// import { useState } from 'react'
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
import { store, theme } from 'utils'
import 'normalize.css'

const Layout = ({ children, path }) => {
  // const [isDarkMode, setIsDarkMode] = useState(false)
  return (
    <StoreProvider store={store}>
      <ThemeProvider theme={theme}>
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
