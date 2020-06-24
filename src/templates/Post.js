import React, { useState, useEffect } from 'react'
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
import hljs from 'highlight.js/lib/core'
import javascript from 'highlight.js/lib/languages/javascript'
import 'highlight.js/styles/atom-one-dark.css'
import { FaFolder as FaFolder_ } from 'react-icons/fa'

hljs.registerLanguage('javascript', javascript)
hljs.configure({
  languages: ['javascript']
})
hljs.addPlugin({
  'after:highlightBlock': ({ block, result }) => {
    // move the language from the result into the dataset
    block.dataset.language = result.language
  }
})

const Post = ({ data: { datoCmsBlogPost: data }, path }) => {
  const [catList, setCatList] = useState([])

  useEffect(() => {
    const splitCats = data.categories.split(', ')
    setCatList(splitCats)
  }, [data.categories])

  useEffect(() => {
    document.querySelectorAll('pre').forEach(block => {
      hljs.highlightBlock(block)
    })
  }, [data])

  return (
    <Page>
      <SEO title={data.seo.title} description={data.seo.description} />
      <HeaderPost
        date={data.publishDate}
        introText={data.excerpt}
        path={path}
        title={data.title}
      />
      <Section>
        <Row>
          <Col>
            <Content dangerouslySetInnerHTML={{ __html: data.body }} />
            <Categories>
              <FaFolder />
              {catList.map((data, i) => (
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
      publishDate(formatString: "MMMM Do, YYYY", locale: "en")
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
  padding-top: ${props => props.theme.layout.spacing};
`
const Content = styled(Content_)`
  margin-bottom: ${props => props.theme.layout.spacing};
  max-width: 100%;
`
const Categories = styled.div`
  display: flex;
  align-items: center;
`
const FaFolder = styled(FaFolder_)`
  color: ${props => props.theme.colors.lightGrey};
  font-size: 21px;
`
const Category = styled.div`
  background-color: ${props => props.theme.colors.primary};
  border-radius: ${props => props.theme.layout.borderRadius};
  color: ${props => props.theme.colors.white};
  font-size: 14px;
  font-weight: ${props => props.theme.fonts.bold};
  margin-left: ${props => props.theme.layout.borderRadius};
  padding: 8px 10px;
`

export default Post
