import React from 'react'
import PropTypes from 'prop-types'
import styled, { ThemeProvider } from 'styled-components'
import { StoreProvider } from 'easy-peasy'
import { HelmetProvider } from 'react-helmet-async'
import {
  StoreSync,
  SEO,
  StyleNormalize,
  StyleReset,
  StyleGlobal,
  TopBar,
  MobileNav
} from 'components'
import { store, theme } from 'utils'

const Layout = ({ children, path }) => (
  <StoreProvider store={store}>
    <ThemeProvider theme={theme}>
      <HelmetProvider>
        <StyledLayout>
          <StoreSync path={path} />
          <SEO />
          <StyleNormalize />
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
