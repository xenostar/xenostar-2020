import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { Anchor } from 'components'

export const BlogPost = ({
  title = 'Post Title',
  slug = 'post-title',
  publishDate,
  body = 'Lorem Ipsum',
  excerpt = 'Lorem Ipsum.',
  categories,
  seo,
  ...props
}) => {
  const [catList, setCatList] = useState([])

  useEffect(() => {
    const splitCats = categories.split(', ')
    setCatList(splitCats)
  }, [categories])

  return (
    <StyledBlogPost {...props}>
      <Title>
        <Anchor to={'/blog/' + slug}>
          {title}
        </Anchor>
      </Title>
      <div>{publishDate}</div>
      {/* <div dangerouslySetInnerHTML={{ __html: body }} /> */}
      <Excerpt>{excerpt}</Excerpt>
      <Categories>
        {catList.map((data, i) => (
          <Category key={i}>{data}</Category>
        ))}
      </Categories>
    </StyledBlogPost>
  )
}

BlogPost.propTypes = {
  title: PropTypes.string,
  slug: PropTypes.string,
  publishDate: PropTypes.string,
  body: PropTypes.string,
  excerpt: PropTypes.string,
  categories: PropTypes.string,
  seo: PropTypes.object,
}

const StyledBlogPost = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: ${props => props.theme.layout.paddingHuge};
  :first-child {
    margin-top: 0;
  }
`
const Title = styled.h3``
const Categories = styled.div`
  display: flex;
`
const Excerpt = styled.p``
const Category = styled.div`
  background-color: ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.white};
  font-size: 12px;
  /* text-transform: uppercase; */
  margin-left: 6px;
  padding: 6px 8px;
  border-radius: 100px;
  :first-child {
    margin-left: 0;
  }
`
