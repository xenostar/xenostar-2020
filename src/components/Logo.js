import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Anchor as Anchor_ } from 'components'
import { routes } from 'utils'

export const Logo = ({ isSmall = false }) => (
  <StyledLogo>
    <Anchor $isSmall={isSmall} to={routes.home.url}>
      <Text isSmall={isSmall}>
        X<TextColor>S</TextColor>
        <HomeText isSmall={isSmall}>Home</HomeText>
      </Text>
    </Anchor>
  </StyledLogo>
)

Logo.propTypes = {
  isSmall: PropTypes.bool
}

const StyledLogo = styled.div`
  border-radius: ${({ theme }) => theme.shape.borderRadius.default};
  display: flex;
  transition: ${({ theme }) => theme.transition.default};
  :active {
    transform: ${({ theme }) => theme.transforms.active};
  }
  :hover {
    box-shadow: ${({ theme }) => theme.palette.boxShadow};
    z-index: 10;
  }
`
const Anchor = styled(Anchor_)`
  align-items: center;
  background-color: ${({ theme }) => theme.palette.tertiary};
  border-radius: ${({ theme }) => theme.shape.borderRadius.default};
  color: ${({ theme }) => theme.palette.common.white};
  display: inline-flex;
  font-family: ${({ theme }) => theme.fonts.family.bebasNeue};
  font-size: ${props => (props.$isSmall ? '1.75rem' : '3.75rem')};
  height: ${props => (props.$isSmall ? '2.5rem' : '5rem')};
  justify-content: center;
  line-height: 1;
  pointer-events: auto;
  position: relative;
  transition: ${({ theme }) => theme.transition.default};
  width: ${props => (props.$isSmall ? '2.5rem' : '5rem')};
  :hover {
    background-color: ${({ theme }) => theme.palette.common.transparent};
  }
  :before {
    content: '';
    border-radius: ${({ theme }) => theme.shape.borderRadius.default};
    background-image: ${({ theme }) => theme.palette.gradient};
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: -1;
  }
`
const Text = styled.div`
  padding-top: ${props => (props.isSmall ? '0.2375rem' : '0.4375rem')};
  position: relative;
`
const TextColor = styled.span`
  color: ${({ theme }) => theme.palette.primary};
  opacity: 1;
  transition: ${({ theme }) => theme.transition.duration.default} opacity
    ${({ theme }) => theme.transition.easing.default};
  ${Anchor}:hover & {
    opacity: 0;
  }
`
const HomeText = styled.div`
  color: ${({ theme }) => theme.palette.common.white};
  font-size: 25.7px;
  font-size: ${props => (props.isSmall ? '12px' : '25.7px')};
  opacity: 0;
  position: absolute;
  top: ${props => (props.isSmall ? '-6px' : '-14px')};
  right: ${props => (props.isSmall ? '-2px' : '-4px')};
  transform: rotate(-90deg) translateZ(0);
  transform-origin: bottom right;
  transition: ${({ theme }) => theme.transition.default};
  ${Anchor}:hover & {
    opacity: 1;
  }
`
