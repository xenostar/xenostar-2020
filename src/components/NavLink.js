import styled from 'styled-components'
import { Anchor } from 'components'

export const NavLink = styled(Anchor)`
  align-items: center;
  color: ${({ theme }) => theme.palette.text.primary};
  display: flex;
  font-family: ${({ theme }) => theme.fonts.family.montserrat};
  font-weight: ${({ theme }) => theme.fonts.weight.bold};
  padding: 0 ${({ theme }) => theme.spacing.small};
  transition: ${({ theme }) => theme.transition.default};
  &.active,
  :hover {
    color: ${({ theme }) => theme.palette.primary};
  }
`
