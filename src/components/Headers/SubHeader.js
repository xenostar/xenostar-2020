import React from 'react'
import styled from 'styled-components'
import { Row } from 'components'

export const SubHeader = ({ siteAbbrv = "xs", page = "page" }) => (
  <StyledHeader>
    <Row>
      <h1>{siteAbbrv}/<span>{page}</span></h1>
    </Row>
  </StyledHeader>
)

const StyledHeader = styled.header`
  display: flex;
  justify-content: center;
  padding: ${props => props.theme.layout.paddingBig} ${props => props.theme.layout.padding};

  h1 {
    color: #222;
    font-family: 'Ubuntu', sans-serif;
    font-size: 5em;
    line-height: 1;
    user-select: none;
  }
  span {
    color: #90c7a8;
    transition: all 0.3s ease;
  }
  &:hover span {
    color: #90c7a8;
  }
`
