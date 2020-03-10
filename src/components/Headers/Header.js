import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { Row, Col as Col_ } from 'components'
import { media } from 'utils'

export const Header = ({
  introText = 'Lorem Ipsum',
  title = 'Lorem Ipsum',
}) => (
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

Header.propTypes = {
  introText: PropTypes.string,
  title: PropTypes.string,
}

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
