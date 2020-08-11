import React from 'react'
import {
  Page,
  SEO,
  Header,
  Section,
  Row,
  Col,
  Content,
  Typography,
  Footer
} from 'components'
import { useAboutApi } from 'hooks'

const About = () => {
  const { seo, introText } = useAboutApi()

  return (
    <Page>
      <SEO title={seo.title} description={seo.description} />
      <Header title={seo.title} introText={introText} />
      <Section>
        <Row>
          <Col>
            <Content>
              <Typography>
                Nulla sit ullamco ex adipisicing consequat sunt incididunt. Anim
                qui Lorem ea sunt exercitation sunt Lorem sit do. Est laborum
                nostrud dolor sit cupidatat nisi ut incididunt. Qui aliqua ea
                cupidatat deserunt aute anim velit culpa id cupidatat. Esse
                culpa officia nisi commodo duis excepteur minim dolore deserunt
                et. Est eiusmod id ut eu qui ex quis magna incididunt enim
                officia pariatur consectetur. Amet nisi do nisi tempor dolore
                labore dolore sit sit laborum dolore commodo commodo veniam.
              </Typography>
              <Typography>
                Nulla sit ullamco ex adipisicing consequat sunt incididunt. Anim
                qui Lorem ea sunt exercitation sunt Lorem sit do. Est laborum
                nostrud dolor sit cupidatat nisi ut incididunt. Qui aliqua ea
                cupidatat deserunt aute anim velit culpa id cupidatat. Esse
                culpa officia nisi commodo duis excepteur minim dolore deserunt
                et. Est eiusmod id ut eu qui ex quis magna incididunt enim
                officia pariatur consectetur. Amet nisi do nisi tempor dolore
                labore dolore sit sit laborum dolore commodo commodo veniam.
              </Typography>
            </Content>
          </Col>
        </Row>
      </Section>
      <Footer />
    </Page>
  )
}

export default About
