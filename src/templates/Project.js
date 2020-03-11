import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import {
  Page,
  SEO,
  Section as Section_,
  Row,
  Col,
  Footer,
} from 'components'

const Project = ({ location: { pathname }, pageContext: { data } }) => {
  return (
    <Page>
      <SEO title={data.seo.title} description={data.seo.description} />
      <Section>
        <Row>
          <Col>
            <p>Project Information coming soon!</p>
          </Col>
        </Row>
      </Section>
      <Footer />
    </Page>
  )
}

Project.propTypes = {
  location: PropTypes.object,
  pageContext: PropTypes.object,
}

const Section = styled(Section_)`
  padding-top: ${props => props.theme.layout.spacing};
`

export default Project
