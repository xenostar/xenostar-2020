import PropTypes from 'prop-types'
import styled from 'styled-components'
import { graphql } from 'gatsby'
import {
  Col,
  Content as Content_,
  Footer,
  HeaderPost,
  Page,
  Row,
  Section as Section_,
  SEO
} from 'components'
import { FaFolderOpen as FaFolderOpen_ } from 'react-icons/fa'
import { formatDate } from 'utils'

const Post = ({ data: { datoCmsBlogPost: data }, path }) => {
  const categories = data.categories.split(', ')

  return (
    <Page>
      <SEO title={data.seo.title} description={data.seo.description} />
      <HeaderPost
        date={formatDate(data.publishDate)}
        introText={data.excerpt}
        path={path}
        title={data.title}
      />
      <Section>
        <Row>
          <Col>
            <Content
              dangerouslySetInnerHTML={{
                __html: data.bodyNode.childMarkdownRemark.html
              }}
            />
            <Categories>
              <FaFolderOpen />
              {categories.map((data, i) => (
                <Category key={i}>{data}</Category>
              ))}
            </Categories>
          </Col>
        </Row>
      </Section>
      <Footer />
    </Page>
  )
}

Post.propTypes = {
  data: PropTypes.object,
  path: PropTypes.string
}

export const query = graphql`
  query($slug: String!) {
    datoCmsBlogPost(slug: { eq: $slug }) {
      title
      publishDate
      bodyNode {
        childMarkdownRemark {
          html
        }
      }
      excerpt
      categories
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
const Content = styled(Content_)`
  margin-bottom: ${props => props.theme.spacing.default};
  max-width: 100%;
`
const Categories = styled.div`
  display: flex;
  align-items: center;
`
const FaFolderOpen = styled(FaFolderOpen_)`
  color: ${props => props.theme.colors.lightGrey};
  font-size: 21px;
`
const Category = styled.div`
  background-color: ${props => props.theme.colors.primary};
  border-radius: ${props => props.theme.shape.borderRadius.default};
  color: ${props => props.theme.colors.common.white};
  font-size: 14px;
  font-weight: ${props => props.theme.fonts.weight.bold};
  margin-left: ${props => props.theme.shape.borderRadius.default};
  padding: 8px 10px;
`

export default Post
