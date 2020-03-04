import React from 'react'
import styled from 'styled-components'
import { FaFacebookF, FaTwitter, FaLinkedinIn } from 'react-icons/fa'

export const BlogShare = ({...props }) => (
  <StyledBlogShare {...props}>
    <Link href="https://www.facebook.com/sharer/sharer.php?u=https://xenostar-2020.netlify.com/blog/even-a-fourth-post-with-longer-name" target="_blank" rel="noopener noreferrer">
      <FaFacebookF />
    </Link>
    <Link href="https://twitter.com/share?url=https://xenostar-2020.netlify.com/blog/even-a-fourth-post-with-longer-name&text=&via=xen0star" target="_blank" rel="noopener noreferrer">
      <FaTwitter />
    </Link>
    <Link href="https://www.linkedin.com/shareArticle?mini=true&url=https://xenostar-2020.netlify.com/blog/even-a-fourth-post-with-longer-name&title=&summary=&source=" target="_blank" rel="noopener noreferrer">
      <FaLinkedinIn />
    </Link>
  </StyledBlogShare>
)

const StyledBlogShare = styled.div`
  display: flex;
`
const Link = styled.a`
  color: ${props => props.theme.colors.lightGrey};
  display: flex;
  font-size: 21px;
  margin-left: ${props => props.theme.layout.borderRadius};
  :first-child {
    margin-left: 0;
  }
`
