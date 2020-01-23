import React from 'react'
import styled from 'styled-components'
import { Row } from 'components'

export const Footer = () => (
  <StyledFooter>
    <Row>
      <p>Footer</p>
    </Row>
  </StyledFooter>
)

const StyledFooter = styled.footer`
  display: flex;
  justify-content: center;
  margin-top: auto;
  padding-top: ${props => props.theme.layout.paddingBig};
  padding-right: ${props => props.theme.layout.padding};
  padding-bottom: ${props => props.theme.layout.paddingBig};
  padding-left: ${props => props.theme.layout.padding};
`
