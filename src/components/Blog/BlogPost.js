import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { Anchor, BlogDate } from 'components'

export const BlogPost = ({
  title = 'Post Title',
  slug = 'post-title',
  publishDate,
  body = 'Lorem Ipsum',
  excerpt = 'Lorem Ipsum.',
  seo,
  ...props
}) => (
  <StyledBlogPost {...props}>
    <Title>
      <Anchor to={'/blog/' + slug}>
        {title}
      </Anchor>
    </Title>
    <BlogDate>{publishDate}</BlogDate>
    <Excerpt>{excerpt}</Excerpt>
  </StyledBlogPost>
)

BlogPost.propTypes = {
  title: PropTypes.string,
  slug: PropTypes.string,
  publishDate: PropTypes.string,
  body: PropTypes.string,
  excerpt: PropTypes.string,
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
const Excerpt = styled.p``
