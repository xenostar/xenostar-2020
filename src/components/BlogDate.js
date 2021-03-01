import PropTypes from 'prop-types'
import styled from 'styled-components'
import { FaCalendarAlt as FaCalendarAlt_ } from 'react-icons/fa'

export const BlogDate = ({ children, ...props }) => (
  <StyledBlogDate {...props}>
    <FaCalendarAlt />
    {children}
  </StyledBlogDate>
)

BlogDate.propTypes = {
  children: PropTypes.node
}

const StyledBlogDate = styled.div`
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
