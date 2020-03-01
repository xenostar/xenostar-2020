import React from 'react'
import styled from 'styled-components'
import { FaFacebookF, FaTwitter, FaLinkedinIn } from 'react-icons/fa'

export const BlogShare = ({...props }) => (
  <StyledBlogShare {...props}>
    <Link href="#" target="_blank" rel="noopener noreferrer">
      <FaFacebookF />
    </Link>
    <Link href="#" target="_blank" rel="noopener noreferrer">
      <FaTwitter />
    </Link>
    <Link href="#" target="_blank" rel="noopener noreferrer">
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
