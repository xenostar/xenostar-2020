import React, { useState } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Row as Row_, Logo, BackButton, Nav, MobileNavBurger } from 'components'
import { isSubPage, routes } from 'utils'
import { useScrollPosition } from '@n8tb1t/use-scroll-position'

export const TopBar = ({ path }) => {
  const [collapsed, setCollapsed] = useState(false)

  useScrollPosition(({ currPos }) => {
    if (Math.abs(currPos.y) >= 50) {
      setCollapsed(true)
    } else {
      setCollapsed(false)
    }
  })

  return (
    <StyledTopBar collapsed={collapsed}>
      <Gradient />
      <Row collapsed={collapsed}>
        <Logo collapsed={collapsed} />
        {isSubPage(path, routes.blog.name) && (
          <BackButton to={routes.blog.url}>
            back to {routes.blog.name}
          </BackButton>
        )}
        {isSubPage(path, routes.portfolio.name) && (
          <BackButton to={routes.portfolio.url}>
            back to {routes.portfolio.name}
          </BackButton>
        )}
        <Nav />
        <MobileNavBurger />
      </Row>
    </StyledTopBar>
  )
}

TopBar.propTypes = {
  path: PropTypes.string
}

const StyledTopBar = styled.div`
  background-color: ${props =>
    props.collapsed ? 'rgba(255,255,255,0.95)' : 'transparent'};
  box-shadow: ${props => props.collapsed && `0 0 8px rgba(0, 0, 0, 0.1)`};
  display: flex;
  flex-direction: column;
  justify-content: center;
  pointer-events: none;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  transition: ${props => props.theme.transitions.default};
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
  max-width: none;
  padding: ${props =>
    props.collapsed
      ? props.theme.layout.spacingSmall
      : props.theme.layout.spacing};
  padding-left: ${props => props.theme.layout.spacing};
  padding-right: ${props => props.theme.layout.spacing};
  transition: ${props => props.theme.transitions.default};
`
