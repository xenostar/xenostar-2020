import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import {
  Page,
  SEO,
  HeaderPost,
  Section as Section_,
  Row,
  Col,
  Footer,
} from 'components'

const Post = ({ pageContext: { data } }) => {
  const [catList, setCatList] = useState([])

  useEffect(() => {
    const splitCats = data.categories.split(', ')
    setCatList(splitCats)
  }, [data.categories])

  return (
    <Page>
      <SEO title={data.seo.title} description={data.seo.description} />
      <HeaderPost title={data.title} date={data.publishDate} introText={data.excerpt} />
      <Section>
        <Row>
          <Col>
            <Body dangerouslySetInnerHTML={{ __html: data.body }} />
            <Categories>
              <CategoryFiled>Filed Under</CategoryFiled>
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

const Section = styled(Section_)`
  padding-top: ${props => props.theme.layout.padding};
`
const Body = styled.div`
  margin-bottom: ${props => props.theme.layout.padding};
`
const Categories = styled.div`
  display: flex;
  align-items: center;
`
const CategoryFiled = styled.div`
  color: ${props => props.theme.colors.lightGrey};
  cursor: default;
  font-size: 14px;
  font-weight: ${props => props.theme.fonts.bold};
  text-transform: uppercase;
  user-select: none;
`
const Category = styled.div`
  background-color: ${props => props.theme.colors.primary};
  border-radius: ${props => props.theme.layout.borderRadius};
  color: ${props => props.theme.colors.white};
  cursor: default;
  font-size: 14px;
  font-weight: ${props => props.theme.fonts.bold};
  margin-left: ${props => props.theme.layout.borderRadius};
  padding: 8px 10px;
  user-select: none;
`

export default Post
