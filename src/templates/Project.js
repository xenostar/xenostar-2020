import React from 'react'
import styled from 'styled-components'
import { graphql } from 'gatsby'
import PropTypes from 'prop-types'
import {
  Page,
  SEO,
  HeaderProject,
  Section as Section_,
  Row,
  Col,
  Content as Content_,
  ProjectItem,
  Footer
} from 'components'

const Project = ({ data: { datoCmsPortfolioItem: data } }) => {
  console.log(data)
  return (
    <Page>
      <SEO title={data.seo.title} description={data.seo.description} />
      <HeaderProject name={data.name} />
      <Section>
        <Row>
          <Col width="47%">
            <Content dangerouslySetInnerHTML={{ __html: data.description }} />
          </Col>
          <Col width="47%">
            <ProjectItem image={data.image} />
          </Col>
        </Row>
      </Section>
      <Footer />
    </Page>
  )
}

Project.propTypes = {
  data: PropTypes.object
}

export const query = graphql`
  query($slug: String!) {
    datoCmsPortfolioItem(slug: { eq: $slug }) {
      name
      description
      tools
      image {
        fluid(maxWidth: 450) {
          ...GatsbyDatoCmsFluid
        }
        alt
        title
      }
      featuredImage {
        fluid(maxWidth: 450) {
          ...GatsbyDatoCmsFluid
        }
        alt
        title
      }
      slug
      seo {
        title
        description
      }
    }
  }
`

const Section = styled(Section_)`
  padding-top: ${props => props.theme.layout.spacing};
`
const Content = styled(Content_)`
  margin-bottom: ${props => props.theme.layout.spacing};
  max-width: 100%;
`

export default Project
