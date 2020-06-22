import React from 'react'
import styled from 'styled-components'
import { NavLink as NavLink_ } from 'components'

export const BackButton = props => <NavLink {...props} />

const NavLink = styled(NavLink_)`
  margin-left: ${props => props.theme.layout.spacing};
  margin-right: auto;
  padding: 0;
  pointer-events: auto;
`
