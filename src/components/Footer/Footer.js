import React from 'react'
import styled from 'styled-components'
import { Row } from 'components'
import { IoIosHeart } from 'react-icons/io'

export const Footer = () => (
  <StyledFooter>
    <Row>
      <h6>Built with <IoIosHeart /> by <a href="https://github.com/xenostar" target="_blank" rel="noopener noreferrer">Xenostar</a>.</h6>
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
  padding-bottom: ${props => props.theme.layout.paddingBig};
  padding-left: ${props => props.theme.layout.padding};
`
