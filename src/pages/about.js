import styled from 'styled-components'
import {
  AboutGrid,
  AboutGridItem,
  Col,
  Content,
  Footer,
  Header,
  Page,
  Row,
  Section as _Section,
  SEO
} from 'components'
import { useAboutApi } from 'hooks'

const About = () => {
  const { contentNode, introText, photos, seo } = useAboutApi()

  return (
    <Page>
      <SEO title={seo.title} description={seo.description} />
      <Header title={seo.title} introText={introText} />
      <AboutGrid>
        {photos.map((photo, i) => (
          <AboutGridItem key={i} image={photo} />
        ))}
      </AboutGrid>
      <Section>
        <Row>
          <Col>
            <Content
              dangerouslySetInnerHTML={{
                __html: contentNode.childMarkdownRemark.html
              }}
            />
          </Col>
        </Row>
      </Section>
      <Footer />
    </Page>
  )
}

const Section = styled(_Section)`
  padding-top: 0;
`

export default About
