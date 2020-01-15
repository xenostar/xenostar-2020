import React from 'react'
import styled, { ThemeProvider } from 'styled-components'
import { StoreProvider } from 'easy-peasy'
import { store, theme } from 'utils'
import {
  StoreSync,
  SEO,
  NormalizeStyle,
  ResetStyle,
  GlobalStyle,
  TopBar,
  Nav,
} from 'components'

const Layout = ({ children, location }) => (
  <StoreProvider store={store}>
    <ThemeProvider theme={theme}>
      <StyledLayout>
        <StoreSync location={location} />
        <SEO title="" />
        <NormalizeStyle />
        <ResetStyle />
        <GlobalStyle />
        <TopBar />
        <Nav />
        {children}
      </StyledLayout>
    </ThemeProvider>
  </StoreProvider>
)

const StyledLayout = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
`

export default Layout
