import styled from 'styled-components'
import { Anchor } from 'components'

export const MobileNavLink = styled(Anchor)`
  color: ${props => props.theme.colors.primary};
  display: flex;
  font-family: ${props => props.theme.fonts.montserrat};
  font-size: 3em;
  font-weight: ${props => props.theme.fonts.boldBlack};
  justify-content: flex-end;
  line-height: 60px;
  transition: ${props => props.theme.transitions.default};
  padding: ${props => props.theme.layout.spacing.default};
  &.active,
  :hover {
    background-color: ${props => props.theme.colors.primary};
    color: ${props => props.theme.colors.secondary};
  }
`
