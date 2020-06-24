import React from 'react'
import styled from 'styled-components'
import { Row, Col as Col_, Anchor } from 'components'
import { useHomeApi } from 'hooks'
import { media, routes } from 'utils'

export const HeaderHome = () => {
  const { introText } = useHomeApi()

  return (
    <StyledHeader>
      <Row>
        <Col>
          <Title>
            Hi, I&apos;m <span>Bryan</span>
            <br />I make <Anchor to={routes.portfolio.url}>things</Anchor>
          </Title>
          <IntroText>{introText}</IntroText>
        </Col>
      </Row>
    </StyledHeader>
  )
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
  ${media.tablet`
    font-size: 10.5vw;
  `}
`
const IntroText = styled.h3``
