import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { Anchor } from 'components'

export const BlogItem = ({
  title = 'Post Title',
  slug = 'post-title',
  body = 'Lorem Ipsum',
  excerpt = 'Lorem Ipsum.',
  categories,
  tags = 'Tag',
  seo,
  ...props
}) => {
  const [catList, setCatList] = useState([])

  useEffect(() => {
    const newCats = categories.split(', ')
    console.log(newCats)
    setCatList(newCats)
  }, [categories])

  return (
    <StyledBlogItem {...props}>
      <Title>
        <Anchor to={'/blog/' + slug}>
          {title}
        </Anchor>
      </Title>
      {/* <div dangerouslySetInnerHTML={{ __html: body }} /> */}
      <p>{excerpt}</p>
      <Categories>
        {catList.map((data, i) => (
          <Category key={i}>{data}</Category>
        ))}
      </Categories>
      <Tags>{tags}</Tags>
    </StyledBlogItem>
  )
}

BlogItem.propTypes = {
  title: PropTypes.string,
  slug: PropTypes.string,
  body: PropTypes.string,
  excerpt: PropTypes.string,
  categories: PropTypes.string,
  tags: PropTypes.string,
  seo: PropTypes.object,
}

const StyledBlogItem = styled.div`
  display: block;
  grid-area: ${({ number }) => number};
  margin-top: 5rem;
  :first-child {
    margin-top: 0;
  }
`
const Title = styled.h3``
const Categories = styled.div`
  display: flex;
`
const Category = styled.div`
  background-color: ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.white};
  font-size: 12px;
  padding: 8px;
  border-radius: 100px;
`
const Tags = styled.p``
