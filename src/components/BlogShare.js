import PropTypes from 'prop-types'
import styled from 'styled-components'
import { FaTwitter, FaFacebookF, FaLinkedinIn } from 'react-icons/fa'
import { useSiteMetaData } from 'hooks'

export const BlogShare = ({ path = '', ...props }) => {
  const { siteUrl } = useSiteMetaData()
  const url = siteUrl + path

  return (
    <StyledBlogShare {...props}>
      <Link
        aria-label="Twitter"
        href={`https://twitter.com/share?url=${url}&text=&via=xen0star`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaTwitter />
      </Link>
      <Link
        aria-label="Facebook"
        href={`https://www.facebook.com/sharer/sharer.php?u=${url}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaFacebookF />
      </Link>
      <Link
        aria-label="LinkedIn"
        href={`https://www.linkedin.com/shareArticle?mini=true&url=${url}&title=&summary=&source=`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaLinkedinIn />
      </Link>
    </StyledBlogShare>
  )
}

BlogShare.propTypes = {
  path: PropTypes.string
}

const StyledBlogShare = styled.div`
  display: flex;
`
const Link = styled.a`
  color: ${({ theme }) => theme.palette.lightGrey};
  display: flex;
  font-size: 21px;
  margin-left: ${({ theme }) => theme.spacing.small};
  :first-child {
    margin-left: 0;
  }
  svg {
    transition: ${({ theme }) => theme.transition.default};
  }
  :hover svg {
    color: ${({ theme }) => theme.palette.primary};
  }
`
