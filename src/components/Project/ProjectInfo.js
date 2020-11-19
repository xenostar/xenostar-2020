import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Row as Row_, Typography as Typography_ } from 'components'
import { FaLink, FaWrench } from 'react-icons/fa'

export const ProjectInfo = ({
  link = 'https://www.google.com',
  tools = 'None'
}) => (
  <StyledProjectInfo>
    <Row align="center" justify="flex-start">
      {link && (
        <Resource>
          <Icon>
            <FaLink />
          </Icon>
          <Typography noWrap>{link}</Typography>
        </Resource>
      )}
      <Resource>
        <Icon>
          <FaWrench />
        </Icon>
        <Typography noWrap>{tools}</Typography>
      </Resource>
    </Row>
  </StyledProjectInfo>
)

ProjectInfo.propTypes = {
  link: PropTypes.string,
  tools: PropTypes.string
}

const StyledProjectInfo = styled.div`
  display: flex;
  margin-top: ${props => props.theme.layout.spacing};
  width: 100%;
`
const Row = styled(Row_)`
  margin-top: -${props => props.theme.layout.spacingTiny};
`
const Resource = styled.div`
  align-items: stretch;
  display: flex;
  margin-top: ${props => props.theme.layout.spacingTiny};
  margin-right: ${props => props.theme.layout.spacingTiny};
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
  padding: 0 ${props => props.theme.layout.spacingTiny};
`
const Typography = styled(Typography_)`
  background-color: ${props => props.theme.colors.lightGreen};
  border-radius: 0 ${props => props.theme.layout.borderRadius}
    ${props => props.theme.layout.borderRadius} 0;
  font-weight: bold;
  font-size: 0.8125em;
  padding: ${props => props.theme.layout.spacingTiny};
`
