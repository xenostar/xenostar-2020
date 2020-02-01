import React from 'react'
import styled from 'styled-components'
import { Row as Row_, Logo, TopBarBurger } from 'components'

export const TopBar = () => (
  <StyledTopBar>
    <Row>
      <Logo />
      <TopBarBurger />
    </Row>
  </StyledTopBar>
)

const StyledTopBar = styled.div`
  border-top: ${props => props.theme.layout.topBar} solid ${props => props.theme.colors.primary};
  display: flex;
  justify-content: center;
  padding: ${props => props.theme.layout.padding};
  padding-bottom: 0;
  pointer-events: none;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  user-select: none;
  z-index: 100;
`
const Row = styled(Row_)`
  align-content: center;
  flex-direction: row;
  justify-content: space-between;
  max-width: none;
`
