import React from 'react'
import styled from 'styled-components'
import { Row, Col } from 'components'
import { media } from 'utils'

export const Header = ({ title, desc }) => (
  <StyledHeader>
    <Row>
      <Col>
        <Title>
          {title}
        </Title>
        <SubTitle>
          {desc}
        </SubTitle>
      </Col>
    </Row>
  </StyledHeader>
)

const StyledHeader = styled.header`
  display: flex;
  justify-content: center;
  padding-top: 150px;
  padding-right: ${props => props.theme.layout.padding};
  padding-left: ${props => props.theme.layout.padding};
`
const Title = styled.h1`
  margin-bottom: 0 !important;
  span {
    color: ${props => props.theme.colors.primary};
  }
  ${media.tablet`
    font-size: 10.5vw;
  `}
`
const SubTitle = styled.h3``
