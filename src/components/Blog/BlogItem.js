import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
// import AniLink_ from 'gatsby-plugin-transition-link/AniLink'
// import { routes } from 'utils'

export const BlogItem = ({
  title,
  slug,
  body,
  categories,
  tags,
  seo,
  ...props
}) => (
  <StyledBlogItem {...props}>
    <div>{title}</div>
    <div>{slug}</div>
    <div dangerouslySetInnerHTML={{ __html: body }} />
    <div>{categories}</div>
    <div>{tags}</div>
  </StyledBlogItem>
)

BlogItem.propTypes = {
  title: PropTypes.string,
  slug: PropTypes.string,
  body: PropTypes.string,
  categories: PropTypes.string,
  tags: PropTypes.string,
  seo: PropTypes.object,
}

const StyledBlogItem = styled.div`
  display: block;
  grid-area: ${({ number }) => number};
`
