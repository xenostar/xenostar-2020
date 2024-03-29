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
  query ($slug: String!) {
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
  padding-top: ${({ theme }) => theme.spacing.default};
`
const Content = styled(Content_)`
  margin-bottom: ${({ theme }) => theme.spacing.default};
  max-width: 100%;
`
const Categories = styled.div`
  display: flex;
  align-items: center;
`
const FaFolderOpen = styled(FaFolderOpen_)`
  color: ${({ theme }) => theme.palette.lightGrey};
  font-size: 21px;
`
const Category = styled.div`
  background-color: ${({ theme }) => theme.palette.primary};
  border-radius: ${({ theme }) => theme.shape.borderRadius.default};
  color: ${({ theme }) => theme.palette.common.white};
  font-size: 14px;
  font-weight: ${({ theme }) => theme.fonts.weight.bold};
  margin-left: ${({ theme }) => theme.shape.borderRadius.default};
  padding: 8px 10px;
`

export default Post
