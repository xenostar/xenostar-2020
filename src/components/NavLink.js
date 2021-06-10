import styled from 'styled-components'
import { Anchor } from 'components'

export const NavLink = styled(Anchor)`
  align-items: center;
  color: ${props => props.theme.colors.secondary};
  display: flex;
  font-family: ${props => props.theme.fonts.family.montserrat};
  font-weight: ${props => props.theme.fonts.weight.bold};
  padding: 0 15px;
  transition: ${props => props.theme.transitions.default};
  &.active,
  :hover {
    color: ${props => props.theme.colors.primary};
  }
`
