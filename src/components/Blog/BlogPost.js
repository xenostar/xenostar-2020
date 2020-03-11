import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { Anchor, BlogDate as BlogDate_ } from 'components'
import { routes } from 'utils'

export const BlogPost = ({
  body = 'Lorem Ipsum',
  excerpt = 'Lorem Ipsum.',
  publishDate,
  seo,
  slug = 'post-title',
  title = 'Post Title',
  ...props
}) => (
  <StyledBlogPost {...props}>
    <Title>
      <Anchor to={routes.blog + '/' + slug}>{title}</Anchor>
    </Title>
    <BlogDate>{publishDate}</BlogDate>
    <Excerpt>{excerpt}</Excerpt>
  </StyledBlogPost>
)

BlogPost.propTypes = {
  body: PropTypes.string,
  excerpt: PropTypes.string,
  publishDate: PropTypes.string,
  seo: PropTypes.object,
  slug: PropTypes.string,
  title: PropTypes.string,
}

const StyledBlogPost = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: ${props => props.theme.layout.spacingHuge};
  :first-child {
    margin-top: 0;
  }
`
const Title = styled.h3``
const BlogDate = styled(BlogDate_)`
  margin-bottom: ${props => props.theme.layout.spacing};
`
const Excerpt = styled.p``
