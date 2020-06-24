import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Row, Col as Col_, BlogDate, BlogShare as BlogShare_ } from 'components'
import { media } from 'utils'

export const HeaderPost = ({
  date = 'Date',
  introText = 'Lorem Ipsum',
  path = '',
  title = 'Lorem Ipsum'
}) => (
  <StyledHeaderPost>
    <Row>
      <Col>
        <Title>{title}</Title>
        <Meta>
          <BlogDate>{date}</BlogDate>
          <BlogShare path={path} />
        </Meta>
        <IntroText>{introText}</IntroText>
      </Col>
    </Row>
  </StyledHeaderPost>
)

HeaderPost.propTypes = {
  date: PropTypes.string,
  introText: PropTypes.string,
  path: PropTypes.string,
  title: PropTypes.string
}

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
  border-left: 1px solid #ddd;
  margin-left: ${props => props.theme.layout.spacingSmall};
  padding-left: ${props => props.theme.layout.spacingSmall};
`
const IntroText = styled.h5`
  color: ${props => props.theme.colors.primary};
`
