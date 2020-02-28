import React from 'react'
import styled from 'styled-components'

export const BlogDate = ({ children }) => (
  <StyledBlogDate>
    {children}
  </StyledBlogDate>
)

const StyledBlogDate = styled.p`
  color: ${props => props.theme.colors.lightGrey};
  font-size: 1em;
  font-weight: ${props => props.theme.fonts.bold};
  text-transform: uppercase;
`
