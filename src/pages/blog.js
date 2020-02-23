import React from 'react'
import { Page, SEO, Header, Section, Row, Col, BlogItem, Footer } from 'components'
import { useBlogApi, useBlogItemApi } from 'hooks'

export default () => {
  const { seo, introText } = useBlogApi()
  const { items } = useBlogItemApi()

  return (
    <Page>
      <SEO title={seo.title} description={seo.description} />
      <Header title={seo.title} introText={introText} />
      <Section>
        <Row>
          <Col>
            {items.map((data, i) => (
              <BlogItem
                key={i}
                title={data.title}
                slug={data.slug}
                body={data.body}
                tags={data.tags}
                categories={data.categories}
                seo={seo}
              />
            ))}
          </Col>
        </Row>
      </Section>
      <Footer />
    </Page>
  )
}
