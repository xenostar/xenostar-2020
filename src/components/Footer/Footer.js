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
  padding: ${props => props.theme.layout.paddingBig} ${props => props.theme.layout.padding};
`
