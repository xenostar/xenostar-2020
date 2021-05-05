import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Typography as Typography_ } from 'components'
import { FaLink } from 'react-icons/fa'

export const Chip = ({
  bgColor = null,
  color = null,
  href = null,
  icon = null,
  rel = 'noopener noreferrer',
  target = '_blank',
  text = 'None',
  ...props
}) => (
  <StyledChip
    bgColor={bgColor}
    color={color}
    {...(href && {
      as: 'a',
      href: href
    })}
    {...(target === '_blank' && { target, rel })}
    {...props}
  >
    <Icon>{icon || <FaLink />}</Icon>
    <Typography noWrap>{text || href}</Typography>
  </StyledChip>
)

Chip.propTypes = {
  bgColor: PropTypes.string,
  color: PropTypes.string,
  href: PropTypes.string,
  icon: PropTypes.node,
  rel: PropTypes.string,
  target: PropTypes.string,
  text: PropTypes.string
}

const StyledChip = styled.div`
  align-items: stretch;
  background-color: ${props => props.bgColor || props.theme.colors.primary};
  border-radius: ${props => props.theme.layout.borderRadius};
  color: ${props => props.color || props.theme.colors.secondary};
  display: flex;
  margin-top: ${props => props.theme.spacing.tiny};
  margin-right: ${props => props.theme.spacing.tiny};
  overflow: hidden;
  transition: ${props => props.href && props.theme.transitions.default};
  :hover {
    opacity: ${props => props.href && 0.7};
  }
  :last-child {
    margin-right: 0;
  }
`
const Icon = styled.div`
  align-items: center;
  display: flex;
  padding: 0 ${props => props.theme.spacing.tiny};
`
const Typography = styled(Typography_)`
  background-color: rgba(255, 255, 255, 0.5);
  border-radius: 0 ${props => props.theme.layout.borderRadius}
    ${props => props.theme.layout.borderRadius} 0;
  font-weight: bold;
  font-size: 0.8125em;
  padding: ${props => props.theme.spacing.tiny};
`
