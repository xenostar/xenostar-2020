import styled from 'styled-components'
import {
  AboutGrid,
  AboutGridItem,
  Chip,
  ChipHolder,
  Col,
  Content,
  Footer,
  Header,
  Page,
  Row,
  Section as _Section,
  Typography,
  SEO
} from 'components'
import { useAboutApi, useAboutInfo } from 'hooks'

const About = () => {
  const { contentNode, introText, photos, seo } = useAboutApi()
  const { items } = useAboutInfo()

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
      <Section>
        <Row>
          <Col>
            <Typography size="h3">Find Me</Typography>
            <ChipHolder>
              {items.map((data, i) => (
                <Chip
                  key={i}
                  text={data.text}
                  href={data.url || data.file.url}
                />
              ))}
            </ChipHolder>
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
