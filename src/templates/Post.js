import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { graphql } from 'gatsby'
import {
  Page,
  SEO,
  HeaderPost,
  Section as Section_,
  Row,
  Col,
  Content as Content_,
  Footer
} from 'components'
import { FaFolderOpen as FaFolderOpen_ } from 'react-icons/fa'
import hljs from 'highlight.js/lib/core'
import javascript from 'highlight.js/lib/languages/javascript'
import 'highlight.js/styles/atom-one-dark.css'
import { formatDate } from 'utils'

hljs.registerLanguage('javascript', javascript)
hljs.configure({ languages: ['javascript'] })
// hljs.addPlugin({
//   'after:highlightBlock': ({ block, result }) => {
//     // move the language from the result into the dataset
//     block.dataset.language = result.language
//   }
// })

const Post = ({ data: { datoCmsBlogPost: data }, path }) => {
  const categories = data.categories.split(', ')

  useEffect(() => {
    document.querySelectorAll('pre, code').forEach(block => {
      hljs.highlightBlock(block)
    })
  }, [data])

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
            <Content dangerouslySetInnerHTML={{ __html: data.body }} />
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
      body
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
  border-radius: ${props => props.theme.layout.borderRadius};
  color: ${props => props.theme.colors.common.white};
  font-size: 14px;
  font-weight: ${props => props.theme.fonts.bold};
  margin-left: ${props => props.theme.layout.borderRadius};
  padding: 8px 10px;
`

export default Post
