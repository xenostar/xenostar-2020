import styled from 'styled-components'
import { Anchor } from 'components'

export const MobileNavLink = styled(Anchor)`
  color: ${({ theme }) => theme.palette.primary};
  display: flex;
  font-family: ${({ theme }) => theme.fonts.family.montserrat};
  font-size: 3em;
  font-weight: ${({ theme }) => theme.fonts.weight.blackBold};
  justify-content: flex-end;
  line-height: 60px;
  transition: ${({ theme }) => theme.transition.default};
  padding: ${({ theme }) => theme.spacing.default};
  &.active,
  :hover {
    background-color: ${({ theme }) => theme.palette.primary};
    color: ${({ theme }) => theme.palette.secondary};
  }
`
