import React from 'react'
import {
  Page,
  SEO,
  Header,
  Section,
  Row,
  Col,
  BlogPost,
  Footer
} from 'components'
import { useBlogApi, useBlogPostApi } from 'hooks'

const Blog = () => {
  const { seo, introText } = useBlogApi()
  const { items } = useBlogPostApi()

  return (
    <Page>
      <SEO title={seo.title} description={seo.description} />
      <Header title={seo.title} introText={introText} />
      <Section>
        <Row>
          <Col>
            {items.map(data => (
              <BlogPost
                key={data.title}
                title={data.title}
                slug={data.slug}
                publishDate={data.publishDate}
                body={data.body}
                excerpt={data.excerpt}
                categories={data.categories}
                seo={data.seo}
              />
            ))}
          </Col>
        </Row>
      </Section>
      <Footer />
    </Page>
  )
}

export default Blog
