import React from 'react'
import styled, { keyframes } from 'styled-components'
import { Row, Col as Col_, Typography, Social } from 'components'
import { IoIosHeart as IoIosHeart_ } from 'react-icons/io'
import { media } from 'utils'

export const Footer = () => (
  <StyledFooter>
    <Row>
      <Col width="49%">
        <Text as="h4" size="h5">
          Built with <IoIosHeart /> by Xenostar.
        </Text>
      </Col>
      <Col width="49%" align="flex-end" justify="space-between">
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
const Text = styled(Typography)`
  align-items: center;
  display: flex;
`
const HeartBeat = keyframes`
  0% { transform: scale(1); }
  5% { transform: scale(1.1); }
  10% { transform: scale(1); }
  15% { transform: scale(1.2); }
  50% { transform: scale(1); }
  100% { transform: scale(1); }
`
const IoIosHeart = styled(IoIosHeart_)`
  cursor: none;
  font-size: 21px;
  margin: 0 ${props => props.theme.layout.borderRadius};
  transition: ${props => props.theme.transitions.default};
  ${Text}:hover & {
    animation: ${HeartBeat} 2.5s infinite;
    color: ${props => props.theme.colors.primary};
  }
`
