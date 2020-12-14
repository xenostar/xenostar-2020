import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Typography as Typography_ } from 'components'
import { FaWrench } from 'react-icons/fa'

export const Chip = ({ icon = null, text = 'None', ...props }) => (
  <StyledChip {...props}>
    <Icon>{icon || <FaWrench />}</Icon>
    <Typography noWrap>{text}</Typography>
  </StyledChip>
)

Chip.propTypes = {
  icon: PropTypes.node,
  text: PropTypes.string
}

const StyledChip = styled.div`
  align-items: stretch;
  display: flex;
  margin-top: ${props => props.theme.spacing.tiny};
  margin-right: ${props => props.theme.spacing.tiny};
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
