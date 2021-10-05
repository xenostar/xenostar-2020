import { useState } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Row as Row_, Logo, ButtonBack, Nav, MobileNavBurger } from 'components'
import { isSubPage, routes } from 'utils'
import { useScrollPosition } from '@n8tb1t/use-scroll-position'

export const TopBar = ({ path }) => {
  const [isSmall, setIsSmall] = useState(false)

  useScrollPosition(({ currPos }) => {
    Math.abs(currPos.y) >= 30 ? setIsSmall(true) : setIsSmall(false)
  })

  return (
    <StyledTopBar isSmall={isSmall}>
      <Gradient />
      <Row isSmall={isSmall} wrap="nowrap">
        <Logo isSmall={isSmall} />
        {isSubPage(path, routes.blog.name) && (
          <ButtonBack to={routes.blog.url}>
            back to {routes.blog.name}
          </ButtonBack>
        )}
        {isSubPage(path, routes.portfolio.name) && (
          <ButtonBack to={routes.portfolio.url}>
            back to {routes.portfolio.name}
          </ButtonBack>
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
    props.isSmall ? props.theme.palette.background.topBar : 'transparent'};
  box-shadow: ${props => props.isSmall && props.theme.palette.boxShadow.topBar};
  display: flex;
  flex-direction: column;
  justify-content: center;
  pointer-events: ${props => props.collapsed && 'none'};
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  transition: ${({ theme }) => theme.transition.default};
  user-select: none;
  z-index: 100;
`
const Gradient = styled.div`
  background-image: ${({ theme }) => theme.palette.gradient};
  height: ${({ theme }) => theme.layout.topBar};
  display: flex;
  width: 100%;
`
const Row = styled(Row_)`
  max-width: none;
  padding: ${props =>
    props.isSmall ? props.theme.spacing.small : props.theme.spacing.default};
  padding-left: ${({ theme }) => theme.spacing.default};
  padding-right: ${({ theme }) => theme.spacing.default};
  transition: ${({ theme }) => theme.transition.default};
`
