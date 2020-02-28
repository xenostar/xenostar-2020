import React from 'react'
import styled from 'styled-components'
import { Row, Col as Col_, BlogDate } from 'components'
import { media } from 'utils'

export const HeaderPost = ({ title, date, introText }) => (
  <StyledHeaderPost>
    <Row>
      <Col>
        <Title>{title}</Title>
        <BlogDate>{date}</BlogDate>
        <IntroText>{introText}</IntroText>
      </Col>
    </Row>
  </StyledHeaderPost>
)

const StyledHeaderPost = styled.header`
  display: flex;
  justify-content: center;
  padding-top: 9.125rem; /* 146px */
  padding-right: ${props => props.theme.layout.padding};
  padding-left: ${props => props.theme.layout.padding};
`
const Col = styled(Col_)`
  margin-bottom: 0;
`
const Title = styled.h2`
  ${media.tablet`
    font-size: 10.5vw;
  `}
`
const IntroText = styled.h5`
  color: ${props => props.theme.colors.primary};
`
