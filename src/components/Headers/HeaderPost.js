import React from 'react'
import styled from 'styled-components'
import { Row, Col as Col_, BlogDate, BlogShare as BlogShare_ } from 'components'
import { media } from 'utils'

export const HeaderPost = ({ title, date, introText }) => (
  <StyledHeaderPost>
    <Row>
      <Col>
        <Title>{title}</Title>
        <Meta>
          <BlogDate>{date}</BlogDate>
          <BlogShare />
        </Meta>
        <IntroText>{introText}</IntroText>
      </Col>
    </Row>
  </StyledHeaderPost>
)

const StyledHeaderPost = styled.header`
  display: flex;
  justify-content: center;
  padding-top: 9.125rem; /* 146px */
  padding-right: ${props => props.theme.layout.spacing};
  padding-left: ${props => props.theme.layout.spacing};
`
const Col = styled(Col_)`
  margin-bottom: 0;
`
const Title = styled.h2`
  ${media.tablet`
    font-size: 10.5vw;
  `}
`
const Meta = styled.div`
  display: flex;
  margin-bottom: ${props => props.theme.layout.spacing};
  width: 100%;
`
const BlogShare = styled(BlogShare_)`
  margin-left: ${props => props.theme.layout.spacingSmall};
`
const IntroText = styled.h5`
  color: ${props => props.theme.colors.primary};
`
