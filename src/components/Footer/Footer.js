import React from 'react'
import styled from 'styled-components'
import { Row, Col as Col_, Social } from 'components'
import { IoIosHeart as IoIosHeart_ } from 'react-icons/io'
import { media } from 'utils'

export const Footer = () => (
  <StyledFooter>
    <Row>
      <Col width="49%">
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
  padding-top: ${props => props.theme.layout.spacingBig};
  padding-right: ${props => props.theme.layout.spacing};
  padding-bottom: ${props => props.theme.layout.spacing};
  padding-left: ${props => props.theme.layout.spacing};
`
const Col = styled(Col_)`
  ${media.tablet`
    align-items: center;
    width: 100%;
  `}
`
const Text = styled.h5`
  align-items: center;
  display: flex;
`
const IoIosHeart = styled(IoIosHeart_)`
  font-size: 21px;
  margin: 0 ${props => props.theme.layout.borderRadius};
  transition: ${props => props.theme.transitions.default};
  ${Text}:hover & {
    color: ${props => props.theme.colors.primary};
  }
`
