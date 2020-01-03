import React from 'react'
import { Header, Nav, Footer } from 'components'

export const App = ({ children }) => (
  <div>
    <Header/>
    <Nav/>
    {children}
    <Footer/>
  </div>
)
