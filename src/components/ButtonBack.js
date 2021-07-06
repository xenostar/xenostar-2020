import PropTypes from 'prop-types'
import styled from 'styled-components'
import { NavLink as NavLink_ } from 'components'
import { FaChevronLeft as FaChevronLeft_ } from 'react-icons/fa'
import { media } from 'utils'

export const ButtonBack = ({ children, ...props }) => (
  <NavLink {...props}>
    <FaChevronLeft />
    {children}
  </NavLink>
)

ButtonBack.propTypes = {
  children: PropTypes.node
}

const NavLink = styled(NavLink_)`
  margin-left: ${({ theme }) => theme.spacing.default};
  margin-right: auto;
  pointer-events: auto;
  padding: 0;
  ${media.phone`
    margin-left: ${({ theme }) => theme.spacing.small};
  `}
`
const FaChevronLeft = styled(FaChevronLeft_)`
  margin-right: ${({ theme }) => theme.spacing.tiny};
`
