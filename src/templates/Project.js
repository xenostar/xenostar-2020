import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { graphql } from 'gatsby'
import {
  Page,
  SEO,
  HeaderProject,
  Section as Section_,
  Row as Row_,
  Col as Col_,
  Content,
  ProjectInfo,
  ProjectItem,
  Footer
} from 'components'
import { media } from 'utils'

const Project = ({ data: { datoCmsPortfolioItem: data } }) => {
  console.log(data)
  return (
    <Page>
      <SEO title={data.seo.title} description={data.seo.description} />
      <HeaderProject name={data.name} />
      <Section>
        <Row>
          <Col width="48%">
            <ProjectItem image={data.image} />
          </Col>
          <Col width="48%">
            <Content dangerouslySetInnerHTML={{ __html: data.description }} />
            <ProjectInfo link={data.link} tools={data.tools} />
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
      link
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
  padding-top: ${props => props.theme.spacing.default};
`
const Row = styled(Row_)`
  ${media.phablet`
    flex-direction: column;
  `}
`
const Col = styled(Col_)`
  ${media.phablet`
    width: 100%;
  `}
`

export default Project
