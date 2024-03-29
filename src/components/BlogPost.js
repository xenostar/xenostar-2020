import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Typography, Anchor, BlogDate as BlogDate_ } from 'components'
import { routes } from 'utils'

export const BlogPost = ({
  excerpt = 'Lorem Ipsum.',
  publishDate,
  slug = 'post-title',
  title = 'Post Title',
  ...props
}) => (
  <StyledBlogPost {...props}>
    <Typography as="h3" size="h3" mb>
      <Anchor to={routes.blog.url + '/' + slug}>{title}</Anchor>
    </Typography>
    <BlogDate>{publishDate}</BlogDate>
    <Typography>{excerpt}</Typography>
  </StyledBlogPost>
)

BlogPost.propTypes = {
  excerpt: PropTypes.string,
  publishDate: PropTypes.string,
  slug: PropTypes.string,
  title: PropTypes.string
}

const StyledBlogPost = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: ${({ theme }) => theme.spacing.huge};
  :first-child {
    margin-top: 0;
  }
`
const BlogDate = styled(BlogDate_)`
  margin-bottom: ${({ theme }) => theme.spacing.default};
`
