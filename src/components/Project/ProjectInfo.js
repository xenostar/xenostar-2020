import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Typography } from 'components'

export const ProjectInfo = ({
  link = 'https://www.google.com',
  tools = 'None'
}) => (
  <StyledProjectInfo>
    <Typography>Link: {link}</Typography>
    <Typography>Tools: {tools}</Typography>
  </StyledProjectInfo>
)

ProjectInfo.propTypes = {
  link: PropTypes.string,
  tools: PropTypes.string
}

const StyledProjectInfo = styled.div`
  display: flex;
  width: 100%;
`
