import React from 'react'
import styled from 'styled-components'
import { Header, Nav, Footer, NormalizeStyle, ResetStyle, GlobalStyle } from 'components'

const Layout = ({ children }) => (
  <StyledLayout>
    <NormalizeStyle />
    <ResetStyle />
    <GlobalStyle />
    <Header />
    <Nav />
    {children}
    <Footer />
  </StyledLayout>
)

const StyledLayout = styled.div`
  background-color: rgba(255, 255, 255, 0.85);
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  max-width: 90vw;
  min-height: 100vh;
  padding: 1.875rem;
  position: relative;
  @media only screen and (max-width: 62.5rem) {
    min-width: 100%;
    padding: 1.875rem 0.9375rem 5.3125rem;
  }
`

export default Layout
