import React from 'react'
import styled from 'styled-components'
import { Row } from 'components'

export const Header = () => (
  <StyledHeader>
    <Row>
      <h1>xeno<span>star</span></h1>
    </Row>
  </StyledHeader>
)

const StyledHeader = styled.header`
  display: flex;
  justify-content: center;
  padding-top: ${props => props.theme.layout.paddingBig};
  padding-right: ${props => props.theme.layout.padding};
  padding-bottom: ${props => props.theme.layout.paddingBig};
  padding-left: ${props => props.theme.layout.padding};
  h1 {
    color: ${props => props.theme.colors.secondary};
    font-family: 'Ubuntu', sans-serif;
    line-height: 1;
    user-select: none;
  }
  span {
    color: ${props => props.theme.colors.primary};
    transition: ${props => props.theme.transitions.default};
  }
  &:hover span {
    color: ${props => props.theme.colors.primary};
  }
`
