import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Row, Col as Col_, Typography as Typography_ } from 'components'
import { media } from 'utils'

export const HeaderProject = ({ name = 'Lorem Ipsum' }) => (
  <StyledHeaderProject>
    <Row>
      <Col>
        <Typography as="h1" size="h2">
          {name}
        </Typography>
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
  padding-right: ${props => props.theme.spacing.default};
  padding-left: ${props => props.theme.spacing.default};
`
const Col = styled(Col_)`
  margin-bottom: 0;
`
const Typography = styled(Typography_)`
  ${media.tablet`
    font-size: 10.5vw;
  `}
`
