import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import {
  Page,
  SEO,
  HeaderPost,
  Section as Section_,
  Row,
  Col,
  Footer,
} from 'components'
import { FaFolder as FaFolder_ } from 'react-icons/fa'

const Post = ({
  location: { pathname },
  pageContext: { data }
}) => {
  const [catList, setCatList] = useState([])
  console.log("Pathname", pathname)

  useEffect(() => {
    const splitCats = data.categories.split(', ')
    setCatList(splitCats)
  }, [data.categories])

  return (
    <Page>
      <SEO title={data.seo.title} description={data.seo.description} />
      <HeaderPost
        date={data.publishDate}
        introText={data.excerpt}
        pathname={pathname}
        title={data.title}
      />
      <Section>
        <Row>
          <Col>
            <Body dangerouslySetInnerHTML={{ __html: data.body }} />
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
  location: PropTypes.object,
  pageContext: PropTypes.object,
}

const Section = styled(Section_)`
  padding-top: ${props => props.theme.layout.spacing};
`
const Body = styled.div`
  margin-bottom: ${props => props.theme.layout.spacing};
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
