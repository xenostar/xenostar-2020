import React from 'react'
import { SubHeader, Page, SEO, Section, Row } from 'components'

export default () => (
  <>
    <SEO title="404" />
    <SubHeader page="404" />
    <Page>
      <Section>
        <Row>
          <p>Page not found!</p>
        </Row>
      </Section>
    </Page>
  </>
)
