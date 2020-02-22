import React from 'react'
import styled from 'styled-components'
import { Row, Col as Col_, Social } from 'components'
import { IoIosHeart } from 'react-icons/io'
import { media } from 'utils'

export const Footer = () => (
  <StyledFooter>
    <Row>
      <Col width="50%">
        <Text>Built with <IoIosHeart /> by Xenostar.</Text>
      </Col>
      <Col align="flex-end" justify="space-between" width="49%">
        <Social />
      </Col>
    </Row>
  </StyledFooter>
)

const StyledFooter = styled.footer`
  background-color: #f9f9f9;
  display: flex;
  justify-content: center;
  margin-top: auto;
  padding-top: ${props => props.theme.layout.paddingBig};
  padding-right: ${props => props.theme.layout.padding};
  padding-bottom: ${props => props.theme.layout.padding};
  padding-left: ${props => props.theme.layout.padding};
`
const Col = styled(Col_)`
  ${media.tablet`
    align-items: center;
    width: 100%;
  `}
`
const Text = styled.h5``
