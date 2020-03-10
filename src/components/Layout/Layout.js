import React from 'react'
import styled, { ThemeProvider } from 'styled-components'
import PropTypes from 'prop-types'
import { StoreProvider } from 'easy-peasy'
import { HelmetProvider } from 'react-helmet-async'
import { store, theme } from 'utils'
import {
  StoreSync,
  SEO,
  NormalizeStyle,
  ResetStyle,
  GlobalStyle,
  TopBar,
  MobileNav,
} from 'components'

const Layout = ({ children, location }) => (
  <ThemeProvider theme={theme}>
    <StoreProvider store={store}>
      <HelmetProvider>
        <StyledLayout>
          <StoreSync location={location} />
          <SEO />
          <NormalizeStyle />
          <ResetStyle />
          <GlobalStyle />
          <TopBar />
          <MobileNav />
          {children}
        </StyledLayout>
      </HelmetProvider>
    </StoreProvider>
  </ThemeProvider>
)

Layout.propTypes = {
  children: PropTypes.any,
  location: PropTypes.object,
}

const StyledLayout = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
`

export default Layout
