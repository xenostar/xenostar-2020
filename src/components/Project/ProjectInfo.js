import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Chip, ChipLink, Row as Row_ } from 'components'

export const ProjectInfo = ({
  link = 'https://www.google.com',
  tools = 'None'
}) => (
  <StyledProjectInfo>
    <Row align="center" justify="flex-start">
      {link && <ChipLink href={link} text={link} />}
      <Chip text={tools} />
    </Row>
  </StyledProjectInfo>
)

ProjectInfo.propTypes = {
  link: PropTypes.string,
  tools: PropTypes.string
}

const StyledProjectInfo = styled.div`
  display: flex;
  margin-top: ${props => props.theme.spacing.default};
  width: 100%;
`
const Row = styled(Row_)`
  margin-top: -${props => props.theme.spacing.tiny};
`
