import React from 'react'
import styled from 'styled-components'
import { Row, Col } from 'components'
import AniLink from 'gatsby-plugin-transition-link/AniLink'
import { media, routes } from 'utils'

export const HeaderHome = () => (
  <StyledHeader>
    <Row>
      <Col>
        <Title>
          Hi, I'm <span>Bryan</span>
          <br />I make <AniLink bg="#90c7a8" cover direction="right" to={routes.portfolio}>things</AniLink>
        </Title>
        <SubTitle>
          Welcome to my portfolio. Creating beautiful, elegant web applications
          is my passion. Browse my portfolio and learn more about who I am and
          what I do.
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
