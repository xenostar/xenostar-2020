import React from 'react'
import styled from 'styled-components'
import { FaCalendarAlt as FaCalendarAlt_ } from 'react-icons/fa'

export const BlogDate = ({ children }) => (
  <StyledBlogDate>
    <FaCalendarAlt />
    {children}
  </StyledBlogDate>
)

const StyledBlogDate = styled.p`
  align-items: center;
  display: flex;
  color: ${props => props.theme.colors.lightGrey};
  font-size: 0.875em;
  font-weight: ${props => props.theme.fonts.bold};
  text-transform: uppercase;
`
const FaCalendarAlt = styled(FaCalendarAlt_)`
  font-size: 21px;
  margin-right: ${props => props.theme.layout.borderRadius};
`
