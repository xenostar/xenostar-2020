import React from 'react'
import styled from 'styled-components'
import { Row as Row_, Logo, Nav, MobileNavBurger } from 'components'

export const TopBar = () => (
  <StyledTopBar>
    <Gradient />
    <Row>
      <Logo />
      <Nav />
      <MobileNavBurger />
    </Row>
  </StyledTopBar>
)

const StyledTopBar = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  pointer-events: none;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  user-select: none;
  z-index: 100;
`
const Gradient = styled.div`
  background-image: ${props => props.theme.colors.gradient};
  height: ${props => props.theme.layout.topBar};
  display: flex;
  width: 100%;
`
const Row = styled(Row_)`
  align-content: center;
  flex-direction: row;
  justify-content: space-between;
  max-width: none;
  padding: ${props => props.theme.layout.padding};
`
