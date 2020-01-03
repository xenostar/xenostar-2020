import React from 'react'
import Header from 'components/Header'
import Nav from 'components/Nav'
import Footer from 'components/Footer'

export default ({ children }) => (
  <div>
    <Header/>
    <Nav/>
    {children}
    <Footer/>
  </div>
)
