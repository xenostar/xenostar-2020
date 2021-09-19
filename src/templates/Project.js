import PropTypes from 'prop-types'
import styled from 'styled-components'
import { graphql } from 'gatsby'
import {
  Chip,
  ChipHolder,
  Col as Col_,
  Content,
  Footer,
  HeaderProject,
  Page,
  ProjectItem,
  Row as Row_,
  Section as Section_,
  SEO
} from 'components'
import { FaGithub, FaWrench } from 'react-icons/fa'
import { media } from 'utils'

const Project = ({ data: { datoCmsPortfolioItem: data } }) => (
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
          <ChipHolder>
            {data.link && <Chip href={data.link} text="View Project" />}
            {data.githubLink && (
              <Chip href={data.githubLink} icon={<FaGithub />} text="Github" />
            )}
            {data.tools && <Chip icon={<FaWrench />} text={data.tools} />}
          </ChipHolder>
        </Col>
      </Row>
    </Section>
    <Footer />
  </Page>
)

Project.propTypes = {
  data: PropTypes.object
}

export const query = graphql`
  query ($slug: String!) {
    datoCmsPortfolioItem(slug: { eq: $slug }) {
      name
      description
      link
      githubLink
      tools
      image {
        gatsbyImageData(width: 450)
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
  padding-top: ${({ theme }) => theme.spacing.default};
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
