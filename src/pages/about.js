import styled from 'styled-components'
import {
  AboutGrid,
  Chip,
  ChipHolder,
  Col,
  Content as _Content,
  Footer,
  Header,
  Page,
  ProjectItem,
  Row,
  Section as _Section,
  Typography,
  SEO
} from 'components'
import { useAboutApi } from 'hooks'

const About = () => {
  const { contentNode, introText, photos, seo, items } = useAboutApi()

  return (
    <Page>
      <SEO title={seo.title} description={seo.description} />
      <Header title={seo.title} introText={introText} />
      <AboutGrid>
        {photos.map((photo, i) => (
          <ProjectItem key={i} image={photo} />
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
                  bgColor={data?.backgroundColor?.hex}
                  href={data.url || data.file.url}
                  text={data.text}
                  textColor={data?.textColor?.hex}
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
const Content = styled(_Content)`
  & ul {
    list-style-type: none;
    margin-left: 1.6875rem;
    text-indent: -1.6875rem;
  }
`

export default About
