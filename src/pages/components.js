import React from 'react'
import { SEO, Page, SubHeader, Section, Row, Footer } from 'components'

export default () => (
  <Page>
    <SEO title="Components" />
    <SubHeader page="components" />
    <Section>
      <Row>
        <h1>Header 1</h1>
        <h2>Header 2</h2>
        <h3>Header 3</h3>
        <h4>Header 4</h4>
        <h5>Header 5</h5>
        <h6>Header 6</h6>
        <p>
          Et ea non <a href="https://www.google.com/">ipsum</a> cupidatat labore
          nulla sint sunt culpa. Dolore velit minim ad culpa id. Non esse
          deserunt ad culpa ipsum excepteur aute dolor eiusmod ea ex et
          proident.
        </p>
        <ul>
          <li>List Item 1</li>
          <li>List Item 2</li>
          <li>List Item 3</li>
        </ul>
        <p>
          Et ea non <a href="https://www.google.com/">ipsum</a> cupidatat labore
          nulla sint sunt culpa. Dolore velit minim ad culpa id. Non esse
          deserunt ad culpa ipsum excepteur aute dolor eiusmod ea ex et
          proident.
        </p>
        <code>
          function(test)
        </code>
        <ol>
          <li>List Item 1</li>
          <li>List Item 2</li>
          <li>List Item 3</li>
        </ol>
      </Row>
    </Section>
    <Footer />
  </Page>
)
