import React from 'react'
import { Page, Header, SEO, Section, Footer } from 'components'

const FourZeroFour = () => (
  <Page>
    <SEO title="404" description="Page not found." />
    <Header title="Oops!" introText="This page appears to be missing..." />
    <Section />
    <Footer />
  </Page>
)

export default FourZeroFour
