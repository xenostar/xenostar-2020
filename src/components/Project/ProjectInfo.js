import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Typography as Typography_ } from 'components'
import { FaWrench as FaWrench_ } from 'react-icons/fa'

export const ProjectInfo = ({
  // link = 'https://www.google.com',
  tools = 'None'
}) => (
  <StyledProjectInfo>
    <FaWrench />
    <Typography>{tools}</Typography>
  </StyledProjectInfo>
)

ProjectInfo.propTypes = {
  link: PropTypes.string,
  tools: PropTypes.string
}

const StyledProjectInfo = styled.div`
  align-items: center;
  background-color: ${props => props.theme.colors.lightGreen};
  border-left: 6px solid ${props => props.theme.colors.primary};
  border-radius: ${props => props.theme.layout.borderRadius};
  display: flex;
  margin-bottom: ${props => props.theme.layout.spacing};
  padding: ${props => props.theme.layout.spacingTiny};
  width: 100%;
`
const FaWrench = styled(FaWrench_)`
  margin-right: ${props => props.theme.layout.spacingTiny};
`
const Typography = styled(Typography_)`
  font-weight: bold;
  font-size: 1em;
`
