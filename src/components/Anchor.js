import styled from 'styled-components'
import { Link } from 'gatsby'
import { routes } from 'utils'

export const Anchor = styled(Link).attrs(props => ({
  activeClassName: 'active',
  to: props.to || routes.home.url
}))``
