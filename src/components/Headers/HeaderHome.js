import React from 'react'
import styled from 'styled-components'
import { Row, Col } from 'components'
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
          <SubTitle>
            {introText}
          </SubTitle>
        </Col>
      </Row>
    </StyledHeader>
  )
}

const StyledHeader = styled.header`
  display: flex;
  justify-content: center;
  padding-top: 150px;
  padding-right: ${props => props.theme.layout.padding};
  padding-left: ${props => props.theme.layout.padding};
  /* padding-bottom: ${props => props.theme.layout.paddingHuge}; */
`
const Title = styled.h1`
  span {
    color: ${props => props.theme.colors.primary};
  }
  ${media.tablet`
    font-size: 10.5vw;
  `}
`
const SubTitle = styled.h3``
