import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Row as Row_, Logo, BackButton, Nav, MobileNavBurger } from 'components'
import { isSubPage, routes } from 'utils'

export const TopBar = ({ path }) => (
  <StyledTopBar>
    <Gradient />
    <Row>
      <Logo />
      {isSubPage(path, routes.blog) && (
        <BackButton to={routes.blog}>back to blog</BackButton>
      )}
      {isSubPage(path, routes.portfolio) && (
        <BackButton to={routes.portfolio}>back to portfolio</BackButton>
      )}
      <Nav />
      <MobileNavBurger />
    </Row>
  </StyledTopBar>
)

TopBar.propTypes = {
  path: PropTypes.string
}

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
  padding: ${props => props.theme.layout.spacing};
`
