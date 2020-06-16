import React from 'react'
import styled from 'styled-components'
import { Anchor as Anchor_ } from 'components'

export const BackButton = props => <Anchor {...props} />

const Anchor = styled(Anchor_)`
  align-items: center;
  display: inline-flex;
  margin-left: ${props => props.theme.layout.spacing};
  margin-right: auto;
  pointer-events: auto;
`
