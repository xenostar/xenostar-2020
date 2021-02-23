import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Typography as Typography_ } from 'components'
import { FaLink, FaWrench } from 'react-icons/fa'

export const Chip = ({
  href = null,
  icon = null,
  rel = 'noopener noreferrer',
  target = '_blank',
  text = 'None',
  ...props
}) => (
  <StyledChip
    {...(href && {
      as: 'a',
      href: href
    })}
    {...(target === '_blank' && { target, rel })}
    {...props}
  >
    <Icon>{icon || (href ? <FaLink /> : <FaWrench />)}</Icon>
    <Typography noWrap>{text || href}</Typography>
  </StyledChip>
)

Chip.propTypes = {
  href: PropTypes.string,
  icon: PropTypes.node,
  rel: PropTypes.string,
  target: PropTypes.string,
  text: PropTypes.string
}

const StyledChip = styled.div`
  align-items: stretch;
  display: flex;
  margin-top: ${props => props.theme.spacing.tiny};
  margin-right: ${props => props.theme.spacing.tiny};
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
  background-color: ${props => props.theme.colors.primary};
  border-radius: ${props => props.theme.layout.borderRadius} 0 0
    ${props => props.theme.layout.borderRadius};
  display: flex;
  padding: 0 ${props => props.theme.spacing.tiny};
`
const Typography = styled(Typography_)`
  background-color: ${props => props.theme.colors.lightGreen};
  border-radius: 0 ${props => props.theme.layout.borderRadius}
    ${props => props.theme.layout.borderRadius} 0;
  font-weight: bold;
  font-size: 0.8125em;
  padding: ${props => props.theme.spacing.tiny};
`
