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
  border-radius: ${props => props.theme.layout.borderRadius};
  display: flex;
  transition: ${props => props.theme.transitions.default};
  :active {
    transform: ${props => props.theme.transforms.active};
  }
  :hover {
    box-shadow: ${props => props.theme.colors.boxShadow};
    z-index: 10;
  }
`
const Anchor = styled(Anchor_)`
  align-items: center;
  background-color: ${props => props.theme.colors.tertiary};
  border-radius: ${props => props.theme.layout.borderRadius};
  color: ${props => props.theme.colors.common.white};
  display: inline-flex;
  font-family: ${props => props.theme.fonts.bebasNeue};
  font-size: ${props => (props.$isSmall ? '1.75rem' : '3.75rem')};
  height: ${props => (props.$isSmall ? '2.5rem' : '5rem')};
  justify-content: center;
  line-height: 1;
  pointer-events: auto;
  position: relative;
  transition: ${props => props.theme.transitions.default};
  width: ${props => (props.$isSmall ? '2.5rem' : '5rem')};
  :hover {
    background-color: ${props => props.theme.colors.transparent};
  }
  :before {
    content: '';
    border-radius: ${props => props.theme.layout.borderRadius};
    background-image: ${props => props.theme.colors.gradient};
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
  color: ${props => props.theme.colors.primary};
  opacity: 1;
  transition: ${props => props.theme.transitions.durations.default} opacity
    ${props => props.theme.transitions.easing.default};
  ${Anchor}:hover & {
    opacity: 0;
  }
`
const HomeText = styled.div`
  color: ${props => props.theme.colors.common.white};
  font-size: 25.7px;
  font-size: ${props => (props.isSmall ? '12px' : '25.7px')};
  opacity: 0;
  position: absolute;
  top: ${props => (props.isSmall ? '-6px' : '-14px')};
  right: ${props => (props.isSmall ? '-2px' : '-4px')};
  transform: rotate(-90deg) translateZ(0);
  transform-origin: bottom right;
  transition: ${props => props.theme.transitions.default};
  ${Anchor}:hover & {
    opacity: 1;
  }
`
