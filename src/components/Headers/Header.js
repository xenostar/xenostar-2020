import React from 'react'
import styled from 'styled-components'
import { Row, Col } from 'components'
import { media } from 'utils'

export const Header = ({ title, introText }) => (
  <StyledHeader>
    <Row>
      <Col>
        <Title>
          {title}
        </Title>
        <IntroText>
          {introText}
        </IntroText>
      </Col>
    </Row>
  </StyledHeader>
)

const StyledHeader = styled.header`
  display: flex;
  justify-content: center;
  padding-top: 9.0625rem; /* 145px */
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
const IntroText = styled.h3``
