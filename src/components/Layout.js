// import { useState } from 'react'
import PropTypes from 'prop-types'
import styled, { ThemeProvider } from 'styled-components'
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
          <StyledLayout>
            <StoreSync path={path} />
            <SEO />
            <StyleReset />
            <StyleGlobal />
            <TopBar path={path} />
            <MobileNav />
            {children}
          </StyledLayout>
        </HelmetProvider>
      </ThemeProvider>
    </StoreProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node,
  path: PropTypes.string
}

const StyledLayout = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
`

export default Layout
