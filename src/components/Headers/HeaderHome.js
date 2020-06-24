import React from 'react'
import styled, { css } from 'styled-components'
import { Row, Col as Col_, Typography, Anchor } from 'components'
import { useHomeApi } from 'hooks'
import { media, routes } from 'utils'

export const HeaderHome = () => {
  const { introText } = useHomeApi()

  return (
    <StyledHeader>
      <Row>
        <Col>
          <Title as="h1" size="h1">
            Hi, I&apos;m <span>Bryan</span>
            <br />I make <Anchor to={routes.portfolio.url}>things</Anchor>
          </Title>
          <Typography as="h2" size="h3">
            {introText}
          </Typography>
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
const Title = styled(Typography)`
  ${media.tablet`
    font-size: 10.5vw;
  `}
`
