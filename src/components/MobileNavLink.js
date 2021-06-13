import styled from 'styled-components'
import { Anchor } from 'components'

export const MobileNavLink = styled(Anchor)`
  color: ${props => props.theme.palette.primary};
  display: flex;
  font-family: ${props => props.theme.fonts.family.montserrat};
  font-size: 3em;
  font-weight: ${props => props.theme.fonts.weight.blackBold};
  justify-content: flex-end;
  line-height: 60px;
  transition: ${props => props.theme.transition.default};
  padding: ${props => props.theme.spacing.default};
  &.active,
  :hover {
    background-color: ${props => props.theme.palette.primary};
    color: ${props => props.theme.palette.secondary};
  }
`
