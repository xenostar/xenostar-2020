import {
  BlogPost,
  Col,
  Footer,
  Header,
  Page,
  Row,
  Section,
  SEO
} from 'components'
import { useBlogApi, useBlogPostApi } from 'hooks'
import { formatDate } from 'utils'

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
                excerpt={data.excerpt}
                publishDate={formatDate(data.publishDate)}
                slug={data.slug}
                title={data.title}
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
