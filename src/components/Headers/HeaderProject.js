import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Row, Col as Col_, Typography } from 'components'
import { media } from 'utils'

export const HeaderProject = ({ name = 'Lorem Ipsum' }) => (
  <StyledHeaderProject>
    <Row>
      <Col>
        <Name as="h1" size="h2">
          {name}
        </Name>
      </Col>
    </Row>
  </StyledHeaderProject>
)

HeaderProject.propTypes = {
  name: PropTypes.string
}

const StyledHeaderProject = styled.header`
  display: flex;
  justify-content: center;
  padding-top: 9.125rem; /* 146px */
  padding-right: ${props => props.theme.layout.spacing};
  padding-left: ${props => props.theme.layout.spacing};
`
const Col = styled(Col_)`
  margin-bottom: 0;
`
const Name = styled(Typography)`
  ${media.tablet`
    font-size: 10.5vw;
  `}
`
