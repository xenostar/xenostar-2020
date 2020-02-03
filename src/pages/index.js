import React from 'react'
import styled from 'styled-components'
import { Page, Section, Row, Col, Footer } from 'components'

export default () => (
  <Page>
    <Header>
      <Row>
        <Col>
          <Title>
            Hi, I'm <span>Bryan</span><br />I make <a href="https://www.google.com">things</a>
          </Title>
          <h3>
            Welcome to my portfolio. I have been designing and developing web
            pages for nearly ten years. Creating beautiful, elegant web
            applications is my passion. Browse my portfolio and learn more about
            who I am and what I do.
          </h3>
        </Col>
      </Row>
    </Header>
    <Section>
      <Row>
        <Col>
          <p>
            Quis proident sit laboris in laboris aliquip consequat ad ad ex
            nostrud et commodo magna. Amet cillum incididunt anim laborum enim.
            Duis tempor ipsum cillum non. Deserunt consequat ut exercitation in
            dolore. Lorem cillum dolore aute excepteur fugiat aliqua sunt sit
            tempor ea eu.
          </p>
        </Col>
      </Row>
    </Section>
    <Footer />
  </Page>
)

const Title = styled.h1`
  span {
    color: ${props => props.theme.colors.primary};
  }
`

const Header = styled(Section)`
  padding-top: 180px;
`
