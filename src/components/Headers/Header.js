import React from 'react'
import styled from 'styled-components'
import { Row, Col as Col_ } from 'components'
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
  padding-top: 9.125rem; /* 146px */
  padding-right: ${props => props.theme.layout.spacing};
  padding-left: ${props => props.theme.layout.spacing};
`
const Col = styled(Col_)`
  margin-bottom: 0;
`
const Title = styled.h1`
  margin-bottom: 0;
  span {
    color: ${props => props.theme.colors.primary};
  }
  ${media.tablet`
    font-size: 10.5vw;
  `}
`
const IntroText = styled.h3``
