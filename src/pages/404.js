import React from 'react'
import { Page, SEO, Section, Row, Footer } from 'components'

export default () => (
  <Page>
    <SEO title="404" />
    <Section>
      <Row>
        <p>Page not found!</p>
      </Row>
    </Section>
    <Footer />
  </Page>
)
