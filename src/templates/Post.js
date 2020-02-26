import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { Page, SEO, Header, Section, Row, Col } from 'components'

const Post = ({ pageContext: { data } }) => {
  const [catList, setCatList] = useState([])

  useEffect(() => {
    const splitCats = data.categories.split(', ')
    setCatList(splitCats)
  }, [data.categories])

  return (
    <Page>
      <SEO title={data.seo.title} description={data.seo.description} />
      <Header title="Blog" introText="Read my thoughts. Or don't." />
      <Section>
        <Row>
          <Col>
            <Title>{data.title}</Title>
            <Excerpt>{data.excerpt}</Excerpt>
            <Date>{data.publishDate}</Date>
            <Categories>
              {catList.map((data, i) => (
                <Category key={i}>{data}</Category>
              ))}
            </Categories>
            <Body dangerouslySetInnerHTML={{ __html: data.body }} />
          </Col>
        </Row>
      </Section>
    </Page>
  )
}

const Title = styled.h3``
const Excerpt = styled.p`
  font-weight: bold;
`
const Date = styled.p``
const Body = styled.div``
const Categories = styled.div`
  display: flex;
`
const Category = styled.div`
  background-color: ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.white};
  font-size: 12px;
  margin-left: 6px;
  padding: 6px 8px;
  border-radius: 100px;
  :first-child {
    margin-left: 0;
  }
`

export default Post
