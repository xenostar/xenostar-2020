import React from 'react'
import styled from 'styled-components'
import { FaTwitter, FaFacebookF, FaLinkedinIn } from 'react-icons/fa'
import { useStoreState } from 'easy-peasy'
import { useSiteMetaData } from 'hooks'

export const BlogShare = props => {
  const pathName = useStoreState(state => state.page.pathName)
  const { siteUrl } = useSiteMetaData()
  const url = siteUrl + pathName

  return (
    <StyledBlogShare {...props}>
      <Link
        href={`https://twitter.com/share?url=${url}&text=&via=xen0star`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaTwitter />
      </Link>
      <Link
        href={`https://www.facebook.com/sharer/sharer.php?u=${url}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaFacebookF />
      </Link>
      <Link
        href={`https://www.linkedin.com/shareArticle?mini=true&url=${url}&title=&summary=&source=`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaLinkedinIn />
      </Link>
    </StyledBlogShare>
  )
}

const StyledBlogShare = styled.div`
  display: flex;
`
const Link = styled.a`
  color: ${props => props.theme.colors.lightGrey};
  display: flex;
  font-size: 21px;
  margin-left: ${props => props.theme.layout.spacingSmall};
  :first-child {
    margin-left: 0;
  }
  svg {
    transition: ${props => props.theme.transitions.default};
  }
  :hover svg {
    color: ${props => props.theme.colors.primary};
  }
`
