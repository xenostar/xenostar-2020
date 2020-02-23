import React from 'react'
import styled from 'styled-components'
import { Row, Col as Col_ } from 'components'
import AniLink from 'gatsby-plugin-transition-link/AniLink'
import { media, routes } from 'utils'
import { useHomeApi } from 'hooks'

export const HeaderHome = () => {
  const { introText } = useHomeApi()

  return (
    <StyledHeader>
      <Row>
        <Col>
          <Title>
            Hi, I'm <span>Bryan</span>
            <br />I make <AniLink bg="#90c7a8" cover direction="right" to={routes.portfolio}>things</AniLink>
          </Title>
          <IntroText>
            {introText}
          </IntroText>
        </Col>
      </Row>
    </StyledHeader>
  )
}

const StyledHeader = styled.header`
  display: flex;
  justify-content: center;
  padding-top: 9.0625rem; /* 145px */
  padding-right: ${props => props.theme.layout.padding};
  padding-left: ${props => props.theme.layout.padding};
`
const Col = styled(Col_)`
  margin-bottom: 0;
`
const Title = styled.h1`
  span {
    color: ${props => props.theme.colors.primary};
  }
  ${media.tablet`
    font-size: 10.5vw;
  `}
`
const IntroText = styled.h3``
